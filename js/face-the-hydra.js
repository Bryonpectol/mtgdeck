let deckArray = ["/media/face_the_hydra/hydra_head.jpg","/media/face_the_hydra/hydra_head.jpg","/media/face_the_hydra/hydra_head.jpg","/media/face_the_hydra/hydra_head.jpg","/media/face_the_hydra/hydra_head.jpg","/media/face_the_hydra/hydra_head.jpg","/media/face_the_hydra/hydra_head.jpg","/media/face_the_hydra/hydra_head.jpg","/media/face_the_hydra/hydra_head.jpg","/media/face_the_hydra/hydra_head.jpg","/media/face_the_hydra/hydra_head.jpg","/media/face_the_hydra/ravenous_brute_head.jpg","/media/face_the_hydra/ravenous_brute_head.jpg","/media/face_the_hydra/ravenous_brute_head.jpg","/media/face_the_hydra/ravenous_brute_head.jpg","/media/face_the_hydra/savage_vigor_head.jpg","/media/face_the_hydra/snapping_fang_head.jpg","/media/face_the_hydra/shrieking_titan_head.jpg","/media/face_the_hydra/disorienting_glower.jpg","/media/face_the_hydra/disorienting_glower.jpg","/media/face_the_hydra/disorienting_glower.jpg","/media/face_the_hydra/disorienting_glower.jpg","/media/face_the_hydra/disorienting_glower.jpg","/media/face_the_hydra/distract_the_hydra.jpg","/media/face_the_hydra/distract_the_hydra.jpg","/media/face_the_hydra/distract_the_hydra.jpg","/media/face_the_hydra/distract_the_hydra.jpg","/media/face_the_hydra/distract_the_hydra.jpg","/media/face_the_hydra/grown_from_the_stump.jpg","/media/face_the_hydra/grown_from_the_stump.jpg","/media/face_the_hydra/grown_from_the_stump.jpg","/media/face_the_hydra/grown_from_the_stump.jpg","/media/face_the_hydra/hydras_impenetrable_hide.jpg","/media/face_the_hydra/hydras_impenetrable_hide.jpg","/media/face_the_hydra/hydras_impenetrable_hide.jpg","/media/face_the_hydra/hydras_impenetrable_hide.jpg","/media/face_the_hydra/neck_tangle.jpg","/media/face_the_hydra/neck_tangle.jpg","/media/face_the_hydra/neck_tangle.jpg","/media/face_the_hydra/noxious_hydra_breath.jpg","/media/face_the_hydra/noxious_hydra_breath.jpg","/media/face_the_hydra/noxious_hydra_breath.jpg","/media/face_the_hydra/noxious_hydra_breath.jpg","/media/face_the_hydra/strike_the_weak_spot.jpg","/media/face_the_hydra/strike_the_weak_spot.jpg","/media/face_the_hydra/swallow_the_hero_whole.jpg","/media/face_the_hydra/swallow_the_hero_whole.jpg","/media/face_the_hydra/swallow_the_hero_whole.jpg","/media/face_the_hydra/swallow_the_hero_whole.jpg","/media/face_the_hydra/swallow_the_hero_whole.jpg","/media/face_the_hydra/torn_between_heads.jpg","/media/face_the_hydra/torn_between_heads.jpg","/media/face_the_hydra/torn_between_heads.jpg","/media/face_the_hydra/torn_between_heads.jpg","/media/face_the_hydra/unified_lunge.jpg","/media/face_the_hydra/unified_lunge.jpg","/media/face_the_hydra/unified_lunge.jpg","/media/face_the_hydra/unified_lunge.jpg","/media/face_the_hydra/unified_lunge.jpg","/media/face_the_hydra/unified_lunge.jpg",];

let battlefieldDiv = document.getElementById("battlefield");

let graveyardDiv = document.getElementById("graveyard");

graveyardDiv.style.visibility = "hidden";

let graveyardBtn = document.getElementById("graveyardBtn");

let hideGraveyardBtn = document.getElementById("hidegraveyardBtn");

hideGraveyardBtn.style.visibility = "hidden";

let graveyardArray = [];

let RanNum;

let number = deckArray.length;

let drawCard;

let removeBtn;

let Img;

removeBtn.className = "removeBtn";

function Draw() {

    RanNum = Math.floor(Math.random() * number);

    if (RanNum == 0) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "zero";

        drawCard.src = deckArray[0];

        deckArray.splice(0, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "zeroBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "zero()");

        battlefieldDiv.appendChild(removeBtn);


    }

    if (RanNum == 1) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "one";

        drawCard.src = deckArray[1];

        deckArray.splice(1, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "oneBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "one()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 2) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "two";

        drawCard.src = deckArray[2];

        deckArray.splice(2, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "twoBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "two()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 3) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "three";

        drawCard.src = deckArray[3];

        deckArray.splice(3, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "threeBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "three()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 4) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "four";

        drawCard.src = deckArray[4];

        deckArray.splice(4, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "fourBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "four()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 5) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "five";

        drawCard.src = deckArray[5];

        deckArray.splice(5, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "fiveBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "five()");

        battlefieldDiv.appendChild(removeBtn);


    }

    if (RanNum == 6) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "six";

        drawCard.src = deckArray[6];

        deckArray.splice(6, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "sixBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "six()");

        battlefieldDiv.appendChild(removeBtn);


    }

    if (RanNum == 7) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "seven";

        drawCard.src = deckArray[7];

        deckArray.splice(7, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "sevenBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "seven()");

        battlefieldDiv.appendChild(removeBtn);


    }

    if (RanNum == 8) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "eight";

        drawCard.src = deckArray[8];

        deckArray.splice(8, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "eightBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "eight()");

        battlefieldDiv.appendChild(removeBtn);


    }

    if (RanNum == 9) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "nine";

        drawCard.src = deckArray[9];

        deckArray.splice(9, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "nineBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "nine()");

        battlefieldDiv.appendChild(removeBtn);


    }

    if (RanNum == 10) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "ten";

        drawCard.src = deckArray[10];

        deckArray.splice(10, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "tenBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "ten()");

        battlefieldDiv.appendChild(removeBtn);


    }

    if (RanNum == 11) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "eleven";

        drawCard.src = deckArray[11];

        deckArray.splice(11, 1);
        
        removeBtn = document.createElement("button");

        removeBtn.id = "elevenBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "eleven()");

        battlefieldDiv.appendChild(removeBtn);


    }

    if (RanNum == 12) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "twelve";

        drawCard.src = deckArray[12];

        deckArray.splice(12, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "twelveBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "twelve()");

        battlefieldDiv.appendChild(removeBtn);


    }

    if (RanNum == 13) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "thirteen";

        drawCard.src = deckArray[13];

        deckArray.splice(13, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "thirteenBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "thirteen()");

        battlefieldDiv.appendChild(removeBtn);


    }

    if (RanNum == 14) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "fourteen";

        drawCard.src = deckArray[14];

        deckArray.splice(14, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "fourteenBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "fourteen()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 15) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "fifteen";

        drawCard.src = deckArray[15];

        deckArray.splice(15, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "fifteenBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "fifteen()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 16) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "sixteen";

        drawCard.src = deckArray[16];

        deckArray.splice(16, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "sixteenBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "sixteen()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 17) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "seventeen";

        drawCard.src = deckArray[17];

        deckArray.splice(17, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "seventeenBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "seventeen()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 18) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "eighteen";

        drawCard.src = deckArray[18];

        deckArray.splice(18, 1);
        
        removeBtn = document.createElement("button");

        removeBtn.id = "eighteenBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "eighteen()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 19) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "nineteen";

        drawCard.src = deckArray[19];

        deckArray.splice(19, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "nineteenBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "nineteen()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 20) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "twenty";

        drawCard.src = deckArray[20];

        deckArray.splice(20, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "twentyBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "twenty()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 21) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "twentyone";

        drawCard.src = deckArray[21];

        deckArray.splice(21, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "twentyoneBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "twentyone()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 22) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "twentytwo";

        drawCard.src = deckArray[22];

        deckArray.splice(22, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "twentytwoBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "twentytwo()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 23) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "twentythree";

        drawCard.src = deckArray[23];

        deckArray.splice(23, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "twentythreeBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "twentythree()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 24) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "twentyfour";

        drawCard.src = deckArray[24];

        deckArray.splice(24, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "twentyfourBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "twentyfour()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 25) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "twentyfive";

        drawCard.src = deckArray[25];

        deckArray.splice(25, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "twentyfiveBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "twentyfive()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 26) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "twentysix";

        drawCard.src = deckArray[26];

        deckArray.splice(26, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "twentysixBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "twentysix()");

        battlefieldDiv.appendChild(removeBtn);

    }


    if (RanNum == 27) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "twentyseven";

        drawCard.src = deckArray[27];

        deckArray.splice(27, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "twentysevenBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "twentyseven()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 28) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "twentyeight";

        drawCard.src = deckArray[28];

        deckArray.splice(28, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "twentyeightBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "twentyeight()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 29) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "twentynine";

        drawCard.src = deckArray[29];

        deckArray.splice(29, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "twentynineBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "twentynine()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 30) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "thirty";

        drawCard.src = deckArray[30];

        deckArray.splice(30, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "thirtyBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "thirty()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 31) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "thirtyone";

        drawCard.src = deckArray[31];

        deckArray.splice(31, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "thirtyoneBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "thirtyone()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 32) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "thirtytwo";

        drawCard.src = deckArray[32];

        deckArray.splice(32, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "thirtytwoBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "thirtytwo()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 33) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "thirtythree";

        drawCard.src = deckArray[33];

        deckArray.splice(33, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "thirtythreeBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "thirtythree()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 34) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "thirtyfour";

        drawCard.src = deckArray[34];

        deckArray.splice(34, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "thirtyfourBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "thirtyfour()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 35) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "thirtyfive";

        drawCard.src = deckArray[35];

        deckArray.splice(35, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "thirtyfiveBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "thirtyfive()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 36) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "thirtysix";

        drawCard.src = deckArray[36];

        deckArray.splice(36, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "thirtysixBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "thirtysix()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 37) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "thirtyseven";

        drawCard.src = deckArray[37];

        deckArray.splice(37, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "thirtysevenBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "thirtyseven()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 38) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "thirtyeight";

        drawCard.src = deckArray[38];

        deckArray.splice(38, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "thirtyeightBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "thirtyeight()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 39) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "thirtynine";

        drawCard.src = deckArray[39];

        deckArray.splice(39, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "thirtynineBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "thirtynine()");

        battlefieldDiv.appendChild(removeBtn);

    }


    if (RanNum == 40) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "forty";

        drawCard.src = deckArray[40];

        deckArray.splice(40, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "fortyBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "forty()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 41) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "fortyone";

        drawCard.src = deckArray[41];

        deckArray.splice(41, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "fortyoneBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "fortyone()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 42) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "fortytwo";

        drawCard.src = deckArray[42];

        deckArray.splice(42, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "fortytwoBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "fortytwo()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 43) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "fortythree";

        drawCard.src = deckArray[43];

        deckArray.splice(43, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "fortythreeBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "fortythree()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 44) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "fortyfour";

        drawCard.src = deckArray[44];

        deckArray.splice(44, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "fortyfourBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "fortyfour()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 45) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "fortyfive";

        drawCard.src = deckArray[45];

        deckArray.splice(45, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "fortyfiveBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "fortyfive()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 46) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "fortysix";

        drawCard.src = deckArray[46];

        deckArray.splice(46, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "fortysixBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "fortysix()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 47) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "fortyseven";

        drawCard.src = deckArray[47];

        deckArray.splice(47, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "fortysevenBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "fortyseven()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 48) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "fortyeight";

        drawCard.src = deckArray[48];

        deckArray.splice(48, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "fortyeightBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "fortyeight()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 49) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "fortynine";

        drawCard.src = deckArray[49];

        deckArray.splice(49, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "fortynineBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "fortynine()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 50) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "fifty";

        drawCard.src = deckArray[50];

        deckArray.splice(50, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "fiftyBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "fifty()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 51) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "fiftyone";

        drawCard.src = deckArray[51];

        deckArray.splice(4, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "fiftyoneBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "fiftyone()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 52) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "fiftytwo";

        drawCard.src = deckArray[52];

        deckArray.splice(52, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "fiftytwoBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "fiftytwo()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 53) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "fiftythree";

        drawCard.src = deckArray[53];

        deckArray.splice(53, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "fiftythreeBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "fiftythree()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 54) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "fiftyfour";

        drawCard.src = deckArray[54];

        deckArray.splice(54, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "fiftyfourBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "fiftyfour()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 55) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "fiftyfive";

        drawCard.src = deckArray[55];

        deckArray.splice(55, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "fiftyfiveBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "fiftyfive()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 56) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "fiftysix";

        drawCard.src = deckArray[56];

        deckArray.splice(56, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "fiftysixBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "fiftysix()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 57) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "fiftyseven";

        drawCard.src = deckArray[57];

        deckArray.splice(57, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "fiftysevenBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "fiftyseven()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 58) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "fiftyeight";

        drawCard.src = deckArray[58];

        deckArray.splice(58, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "fiftyeightBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "fiftyeight()");

        battlefieldDiv.appendChild(removeBtn);

    }

    if (RanNum == 59) {

        drawCard = document.createElement("img");
        drawCard.className = "cards";

        drawCard.id = "fiftynine";

        drawCard.src = deckArray[59];

        deckArray.splice(59, 1);

        removeBtn = document.createElement("button");

        removeBtn.id = "fiftynineBtn";

        removeBtn.textContent = "Remove";

        removeBtn.setAttribute("onclick", "fiftynine()");

        battlefieldDiv.appendChild(removeBtn);

    }


    // if number = -1

    if (number < 0) {
        let deckIMG = document.getElementById("deckimg");

        deckIMG.setAttribute("src", "");
        deckIMG.setAttribute("alt", "There are no more cards");
    }

    battlefieldDiv.appendChild(drawCard);

    number -= 1;

    graveyard();
    hideGraveyard();

    console.log(deckArray + " Random Number: " + RanNum + " Deck Length: " + deckArray.length + ".... Graveyard: " + graveyardArray + " : " + graveyardArray.length);

}


function zero() {

    Img = document.getElementById("zero");
    let zeroBtn = document.getElementById("zeroBtn");

    graveyardArray.unshift(deckArray[0]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function one() {

    Img = document.getElementById("one");
    let zeroBtn = document.getElementById("oneBtn");

    graveyardArray.unshift(deckArray[1]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function two() {

    Img = document.getElementById("two");
    let zeroBtn = document.getElementById("twoBtn");

    graveyardArray.unshift(deckArray[2]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function three() {

    Img = document.getElementById("three");
    let zeroBtn = document.getElementById("threeBtn");

    graveyardArray.unshift(deckArray[3]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function four() {

    Img = document.getElementById("four");
    let zeroBtn = document.getElementById("fourBtn");

    graveyardArray.unshift(deckArray[4]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function five() {

    Img = document.getElementById("five");
    let zeroBtn = document.getElementById("fiveBtn");

    graveyardArray.unshift(deckArray[5]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function six() {

    Img = document.getElementById("six");
    let zeroBtn = document.getElementById("sixBtn");

    graveyardArray.unshift(deckArray[6]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function seven() {

    Img = document.getElementById("seven");
    let zeroBtn = document.getElementById("sevenBtn");

    graveyardArray.unshift(deckArray[7]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function eight() {

    Img = document.getElementById("eight");
    let zeroBtn = document.getElementById("eightBtn");

    graveyardArray.unshift(deckArray[8]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function nine() {

    Img = document.getElementById("nine");
    let zeroBtn = document.getElementById("nineBtn");

    graveyardArray.unshift(deckArray[9]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function ten() {

    Img = document.getElementById("ten");
    let zeroBtn = document.getElementById("tenBtn");

    graveyardArray.unshift(deckArray[10]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function eleven() {

    Img = document.getElementById("eleven");
    let zeroBtn = document.getElementById("elevenBtn");

    graveyardArray.unshift(deckArray[11]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function twelve() {

    Img = document.getElementById("twelve");
    let zeroBtn = document.getElementById("twelveBtn");

    graveyardArray.unshift(deckArray[12]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function thirteen() {

    Img = document.getElementById("thirteen");
    let zeroBtn = document.getElementById("thirteenBtn");

    graveyardArray.unshift(deckArray[13]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function fourteen() {

    Img = document.getElementById("fourteen");
    let zeroBtn = document.getElementById("fourteenBtn");

    graveyardArray.unshift(deckArray[14]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function fifteen() {

    Img = document.getElementById("fifteen");
    let zeroBtn = document.getElementById("fifteenBtn");

    graveyardArray.unshift(deckArray[15]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function sixteen() {

    Img = document.getElementById("sixteen");
    let zeroBtn = document.getElementById("sixteenBtn");

    graveyardArray.unshift(deckArray[16]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function seventeen() {

    Img = document.getElementById("seventeen");
    let zeroBtn = document.getElementById("seventeenBtn");

    graveyardArray.unshift(deckArray[17]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function eighteen() {

    Img = document.getElementById("eighteen");
    let zeroBtn = document.getElementById("eighteenBtn");

    graveyardArray.unshift(deckArray[18]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function nineteen() {

    Img = document.getElementById("nineteen");
    let zeroBtn = document.getElementById("nineteenBtn");

    graveyardArray.unshift(deckArray[19]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function twenty() {

    Img = document.getElementById("twenty");
    let zeroBtn = document.getElementById("twentyBtn");

    graveyardArray.unshift(deckArray[20]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function twentyone() {

    Img = document.getElementById("twentyone");
    let zeroBtn = document.getElementById("twentyoneBtn");

    graveyardArray.unshift(deckArray[21]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function twentytwo() {

    Img = document.getElementById("twentytwo");
    let zeroBtn = document.getElementById("twentytwoBtn");

    graveyardArray.unshift(deckArray[22]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function twentythree() {

    Img = document.getElementById("twentythree");
    let zeroBtn = document.getElementById("twentythreeBtn");

    graveyardArray.unshift(deckArray[23]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function twentyfour() {

    Img = document.getElementById("twentyfour");
    let zeroBtn = document.getElementById("twentyfourBtn");

    graveyardArray.unshift(deckArray[24]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function twentyfive() {

    Img = document.getElementById("twentyfive");
    let zeroBtn = document.getElementById("twentyfiveBtn");

    graveyardArray.unshift(deckArray[25]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function twentysix() {

    Img = document.getElementById("twentysix");
    let zeroBtn = document.getElementById("twentysixBtn");

    graveyardArray.unshift(deckArray[26]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function twentyseven() {

    Img = document.getElementById("twentyseven");
    let zeroBtn = document.getElementById("twentysevenBtn");

    graveyardArray.unshift(deckArray[27]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function twentyeight() {

    Img = document.getElementById("twentyeight");
    let zeroBtn = document.getElementById("twentyeightBtn");

    graveyardArray.unshift(deckArray[28]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function twentynine() {

    Img = document.getElementById("twentynine");
    let zeroBtn = document.getElementById("twentynineBtn");
    
    graveyardArray.unshift(deckArray[29]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function thirty() {

    Img = document.getElementById("thirty");
    let zeroBtn = document.getElementById("thirtyBtn");

    graveyardArray.unshift(deckArray[30]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function thirtyone() {

    Img = document.getElementById("thirtyone");
    let zeroBtn = document.getElementById("thirtyoneBtn");

    graveyardArray.unshift(deckArray[31]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function thirtytwo() {

    Img = document.getElementById("thirtytwo");
    let zeroBtn = document.getElementById("thirtytwoBtn");

    graveyardArray.unshift(deckArray[32]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function thirtythree() {

    Img = document.getElementById("thirtythree");
    let zeroBtn = document.getElementById("thirtythreeBtn");

    graveyardArray.unshift(deckArray[33]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function thirtyfour() {

    Img = document.getElementById("thirtyfour");
    let zeroBtn = document.getElementById("thirtyfourBtn");

    graveyardArray.unshift(deckArray[34]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function thirtyfive() {

    Img = document.getElementById("thirtyfive");
    let zeroBtn = document.getElementById("thirtyfiveBtn");

    graveyardArray.unshift(deckArray[35]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function thirtysix() {

    Img = document.getElementById("thirtysix");
    let zeroBtn = document.getElementById("thirtysixBtn");

    graveyardArray.unshift(deckArray[36]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function thirtyseven() {

    Img = document.getElementById("thirtyseven");
    let zeroBtn = document.getElementById("thirtysevenBtn");

    graveyardArray.unshift(deckArray[37]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function thirtyeight() {

    Img = document.getElementById("thirtyeight");
    let zeroBtn = document.getElementById("thirtyeightBtn");

    graveyardArray.unshift(deckArray[38]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function thirtynine() {

    Img = document.getElementById("thirtynine");
    let zeroBtn = document.getElementById("thirtynineBtn");

    graveyardArray.unshift(deckArray[39]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function forty() {

    Img = document.getElementById("forty");
    let zeroBtn = document.getElementById("fortyBtn");

    graveyardArray.unshift(deckArray[40]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function fortyone() {

    Img = document.getElementById("fortyone");
    let zeroBtn = document.getElementById("fortyoneBtn");

    graveyardArray.unshift(deckArray[41]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function fortytwo() {

    Img = document.getElementById("fortytwo");
    let zeroBtn = document.getElementById("fortytwoBtn");

    graveyardArray.unshift(deckArray[42]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function fortythree() {

    Img = document.getElementById("fortythree");
    let zeroBtn = document.getElementById("fortythreeBtn");

    graveyardArray.unshift(deckArray[43]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function fortyfour() {

    Img = document.getElementById("fortyfour");
    let zeroBtn = document.getElementById("fortyfourBtn");

    graveyardArray.unshift(deckArray[44]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function fourtyfive() {

    Img = document.getElementById("fortyfive");
    let zeroBtn = document.getElementById("fortyfiveBtn");

    graveyardArray.unshift(deckArray[45]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function fortysix() {

    Img = document.getElementById("fortysix");
    let zeroBtn = document.getElementById("fortysixBtn");

    graveyardArray.unshift(deckArray[46]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function fortyseven() {

    Img = document.getElementById("fortyseven");
    let zeroBtn = document.getElementById("fortysevenBtn");

    graveyardArray.unshift(deckArray[47]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function fortyeight() {

    Img = document.getElementById("fortyeight");
    let zeroBtn = document.getElementById("fortyeightBtn");

    graveyardArray.unshift(deckArray[48]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function fortynine() {

    Img = document.getElementById("fortynine");
    let zeroBtn = document.getElementById("fortynine");

    graveyardArray.unshift(deckArray[49]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function fifty() {

    Img = document.getElementById("fifty");
    let zeroBtn = document.getElementById("fiftyBtn");

    graveyardArray.unshift(deckArray[50]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function fiftyone() {

    Img = document.getElementById("fiftyone");
    let zeroBtn = document.getElementById("fiftyoneBtn");

    graveyardArray.unshift(deckArray[51]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function fiftytwo() {

    Img = document.getElementById("fiftytwo");
    let zeroBtn = document.getElementById("fiftytwoBtn");

    graveyardArray.unshift(deckArray[52]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function fiftythree() {

    Img = document.getElementById("fiftythree");
    let zeroBtn = document.getElementById("fiftythreeBtn");

    graveyardArray.unshift(deckArray[53]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function fiftyfour() {

    Img = document.getElementById("fiftyfour");
    let zeroBtn = document.getElementById("fiftyfourBtn");

    graveyardArray.unshift(deckArray[54]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function fiftyfive() {

    Img = document.getElementById("fiftyfive");
    let zeroBtn = document.getElementById("fiftyfiveBtn");

    graveyardArray.unshift(deckArray[55]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function fiftysix() {

    Img = document.getElementById("fiftysix");
    let zeroBtn = document.getElementById("fiftysixBtn");

    graveyardArray.unshift(deckArray[56]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function fiftyseven() {

    Img = document.getElementById("fiftyseven");
    let zeroBtn = document.getElementById("fiftysevenBtn");

    graveyardArray.unshift(deckArray[57]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function fiftyeight() {

    Img = document.getElementById("fiftyeight");
    let zeroBtn = document.getElementById("fiftyeightBtn");

    graveyardArray.unshift(deckArray[58]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function fiftynine() {

    Img = document.getElementById("fiftynine");
    let zeroBtn = document.getElementById("fiftynineBtn");

    graveyardArray.unshift(deckArray[59]);

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

    graveyard();
    hideGraveyard();

}

function graveyard() {

    graveyardDiv.style.visibility = "visible";

    let graveyardItems = Img;

   graveyardDiv.appendChild(graveyardItems);

   hideGraveyardBtn.style.visibility = "visible";
   graveyardBtn.style.visibility = "hidden";


}

function hideGraveyard() {

    graveyardDiv.style.visibility = "hidden";
    graveyardBtn.style.visibility = "visible";
    hideGraveyardBtn.style.visibility = "hidden";



}