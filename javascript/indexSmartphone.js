//gestion de la langue d'affichage
version(langue)

// création de la liste

//ça marche pas je sais pas pourquoi
// for(i=1;i<10;i++){
//     document.getElementById("vol1").innerHTML += `<a onclick="(recuperation(${i}))" href="lecture.html">0${i}</a> - `
// }
// for(i=10;i<16;i++){
//     document.getElementById("vol1").innerHTML += `<a onclick="(recuperation(${i}))" href="lecture.html">${i}</a> - `
// }

for(i=16;i<30;i++){
    document.getElementById("vol2").innerHTML += `<a onclick="(recuperation(${i+1}))" href="lecture.html">${i}</a> - `
}
document.getElementById("vol2").innerHTML += `<a onclick="(recuperation(32))" href="lecture.html">31</a>`

for(i=31;i<45;i++){
    document.getElementById("vol3").innerHTML += `<a onclick="(recuperation(${i+2}))" href="lecture.html">${i}</a> - `
}

document.getElementById("vol3").innerHTML += `<a onclick="(recuperation(47))" href="lecture.html">45</a>`


for(i=46;i<60;i++){
    document.getElementById("vol4").innerHTML += `<a onclick="(recuperation(${i+3}))" href="lecture.html">${i}</a> - `
}
document.getElementById("vol4").innerHTML += `<a onclick="(recuperation(63))" href="lecture.html">60</a>`

for(i=61;i<75;i++){
    document.getElementById("vol5").innerHTML += `<a onclick="(recuperation(${i+4}))" href="lecture.html">${i}</a> - `
}
document.getElementById("vol5").innerHTML += `<a onclick="(recuperation(79))" href="lecture.html">75</a>`

for(i=76;i<95;i++){
    document.getElementById("vol6").innerHTML += `<a onclick="(recuperation(${i+5}))" href="lecture.html">${i}</a> - `
}
document.getElementById("vol6").innerHTML += `<a onclick="(recuperation(100))" href="lecture.html">95</a>`

//récupération de l'indice au clic sur un lien
function recuperation(indice){
    sessionStorage.setItem('dernierStripVu', indice)
    console.log(sessionStorage.getItem('dernierStripVu'))
}

