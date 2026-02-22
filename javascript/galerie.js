let itemGalerie = ""
let grille = document.querySelector(".grille")

//remplissage de la galerie
function creationGalerie(galerie, nombre){
  for (let i=1;i<10;i++){
    itemGalerie = `
            <span>
              <img src="images/${galerie}/0${i}.jpg" >
              <div class="voir" id="${i}"><i class="fa-solid fa-eye"></i></div>
            </span>
            `
      document.getElementById(galerie).innerHTML += itemGalerie
  }
  
  for (let i=10;i<nombre;i++){
    itemGalerie = `
            <span>
              <img src="images/${galerie}/${i}.jpg" >
              <div class="voir" id="${i}"><i class="fa-solid fa-eye"></i></div>
            </span>
            `
      document.getElementById(galerie).innerHTML += itemGalerie
  }
}

creationGalerie("illus",45)
creationGalerie("joctober",32)
//ajouter ici nouvelles galeries

//afficher la visionneuse
function ouvrirVisionneuse() {
  document.getElementById("visionneuse").style.display = "block";
}

//fermer la visionneuse
function fermerVisionneuse() {
  document.getElementById("visionneuse").style.display = "none";
}

let listeIllusHD = document.querySelectorAll("#illus div")
let listeJoctober = document.querySelectorAll("#joctober div")
//ajouter ici nouvelles galeries
let kelDossier
let nbSlides
var slideIndex = 1

//clic sur une image
for(i=0;i<listeIllusHD.length;i++){
  
  listeIllusHD[i].addEventListener("click", (event)=>{
    kelDossier = "illus"
    nbSlides = 44
    ouvrirVisionneuse()
    afficherImage("illus", event.target.id)
  })
}
for(i=0;i<listeJoctober.length;i++){
  
  listeJoctober[i].addEventListener("click", (event)=>{
    kelDossier = "joctober"
    nbSlides = 31
    ouvrirVisionneuse()
    afficherImage("joctober", event.target.id)
  })
}
//ajouter ici nouvelles galeries

//afficher l'image voulue
function afficherImage (dossier, indice){
  if(indice<10){
    document.getElementById("imageHD").src = `images/${dossier}/0${indice}.jpg`
  }else{
    document.getElementById("imageHD").src = `images/${dossier}/${indice}.jpg`
  }
  slideIndex = Number(indice)
}

// avancer/reculer
function ensuite(n) {
  slideIndex +=n 
  if (slideIndex > nbSlides) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = nbSlides}
  afficherImage(kelDossier, slideIndex)
}

//touches du clavier
window.document.addEventListener("keydown", (event) => {

    switch (event.key) {
        case "ArrowLeft":
          ensuite(-1)
            break;
        case "ArrowRight":
          ensuite(1)
            break;
        case "Escape" :
          fermerVisionneuse()
          break;
    }
})