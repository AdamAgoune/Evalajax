function myFunction(x) {
    if (x.matches) {
      document.body.style.backgroundColor = "grey";
    } else {
     document.body.style.backgroundColor = "chocolate";
    }
  }
  let x = window.matchMedia("(max-width: 400px)")
  myFunction(x)
  x.addListener(myFunction) ;


document.querySelector("button").addEventListener("click", () => {

    // Contiendra la valeur du personnage entré dans l'input
    let numero = document.querySelector("input").value;

    // Permet d'aller récupérer des informations provenant d'une ressource externe :
    fetch(`https://swapi.co/api/people/${numero}`)

    // Quand la requête fetch() est terminée, on stocke son contenu dans la variable response
    .then((response) => {
        response.json()
        .then((data) => {
           
        // A chaque clic du bouton, on vide notre balise <main>
        document.querySelector("main").innerHTML = '';
        
        // Création de la <table> en HTML
        let tableElement = document.createElement("table");
        document.querySelector("main").appendChild(tableElement);

        // Création de notre <thead> en HTML
        let theadElement = document.createElement("thead");
        tableElement.appendChild(theadElement);
        
        // Création de notre premier <tr> en HTML
        let trElement1 = document.createElement("tr");
        theadElement.appendChild(trElement1);

        // Création de nos <th> en HTML
        let thElement1 = document.createElement("th");
        let thElement2 = document.createElement("th");
        let thElement3 = document.createElement("th");
        let thElement4 = document.createElement("th");
        let thElement5 = document.createElement("th");
        let thElement6 = document.createElement("th");
        let thElement7 = document.createElement("th");
        let thElement8 = document.createElement("th");

        // Insertion de données dans nos <th>
        thElement1.innerHTML = "Nom";
        thElement2.innerHTML = "Taille";
        thElement4.innerHTML = "Poids";
        thElement5.innerHTML = "Genre";
        thElement6.innerHTML = "Couleur Yeux";
        thElement7.innerHTML = "Couleur Cheveux";
        thElement8.innerHTML = "Couleur Peau";

        trElement1.appendChild(thElement1);
        trElement1.appendChild(thElement2);
        trElement1.appendChild(thElement4);
        trElement1.appendChild(thElement5);
        trElement1.appendChild(thElement6);
        trElement1.appendChild(thElement7);
        trElement1.appendChild(thElement8);

        // Création de notre <tbody> et ajout à notre <table>
        let tbodyElement = document.createElement("tbody");
        tableElement.appendChild(tbodyElement);

        // Création de notre second <tr> et ajout à notre <tbody>
        let trElement2 = document.createElement("tr");
        tbodyElement.appendChild(trElement2);

        // Création de nos <td> en HTML
        let tdElement1 = document.createElement("td");
        let tdElement2 = document.createElement("td");
        let tdElement4 = document.createElement("td");
        let tdElement5 = document.createElement("td");
        let tdElement6 = document.createElement("td");
        let tdElement7 = document.createElement("td");
        let tdElement8 = document.createElement("td");
        

       // Insertion de données dans nos <td>
        tdElement1.innerHTML = data.name
        tdElement2.innerHTML = data.height
        tdElement4.innerHTML = data.mass
        tdElement5.innerHTML = data.gender
        tdElement6.innerHTML = data.eye_color
        tdElement7.innerHTML = data.hair_color
        tdElement8.innerHTML = data.skin_color
        
        trElement2.appendChild(tdElement1);
        trElement2.appendChild(tdElement2);
        trElement2.appendChild(tdElement4);
        trElement2.appendChild(tdElement5);
        trElement2.appendChild(tdElement6);
        trElement2.appendChild(tdElement7);
        trElement2.appendChild(tdElement8);
        })
    })
});