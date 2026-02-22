
//VARIABLES GLOBALES

const liste = new Array()
let langue = "fr"
let indice    
let compteur
let bilingual
let numeroTome = 0
let multicollapse = false
// let interception


//FONCTIONS

//choix de la version FR ou EN
function choixLangue(choix){
    sessionStorage.setItem('langue', choix)
}

//application du choix de version
function version(langue){
    try{
        if(langue ==='en'){
            
            //traduction des noms de page
            switch (document.querySelector("title").innerText){
                case ("JO - lecture"):
                    document.querySelector("title").innerText = "JO - read"
                    break
                    case("JO - personnages"):
                    document.querySelector("title").innerText = "JO - cast"
                    break
                    case("JO - galerie"):
                    document.querySelector("title").innerText = "JO - gallery"
                    break
                    case("JO - à propos"):
                    document.querySelector("title").innerText = "JO - about"
                    break
                    case("JO - boutique"):
                    document.querySelector("title").innerText = "JO - shop"
                    break        
            }
            compteur = "START"
            bilingual = "last seen : "
            //masquage des éléments en français
            let baguette = window.document.querySelectorAll(".fr")
            for(i=0;i<baguette.length;i++){
                baguette[i].hidden=true
            }
            //traduction de "couverture" dans l'index
            try{
                document.getElementById("0").innerText= "cover"
                document.getElementById("16").innerText= "cover"
                document.getElementById("32").innerText= "cover"
                document.getElementById("48").innerText= "cover"
                document.getElementById("64").innerText= "cover"
                document.getElementById("80").innerText= "cover"
            }catch{}
        }
        else{      
            compteur = "DÉBUT"
            bilingual = "dernier strip vu : "
            //masquage des éléments en anglais
            let rosbeef = window.document.querySelectorAll(".en")
                for(i=0;i<rosbeef.length;i++){
                    rosbeef[i].hidden=true
                }
        }
    }catch{}
}

//création du tableau d'index des strips
function creationListe(){
    liste.push("1")
    for(i=1;i<10;i++){
        liste.push(`0${i}`)
    }
    for (i=10; i<16; i++){
        liste.push(`${i}`)
    }
    liste.push("2")
    for (i=16; i<31; i++){
        liste.push(`${i}`)
    }
    liste.push("3")
    for (let i=31; i<46; i++){
        liste.push(`${i}`)
    }
    liste.push("4")
    for (let i=46; i<61; i++){
        liste.push(`${i}`)
    }
    liste.push("5")
    for (let i=61; i<76; i++){
        liste.push(`${i}`)
    }
    liste.push("6")
    for (let i=76; i<96; i++){
        liste.push(`${i}`)
    }
}

//message affichant le dernier strip consulté
function dernierStripVu(){
    if(sessionStorage.getItem('dernierStripVu') === "undefined" || sessionStorage.getItem('dernierStripVu') === null || Number(sessionStorage.getItem('dernierStripVu')) === 0){
        document.getElementById("dernierStrip").hidden = true
    }else{
        document.getElementById("dernierStrip").hidden = false    
        if( Number(sessionStorage.getItem('dernierStripVu')) !== 16 &&
            Number(sessionStorage.getItem('dernierStripVu')) !== 32 &&
            Number(sessionStorage.getItem('dernierStripVu')) !== 48 &&
            Number(sessionStorage.getItem('dernierStripVu')) !== 64 &&
            Number(sessionStorage.getItem('dernierStripVu')) !== 80 ){

                document.getElementById("dernierStrip").innerText = bilingual+liste[sessionStorage.getItem('dernierStripVu')]+" /95"
            }else{
                document.getElementById("dernierStrip").innerText = bilingual+ "tome "+liste[sessionStorage.getItem('dernierStripVu')]
            }
    }
}

//exceptions d'affichage des flèches de navigation (début/fin)
function affichagePrecedentSuivant (indice){
    if (indice===0){
        document.getElementById("precedent").hidden = true
        document.getElementById('aileen').hidden = true
        document.getElementById("footerSmartphone").style.justifyContent = "end"
        if(langue==="fr"){
            document.getElementById("maighread").innerHTML = `commencer la lecture <img src="images/deco/arrow_right_sm.png">`            
        }else{
            document.getElementById("maighread").innerHTML = `start reading <img src="images/deco/arrow_right_sm.png">`
        }
    }
    else{
        document.getElementById("precedent").hidden = false
        document.getElementById('aileen').hidden = false
        document.getElementById("footerSmartphone").style.justifyContent = "space-between"
        document.getElementById("maighread").innerHTML = `<img src="images/deco/arrow_right_sm.png">`        
        
    }
    if(indice ===100){
        document.getElementById("suivant").hidden = true
        document.getElementById("maighread").hidden = true
        document.getElementById("footerSmartphone").style.justifyContent = "start"

    }else{
        document.getElementById("suivant").hidden = false
        document.getElementById("maighread").hidden = false        
    }
}

//menu glissant smartphone
function openNav() {
  document.querySelector(".menuGlissant").style.left = "0";
}
function closeNav() {
  document.querySelector(".menuGlissant").style.left = "-300px";
} 

//reset indice
function resetIndice(){
    sessionStorage.setItem('indiceNul', 0)
}

//couleur Index déroulé
function index(){
    document.getElementById("index").classList.toggle("index")
}

//création du menu en fonction de la langue et de la page active
function menu(langue){
    let apropo
    let galerie
    let persos 
    let boutik 
    let page = document.querySelector("title").innerText
    if(langue==="fr"){
        apropo = " À PROPOS"
        persos = " PERSONNAGES"
        galerie = " GALERIE"
        boutik = " BOUTIQUE"
    }else{
        apropo = " ABOUT"
        persos = " CAST"
        galerie = " GALLERY"
        boutik = " SHOP"
    }

    document.getElementById("apropo").innerHTML = `<h2>${apropo}</h2>`
    document.getElementById("personnages").innerHTML = `<h2>${persos}</h2>`
    document.getElementById("boutique").innerHTML = `<h2>${boutik}</h2>`
    document.getElementById("galerie").innerHTML = `<h2>${galerie}</h2>`
    
    switch(page){
        case ("JO - à propos") :
            document.querySelector("#apropo h2").innerHTML = `<i class="fa-solid fa-star"></i>`+apropo
            document.getElementById("apropo").classList.add("pageactuelle")
        break
        case ("JO - personnages") :
            document.querySelector("#personnages h2").innerHTML = `<i class="fa-solid fa-star"></i>`+persos
            document.getElementById("personnages").classList.add("pageactuelle")
        break
        case ("JO - boutique") :
            document.querySelector("#boutique h2").innerHTML = `<i class="fa-solid fa-star"></i>`+boutik
            document.getElementById("boutique").classList.add("pageactuelle")
        break
        case ("JO - galerie") :
            document.querySelector("#galerie h2").innerHTML = `<i class="fa-solid fa-star"></i>`+galerie
            document.getElementById("galerie").classList.add("pageactuelle")
        break

        }
    }