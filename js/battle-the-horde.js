let libraryArray = ["/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg",]
let graveyardArray = [];
let battlefieldArray = [];

let testArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

let libraryDiv = document.getElementById("deck");


function Draw() {

    let RanNum = Math.floor(Math.random() * libraryArray.length);

    let drawCard = document.createElement("img");

    drawCard.src = libraryArray[RanNum];

    libraryDiv.appendChild(drawCard);

    
    console.log(RanNum)

}


function Discard() {

}