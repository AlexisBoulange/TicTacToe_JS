//Fonction qui vérifie la victoire//
function checkVictory(){
    /* Victoire en ligne*/
    for(let i of [0, 3, 6]){
        if(grid[i] === joueurActuel && 
            grid[i] === grid[i+1] && 
            grid[i+1] === grid[i+2]){
                return victory = true 
        }
    }
    /* Victoire en colonne*/
    for(let i of [0, 1, 2]){
        if(grid[i] === joueurActuel &&
            grid[i] === grid[i+3] &&
            grid[i+3] === grid[i+6]){
                return victory = true
        }
    }
    /* Victoire en diagonale */
    if(grid[0] === joueurActuel &&
        grid[0] === grid[4] &&
        grid[4] === grid[8]){
            return victory = true
    }

    if(grid[2] === joueurActuel &&
        grid[2] === grid[4] &&
        grid[4] === grid[6]){
            return victory = true
    }
    if (counter === 9 && victory === false) {
        msg.innerHTML = "Match nul <br>"+"<a href= ''>Rejouer<a>"
    }
}
//Fonction Si victoire = true alors joueurx gagne sinon changement de joueur
function isVictory(){
    if(victory === true && joueurActuel === joueur1){
        winA.innerHTML += "Gagne !!"
        msg.innerHTML += "<a href= ''>Rejouer<a>"
    }else if(victory === true && joueurActuel === joueur2){
        winB.innerHTML += "Gagne !!"
        msg.innerHTML += "<a href= ''>Rejouer<a>"
    }
    else{
        joueurActuel = joueurActuel === joueur1 ? joueur2 : joueur1
    }
}

//Fonction qui permet de changer la couleur d'une balise avec une "class" et sa couleur de "font"
var changeColor = function (className, color, color2) {
    var elems = document.getElementsByClassName (className);
    elems [0] .style.color = color;
    elems [0] .style.backgroundColor = color2;
}


/* On déclare mes 2 joueurs*/
const joueur1 = "X"
const joueur2 = "O"
/* On déclare ensuite la variable du joueur qui va jouer*/
let joueurActuel = joueur1
changeColor("p1", "white", "red")
/* On déclare une variable victoire et un compteur qui nous permettra de check le statut de celle-ci*/
let victory = false
let counter = 0
/* On déclare une variable grid sous forme de tableau afn de donner les conditions de victoires*/
let grid =[]

/* On récupère à partir du fichier HTML les cases de ma grille*/
let boxes = document.getElementsByTagName("td")
let msg = document.getElementById("message")

/* On parcourt la grille en ajoutant un évènement "click" dans chaque box
i partant de 0 et tant que i est inférieur à 9*/ 
for (let i  = 0; i < boxes.length; i++){
    /* On créer une variable qui permet de récupérer une case de ma grille*/
    let box = boxes[i]
    /* On ajoute un évènement clique à ma nouvelle variable box*/
    box.addEventListener("click", ()  =>{
        /* On ajoute une fonction qui permet de vérifier si la case est vide, si c'est le cas : joueurActuel peut cliquer dedans*/
        if(box.innerHTML === "" && !victory){
            /* On incrémente le compteur chaque fois qu'une case se remplit*/
            counter++ 
            /* On remplit la case cliquée avec le symbole du joueur actuel*/
            box.innerHTML = joueurActuel
            grid [i] = box.innerHTML
            checkVictory();
            isVictory();
            // On change la couleur pour indiquer quel joueur va jouer
            if(joueurActuel === joueur1){
                changeColor("p1", "white", "red")
                changeColor("p2","black", "white")
            }else{
                changeColor("p1", "black", "white")
                changeColor("p2", "white", "red")
            }
            
        }
    })
}