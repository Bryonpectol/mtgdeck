
let deckArray = ["/media/battle_the_horde/minotaur_goreseeker.jpg","/media/battle_the_horde/minotaur_goreseeker.jpg","/media/battle_the_horde/minotaur_goreseeker.jpg","/media/battle_the_horde/minotaur_goreseeker.jpg","/media/battle_the_horde/minotaur_goreseeker.jpg","/media/battle_the_horde/minotaur_goreseeker.jpg","/media/battle_the_horde/minotaur_goreseeker.jpg","/media/battle_the_horde/minotaur_goreseeker.jpg","/media/battle_the_horde/minotaur_goreseeker.jpg","/media/battle_the_horde/minotaur_goreseeker.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/minotaur_younghorn.jpg","/media/battle_the_horde/phoberos_reaver.jpg","/media/battle_the_horde/phoberos_reaver.jpg","/media/battle_the_horde/phoberos_reaver.jpg","/media/battle_the_horde/phoberos_reaver.jpg","/media/battle_the_horde/phoberos_reaver.jpg","/media/battle_the_horde/phoberos_reaver.jpg","/media/battle_the_horde/phoberos_reaver.jpg","/media/battle_the_horde/phoberos_reaver.jpg","/media/battle_the_horde/phoberos_reaver.jpg","/media/battle_the_horde/phoberos_reaver.jpg","/media/battle_the_horde/reckless_minotaur.jpg","/media/battle_the_horde/reckless_minotaur.jpg","/media/battle_the_horde/reckless_minotaur.jpg","/media/battle_the_horde/reckless_minotaur.jpg","/media/Battle_the_horde/mogiss_chosen.jpg","/media/Battle_the_horde/mogiss_chosen.jpg","/media/Battle_the_horde/mogiss_chosen.jpg","/media/Battle_the_horde/mogiss_chosen.jpg",];

let battlefieldDiv = document.getElementById("battlefield");

let RanNum;

let number = deckArray.length;

let drawCard;

function Draw() {

    RanNum = Math.floor(Math.random() * number);

    if(RanNum == 0) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[0];

        deckArray.splice(0, 1);

    }
    
    if(RanNum == 1) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[1];

        deckArray.splice(1, 1);

    }

    if(RanNum == 2) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[2];

        deckArray.splice(2, 1);

    }

    if(RanNum == 3) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[3];

        deckArray.splice(3, 1);

    }

    if(RanNum == 4) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[4];

        deckArray.splice(4, 1);

    }

    if(RanNum == 5) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[5];

        deckArray.splice(5, 1);


    }

    if(RanNum == 6) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[6];

        deckArray.splice(6, 1);


    }

    if(RanNum == 7) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[7];

        deckArray.splice(7, 1);


    }

    if(RanNum == 8) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[8];

        deckArray.splice(8, 1);


    }

    if(RanNum == 9) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[9];

        deckArray.splice(9, 1);


    }

    if(RanNum == 10) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[10];

        deckArray.splice(10, 1);


    }

    if(RanNum == 11) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[11];

        deckArray.splice(11, 1);


    }

    if(RanNum == 12) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[12];

        deckArray.splice(12, 1);


    }

    if(RanNum == 13) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[13];

        deckArray.splice(13, 1);


    }

    if(RanNum == 14) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[14];

        deckArray.splice(14, 1);

    }
    
    if(RanNum == 15) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[15];

        deckArray.splice(15, 1);

    }
    
    if(RanNum == 16) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[16];

        deckArray.splice(16, 1);

    }
    
    if(RanNum == 17) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[17];

        deckArray.splice(17, 1);

    }
    
    if(RanNum == 18) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[18];

        deckArray.splice(18, 1);

    }
    
    if(RanNum == 19) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[19];

        deckArray.splice(19, 1);

    }
    
    if(RanNum == 20) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[20];

        deckArray.splice(20, 1);

    }
    
    if(RanNum == 21) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[21];

        deckArray.splice(21, 1);

    }
    
    if(RanNum == 22) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[22];

        deckArray.splice(22, 1);

    }
    
    if(RanNum == 23) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[23];

        deckArray.splice(23, 1);

    }
    
    if(RanNum == 24) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[24];

        deckArray.splice(24, 1);

    }
    
    if(RanNum == 25) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[25];

        deckArray.splice(25, 1);

    }
    
    if(RanNum == 26) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[26];

        deckArray.splice(26, 1);

    }

    
    if(RanNum == 27) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[27];

        deckArray.splice(27, 1);

    }
    
    if(RanNum == 28) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[28];

        deckArray.splice(28, 1);

    }
    
    if(RanNum == 29) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[29];

        deckArray.splice(29, 1);

    }
    
    if(RanNum == 30) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[30];

        deckArray.splice(30, 1);

    }
    
    if(RanNum == 31) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[31];

        deckArray.splice(31, 1);

    }
    
    if(RanNum == 32) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[32];

        deckArray.splice(32, 1);

    }
    
    if(RanNum == 33) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[33];

        deckArray.splice(33, 1);

    }
    
    if(RanNum == 34) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[34];

        deckArray.splice(34, 1);

    }
    
    if(RanNum == 35) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[35];

        deckArray.splice(35, 1);

    }
    
    if(RanNum == 36) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[36];

        deckArray.splice(36, 1);

    }
    
    if(RanNum == 37) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[37];

        deckArray.splice(37, 1);

    }
    
    if(RanNum == 38) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[38];

        deckArray.splice(38, 1);

    }
    
    if(RanNum == 39) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[39];

        deckArray.splice(39, 1);

    }

    
    if(RanNum == 40) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[40];

        deckArray.splice(40, 1);

    }
    
    if(RanNum == 41) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[41];

        deckArray.splice(41, 1);

    }
    
    if(RanNum == 42) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[42];

        deckArray.splice(42, 1);

    }
    
    if(RanNum == 43) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[43];

        deckArray.splice(43, 1);

    }
    
    if(RanNum == 44) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[44];

        deckArray.splice(44, 1);

    }
    
    if(RanNum == 45) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[45];

        deckArray.splice(45, 1);

    }
    
    if(RanNum == 46) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[46];

        deckArray.splice(46, 1);

    }
    
    if(RanNum == 47) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[47];

        deckArray.splice(47, 1);

    }
    
    if(RanNum == 48) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[48];

        deckArray.splice(48, 1);

    }
    
    if(RanNum == 49) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[49];

        deckArray.splice(49, 1);

    }
    
    if(RanNum == 50) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[50];

        deckArray.splice(50, 1);

    }
    
    if(RanNum == 51) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[51];

        deckArray.splice(4, 1);

    }
    
    if(RanNum == 52) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[52];

        deckArray.splice(52, 1);

    }
    
    if(RanNum == 53) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[53];

        deckArray.splice(53, 1);

    }
    
    if(RanNum == 54) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[54];

        deckArray.splice(54, 1);

    }
    
    if(RanNum == 55) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[55];

        deckArray.splice(55, 1);

    }
    
    if(RanNum == 56) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[56];

        deckArray.splice(56, 1);

    }
    
    if(RanNum == 57) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[57];

        deckArray.splice(57, 1);

    }
    
    if(RanNum == 58) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[58];

        deckArray.splice(58, 1);

    }
    
    if(RanNum == 59) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.src = deckArray[59];

        deckArray.splice(59, 1);

    }


    // if number = -1

    if(number < 0) {
        let Win = document.createElement("p");

        Win.textContext = "You Win!"

        battlefieldDiv.appendChild(Win);
    }

    battlefieldDiv.appendChild(drawCard);

    number -= 1;
    
    console.log(RanNum + " : " + number + " : " + deckArray.length);

}


function Discard() {



}