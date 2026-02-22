console.log("haricots")

//récupération de variable langue
langue = sessionStorage.getItem('langue')
console.log("langue : "+langue)


//gestion de la langue d'affichage
menu(langue)
version(langue)

//génération du tableau d'indices des strips
creationListe()

//affichage du dernier strip consulté
dernierStripVu()
