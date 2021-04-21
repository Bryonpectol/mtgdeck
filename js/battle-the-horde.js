let libraryArray = ["/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/reckless_minotaur.jpg","/media/battle_the_horde/minotaur_goreseeker.jpg","/media/battle_the_horde/phoberos_reaver.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg",]
let graveyardArray = [];
let battlefieldArray = [];

let testArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

let libraryDiv = document.getElementById("deck");

let battlefieldDiv = document.getElementById("battlefield");

let RanNum;

let drawCard;


function Draw() {

    RanNum = Math.floor(Math.random() * libraryArray.length);

    if(RanNum == 0) {

        battlefieldArray.push("/media/battle_the_horde/minotaur_younghorn.jpg");

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 1) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }

    if(RanNum == 2) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }

    if(RanNum == 3) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }

    if(RanNum == 4) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }

    if(RanNum == 5) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }

    if(RanNum == 6) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }

    if(RanNum == 7) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }

    if(RanNum == 8) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }

    if(RanNum == 9) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }

    if(RanNum == 10) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }

    if(RanNum == 11) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }

    if(RanNum == 12) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }

    if(RanNum == 13) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }

    if(RanNum == 14) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 15) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 16) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 17) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 18) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 19) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 20) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 21) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 22) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 23) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 24) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 25) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 26) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }

    
    if(RanNum == 27) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 28) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 29) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 30) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 31) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 32) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 33) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 34) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 35) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 36) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 37) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 38) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 39) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }

    
    if(RanNum == 40) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 41) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 42) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 43) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 44) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 45) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 46) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 47) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 48) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 49) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 50) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 51) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 52) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 53) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 54) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 55) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 56) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 57) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 58) {

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    if(RanNum == 59) {

        battlefieldArray.push("/media/battle_the_horde/minotaur_younghorn.jpg");

        libraryArray.slice(RanNum, 1);
        drawCard = document.createElement("img");

        drawCard.className = "cards";

        drawCard.src = libraryArray[RanNum];

        battlefieldDiv.appendChild(drawCard);

    }
    
    console.log(libraryArray + libraryArray.length + " : " + battlefieldArray)
    console.log(RanNum);

}


function Discard() {



}