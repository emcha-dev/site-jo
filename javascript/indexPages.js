//récupération des boutons "tome" de l'index
let listeTomes = document.querySelectorAll("button")

//récupération de la liste de strips de l'index
let listeStrips = document.querySelectorAll(".navigationIndex a")

//recuperation des divs déroulantes
let listeDivStrips = document.querySelectorAll(".navigationIndex div")
    

//clic sur un numéro de strip dans l'index
for (i=0;i<listeStrips.length;i++){
    listeStrips[i].addEventListener("click", (event)=>{

        if (event.target.innerText!=="couverture" && event.target.innerText!=="cover"){
            sessionStorage.setItem('dernierStripVu', liste.indexOf(event.target.innerText))

        }else{
            sessionStorage.setItem('dernierStripVu', (Number(event.target.id)))
        }
    })
}


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
