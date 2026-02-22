
//CONFIGURATION LECTURE
try{
    
    //VARIABLES
    
    //emplacement d'affichage du strip
    let strip = document.getElementById("strip")
    let couv = document.getElementById("couv")
    
    //récupération des boutons "tome" de l'index
    let listeTomes = document.querySelectorAll("button")
    
    //recuperation des divs déroulantes
    let listeDivStrips = document.querySelectorAll(".navigationIndex div")
    
    //récupération de la liste de strips de l'index
    let listeStrips = document.querySelectorAll(".navigationIndex a")
   
    //récupération des emplacements du compteur de strips
    let emplacementcompteur = document.getElementById("lecture")
    let compteurSmartphone = document.getElementById("lectureSmartphone")

    
    //FONCTIONS
    
    function couleurTomeIndex (indice){
    let indiceTome
        if (indice < 16){
                indiceTome = 0
            }
            if (indice > 15){
                indiceTome = 1
            }
            if (indice > 31){
                indiceTome = 2
            }
            if (indice > 47){
                indiceTome = 3
            }
            if (indice > 63){
                indiceTome = 4
        
            }
            if (indice > 79){
                indiceTome = 5
            }
            //application de la classe en fonction de l'indice    
            for(i=0;i<listeTomes.length;i++){
                if(i===indiceTome){
                    listeTomes[i].classList.add("tomeActuel")
                }else {
                    listeTomes[i].classList.remove("tomeActuel")                
                }
            }
        //affichage de l'image de fond correspondante
        document.getElementById("image2fond").style.backgroundImage=`url('images/deco/couv_0${indiceTome+1}.jpg')`
        document.getElementById("image2fond").style.backgroundPosition="center"
    
    }
    
    function couleurStripIndex (indice){

        //colorisation du numéro du strip affiché dans l'Index
        if(indice === 0 || indice === 16 || indice === 32 || indice === 48 || indice === 64 || indice === 80){
            listeStrips[indice].classList.add("stripActuel")
        }
        else{
            listeStrips[indice].classList.remove("stripActuel")
            for (k=0;k<listeStrips.length;k++){
                if (listeStrips[k].innerText == liste[indice]){
                    listeStrips[k].classList.add("stripActuel")
                }else{
                    listeStrips[k].classList.remove("stripActuel")
                }
            }
        }
    }
    
    function affichageStrip(indice){

        //affichage des couvertures
        if(indice === 0 || indice === 16 || indice === 32 || indice === 48 || indice === 64 || indice === 80){
            strip.hidden=true
            couv.hidden=false
            couv.src = `images/strips/couv_t${liste[indice]}.jpg`
            couv.alt = `couverture tome ${liste[indice]}`
            document.querySelector("main").style.backgroundColor = "transparent"
            // document.querySelector(".conteneur").style = ("width:80%;")

            //affichage du compteur
            if (indice ===0) {
            emplacementcompteur.innerHTML = `<h2><i class="fa-solid fa-star"></i> ${compteur}</h2>`
            compteurSmartphone.innerHTML = `${compteur}`
            }else {                
                emplacementcompteur.innerHTML = `<h2><i class="fa-solid fa-star"></i> TOME ${liste[indice]}</h2>`
                compteurSmartphone.innerHTML = `<i class="fa-solid fa-star"></i> TOME ${liste[indice]}`
            }
            
            //masquage des flèches de navigation sur les couvertures
            document.querySelector("#precedent img").hidden = true
            document.querySelector("#suivant img").hidden = true

            //style du top menu smartphone
            document.querySelector(".menuSmartphone").style.background = "transparent"
            document.querySelector(".menuSmartphone").style.color = "#722026"
            document.getElementById("masque").hidden=true
            document.getElementById("footerSmartphone").style.background = "transparent"
            
        }
        //affichage des strips
        else{
            couv.hidden=true
            strip.hidden=false
            document.querySelector("main").style.backgroundColor = "white"
            strip.alt = `strip ${liste[indice]}`
            //exception pour le strip en gif
            if(indice ===59){
                strip.src = `jo/strips/strip_${liste[indice]}_${langue}.gif`
                // strip.src = `https://klaimsden.net/jackpot/jo/strips/strip_${liste[indice]}_${langue}.gif`
                
            }else{
                strip.src = `jo/strips/strip_${liste[indice]}_${langue}.jpg`
                // strip.src = `https://klaimsden.net/jackpot/jo/strips/strip_${liste[indice]}_${langue}.jpg`
            }
            document.querySelector(".conteneur").style = ("width:100%;")
            
            //affichage du compteur
            emplacementcompteur.innerHTML = `<h2><i class="fa-solid fa-star"></i> ${liste[indice]} / 95</h2>`
            compteurSmartphone.innerHTML = `${liste[indice]}/95`
            
            //réaffichage des flèches de navigation
            document.querySelector("#precedent img").hidden = false
            document.querySelector("#suivant img").hidden = false
            
            //style du top menu smartphone
            document.querySelector(".menuSmartphone").style.background = "linear-gradient(to bottom, white, 90%, transparent)"
            document.querySelector(".menuSmartphone").style.color ="#722026"
            document.getElementById("masque").hidden=false
            document.getElementById("footerSmartphone").style.background = "linear-gradient(to top, white, 90%, transparent)"
        }     
    
        //colorisation du numéro de tome et de strip dans l'index
        couleurTomeIndex(indice)
        couleurStripIndex(indice)

        //enregistrement du dernier strip affiché (exception : début)
        if(indice !==0){
            sessionStorage.setItem('dernierStripVu', indice)
        }
    }
    
    function navigation(indice){
        window.scrollTo(0,0)
        affichageStrip(indice)
        affichagePrecedentSuivant(indice)
        if (Number(sessionStorage.getItem('dernierStripVu')) === indice){
            document.getElementById("dernierStrip").hidden = true
        }
    }
    
    //LANCEMENT DE LA LECTURE

    //récupération de l'indice voulu

    console.log("indice au chargement de la page : "+indice)


    if (Number(sessionStorage.getItem('indiceNul'))===0){
        indice = 0
        sessionStorage.setItem('indiceNul', 1)
    }else{
        if (sessionStorage.getItem('dernierStripVu')!== "undefined" || sessionStorage.getItem('dernierStripVu') !== null ){
            indice = Number(sessionStorage.getItem('dernierStripVu'))        
        }else{
            indice = 0
        }
    }

    navigation(indice)

    console.log("indice du strip affiché : "+indice)

    console.log("indice du dernier strip vu : "+sessionStorage.getItem('dernierStripVu'))
   
    //NAVIGATION LECTURE

    //flèches du clavier
    window.document.addEventListener("keydown", (event) => {
    
        switch (event.key) {
            case "ArrowLeft":
                if (indice>0){
                    indice --
                    navigation(indice)
                    // affichageStrip(indice)
                    // affichagePrecedentSuivant(indice)
                }
                break;
            case "ArrowRight":
                if (indice<100){
                    indice ++
                    navigation(indice)
                    // affichageStrip(indice)
                    // affichagePrecedentSuivant(indice)              
                }
                break;
        }
    })
       
    //clic sur un numéro de tome dans l'index
    for(i=0;i<listeTomes.length; i++){
        listeTomes[i].addEventListener("click", (event) => {
            
            //PATOUCH, MENU DEROULANTS
            //contrôle de la cible par rapport à la précédente et ajout de la classe multi-collapse sur la div correspondante
            if (event.target.id == numeroTome && multicollapse === true){
                document.getElementById(`T${event.target.id}`).classList.remove("multi-collapse")
                multicollapse = false
            }else {
                document.getElementById(`T${event.target.id}`).classList.add("multi-collapse")
                multicollapse = true
            }
            //suppression sur les autres        
            for (c=0;c<listeDivStrips.length;c++){
                if (listeDivStrips[c].id !== `T${event.target.id}`){
                    listeDivStrips[c].classList.remove("multi-collapse")
                }
            }
            // mise à jour du dernier bouton sélectionné
            numeroTome = Number(event.target.id)    
        })
    }
    
    //clic sur un numéro de strip dans l'index
    for (i=0;i<listeStrips.length;i++){
        listeStrips[i].addEventListener("click", (event) =>{
            window.scrollTo(0,0)
            
            //récupération de l'indice
            if (event.target.innerText!=="couverture" && event.target.innerText!=="cover"){
                indice = liste.indexOf(event.target.innerText)
                affichageStrip(indice)
                affichagePrecedentSuivant(indice)
            }else{
                affichageStrip(Number(event.target.id))
                affichagePrecedentSuivant(Number(event.target.id))
                indice = Number(event.target.id)
            }
            document.getElementById("dernierStrip").hidden=true;            
        })
    }
    
    //clic sur précédent
    document.getElementById("precedent").addEventListener("click",() =>{
        
        indice --
        navigation(indice)        
    })
    document.getElementById("aileen").addEventListener("click",() =>{
        
        indice --
        navigation(indice)        
    })

    //clic sur suivant
    document.getElementById("suivant").addEventListener("click",() =>{
        
        indice ++
        navigation(indice)        
    })
    document.getElementById("maighread").addEventListener("click",() =>{
        
        indice ++
        navigation(indice)   
    })
    

}catch{
    console.log("prout")
}    

