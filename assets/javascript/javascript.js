

function calcul(a, b, signe) {
    if (signe == "+") {
        a += b;
    }
    else if (signe == "*") {
        a *= b
    }
    else if (signe == "-") {
        a -= b
    }
    else {
        a /= b
    }
    return a
}


var r1 = calcul(1234, 435, "+")
console.log(r1);

var r2 = calcul(34512, 5463, "*")
console.log(r2);

var r3 = calcul(54234, 123, "/")
console.log(r3);

var r4 = calcul(2343, 3221, "*")
console.log(r4);

var r5 = calcul(12, 2, "+")
console.log(r5);


// document.addEventListener("click", (event) => {
//    let x = event.clientX;
//    let y = event.clientY;
//}

// 1
// Déclarez trois variables a, b et c comme "1", "2" et a+b.
// Afficher le type et la valeur de chaque variable.

let a = 1
let b = 2
let c = a + b

console.log(typeof (a), a, typeof (b), b, typeof (c), c)


// 2
// Écrivez un script qui affiche le message "Hello World !" sur la page.
/*
   je cible un element de mon DOM
   pour inserer un element dans un mon element ciblé j'utilise la
   methode => .append()
*/

let lien = document.getElementById("hello");
lien.append("Hello World")

// 3
// Écrivez un script qui va générer un nombre aléatoire.
// Vous devrez trouver ce nombre.
// Pour chaque essai,
// le script vous dira si le nombre à trouver est plus grand ou plus petit.
// Lorsque le nombre est trouvé, le script vous dira en combien de coups.

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let input = document.getElementById("bouton");
let button = document.getElementById("clique");
let chiffre = getRandomInt(100);
let result = document.getElementById("resultat");
let nombreCoup = 0;

/*
   initialiser une variable à 0
   incrementer la variable a chaque click 
*/

console.log(button)

button.addEventListener("click", () => {
    nombreCoup += 1
    let entree = input.value;
    if (entree == chiffre) {
        result.innerHTML = `C'est gagné en ${nombreCoup} essai(s)`;
        nombreCoup = 0;
        chiffre = getRandomInt(10)
    } else if (entree > chiffre) {
        result.innerHTML = "C'est moins"
    } else {
        result.innerHTML = "C'est plus"
    }

})

/*
   cibler un formulaire dna smon DOM
   récuperer la valeur du input (mon input .val() )
*/
/*
function test(functionF) {
    traitement
    retourne functionF(Avec des params ou non)
 }
 test(() => {
    // traitement
 })
 tt.addEventListener("click", (evenement) => {
 })
 
 */

/* 
4
Définir un objet 'member' (membre) avec les attributs:
 -'id' (identifiant),
 -'name' (nom),
 -'grade'
 - une fonction 'toString' qui retournera le nom et le grade en un seul chaine de caractère

Créer un objet 'team' qui contient des membres.
créer une instance de 'team' et y ajouter des membres.
*/
/*
let member = {
    "id": 1,
    "name": "Benjamin",
    "grade": "A",
    toString: function () {
        return `Name : ${member.name} , Grade : ${member.grade}`)
    }
}
member.toString()

let team = {
    member1: member,
    member2: {
        "id": 2,
        "name": "Celia",
        "grade": "A",
        toString2: function () {
            return `Name : ${member2.name} , Grade : ${member2.grade}`)
        }
    },
    member3: {
        "id": 3,
        "name": "Kach",
        "grade": "B",
        toString3: function () {
            return `Name : ${member3.name} , Grade : ${member3.grade}`)
        }
    },
}

team.member1.toString()
team.member2.toString2()
team.member3.toString3()

team.member4 = {
    "id": 4,
    "name": "Antoine",
    "grade": "C",
    toString4: function () {
        return `Name : ${member4.name} , Grade : ${member4.grade}`)
    }
}

team.member4.toString4()
*/

function Membre(id, name, grade) {
    this.id = id;
    this.name = name;
    this.grade = grade;
    this.toString = () => {
        return `Name : ${this.name}, Grade : ${this.grade}`
    }
}

let team = {
    a: new Membre(1, "Antoine", "Administrateur"),
    b: new Membre(2, "Ben", "Webmaster"),
}

console.log(team);

team.c = new Membre(3, "Josette", "Sous-chef");

console.log(team)




/*5
   À un document HTML, ajouter des alertes :
   - au chargement de la page,
       - quand on passe sur une image,
       - quand on clique sur un bouton,
       - quand on appuie sur une touche.
   - Avec des boutons :
       - changer la couleur de fond quand on clique sur un bouton,
       - changer aussi l'apparence du bouton,
       - ajouter un bouton qui permette de revenir à la normale.

*/

let alerte = document.getElementById("alertimg")

alerte.addEventListener("mouseover", () => {
    alert("Attention")
}
);


let text = "";
document.addEventListener("keypress", (keyboardEvent) => {
    text += keyboardEvent.key
    if (keyboardEvent.key == "k") {
        alert("Attention")
    }

});

/*
// 6
   Utiliser JavaScript pour afficher la valeur en euros de 2001 francs.
   Définir une fonction JavaScript qui pour une valeur donnée en francs fournit la valeur en euros.
   Utiliser cette fonction pour convertir toutes les sommes comprises entre 0 et mille francs avec
   un pas de 50 francs, et présenter le résultat dans un tableau.
   Réaliser le même travail pour la conversion inverse et fournir les résultats pour toutes
   les sommes comprises entre 1 et 200 euros
*/

let euro = document.getElementById("euros")
let francs = document.getElementById("francs")
let convertion = document.getElementById("convertion")
let convertir = document.getElementById("convertir")
let bool = false;

function convertirEnEuros(euros) {
    return (euros / 6.559)
};

function convertirEnFrancs(euros) {
    return (euros * 6.559)
};

convertir.addEventListener("click", () => {


    if (!bool) {
        if (euro.value == "") {
            euro.value = convertirEnEuros(francs.value)
        }
        else {
            francs.value = convertirEnFrancs(euro.value)
        }
        convertir.innerText = "RESET"
        bool = true;

    } else {
        convertir.innerText = "Convertir"
        francs.value = ""
        euro.value = ""
        bool = false;
    }


})

let tableauEnEuros = [];

for (let p = 0; p <= 1000; p += 50) {
    tableauEnEuros.push(
        convertirEnEuros(p)
    );
}

let tableauEnFrancs = [];

let j = 1
do {
    tableauEnFrancs.push(
        convertirEnFrancs(j)
    );
    ++j
} while ( j <= 200 )

console.log(tableauEnFrancs);

/*
let tableauEnEurosBoucleWhile =[]

let m = 0
do {
    tableauEnEurosBoucleWhile.push(
        convertirEnEuros(p)
    );
    m+=50
} while (m <= 1000)
*/
console.log(tableauEnEuros);

/*
// 7
   Définir en JavaScript un tableau contenant
   des notes d'étudiants comprises entre 0 et 20.
   Implémenter en JavaScript les fonctions qui permettent d'
    - afficher un tel tableau sous forme de chaine de caractère, 
    - de savoir combien d'étudiants ont eu 10 plus, 
    - de calculer la moyenne des notes,
    - de connaître la note maximale
*/

let notes = []

for(let i=0; i <= 20; ++i) {
    notes.push(
        getRandomInt(20)
        )
}
console.log(notes)

function readTableau() {
    notes.join()
}

function auDessusDe10() {
    let x = 0
    for (let i = 0; i <= notes.length; ++i) {
        if (notes[i] >= 10) {
            x += 1
        }

    }
    return x;
}

console.log(auDessusDe10());

function calculerMoyenne() {
    let sommeDesNotes = 0
    for (let i = 0; i < notes.length; ++i) {
        sommeDesNotes += notes[i]
    }
    let moyenne = (sommeDesNotes / notes.length)
    return moyenne
}

console.log(calculerMoyenne())


function noteMax() {
    return Math.max(...notes)
}

console.log(noteMax())
/*
console.log(Math.max(...notes))
Math.max(...notes)
*/


// readTableau() -> afficher un tel tableau, 
// auDessuDe10() -> > 10 
// calculerMoyenne() -> moyenne de classe
// maximal() -> affiche la note maximal

/*
// 8
Calculer le salaire d'une personne sur base de son salaire
brut en décomptant les frais suivants:
Impôts sur le revenu : 18%
Assurance employé : 7%
Régime de pensions du Canada : 5%
Les personnes peuvent recevoir comme supplément
 un bonus de 100$ ou une allocation de 150$.
 salaire brut < 1400 = 150 / 1400 - 2000 = 100 sinon rien
Il est possible de recevoir des réductions sur les impôts sur le revenu sous certaines conditions :
Si le travailleur est une femme, elle reçoit 2% de réduction.
Si le travailleur a 3 personnes à charge, il reçoit 1% de réduction.
Si le travailleur a 4 personnes à charge, il reçoit 2% de réduction.
*/


let input2 = document.getElementById("nombre")
let salaireNet = document.getElementById("nombre2")
let button3 = document.getElementById("salaire")
let allocation = document.getElementById("allocation")
let genre = document.getElementById("genre")
let enfants = document.getElementById("enfants")

function reductions() {
    if (genre == "femme") {

    }
}

function calculSalaireReel() {
    let impot = input2.value * 0.18
    impot = reductions(impot)
    let salaireReel = input2.value - ((impot) + (input2.value * 0.07) + (input2.value * 0.05))
    return salaireReel;
}

button3.addEventListener("click", () => {
    let entree = input2.value
    if (entree < 1400) {
        allocation.innerHTML = "150$"
    }
    else if (entree > 2000) {
        allocation.innerHTML = "0$"
    }
    else {
        allocation.innerHTML = "100$"
    }
    salaireNet.value = calculSalaireReel()
})

function reductions(impot) {
    if (genre.value == "femme") {
        if (enfants.value == "3") {
            impot = (impot / 1.01)
        }
        else if (enfants.value == "4ouplus") {
            impot = (impot / 1.02)
        }
        impot = (impot / 1.02)
    }
    else {
        if (enfants.value == "3") {
            impot = (impot / 1.01)
        }
        else if (enfants.value == "4ouplus") {
            impot = (impot / 1.02)
        }
    }
    return impot;
}


/*
// 9
On veut implémenter un jeu de « memory ». Au début du jeu les cartes sont faces cachées, l'interface doit permettre d'en retourner deux. Si les deux cartes sont identiques elles restent visibles, sinon elles disparaissent après un court laps de temps. Le jeu se termine quand toutes les paires ont été découvertes.
Récupérer huit images de même taille et coder en HTML/CSS la disposition des seize cartes.
Programmer en JavaScript le mélange des cartes, par exemple en répétant une centaine de fois le processus suivant : tirer deux cartes au hasard et les échanger.
Ce mélange doit avoir lieu au chargement de la page.
Utiliser la CSS pour rendre les cartes invisibles.
Programmer en JavaScript le retournement d'une carte quand on clique sur elle.
(optionnel) Produire un joli effet visuel quand la carte apparaît.
Permettre de cliquer sur deux cartes cachées. Tester si les deux images dévoilées sont les mêmes. Si les images sont différentes, les faire disparaître après une seconde d'affichage.
*/




