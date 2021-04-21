let deckArray = ["/media/face_the_hydra/hydra_head.jpg","/media/face_the_hydra/hydra_head.jpg","/media/face_the_hydra/hydra_head.jpg","/media/face_the_hydra/hydra_head.jpg","/media/face_the_hydra/hydra_head.jpg","/media/face_the_hydra/hydra_head.jpg","/media/face_the_hydra/hydra_head.jpg","/media/face_the_hydra/hydra_head.jpg","/media/face_the_hydra/hydra_head.jpg","/media/face_the_hydra/hydra_head.jpg","/media/face_the_hydra/hydra_head.jpg","/media/face_the_hydra/ravenous_brute_head.jpg","/media/face_the_hydra/ravenous_brute_head.jpg","/media/face_the_hydra/ravenous_brute_head.jpg","/media/face_the_hydra/ravenous_brute_head.jpg","/media/face_the_hydra/savage_vigor_head.jpg","/media/face_the_hydra/snapping_fang_head.jpg","/media/face_the_hydra/shrieking_titan_head.jpg","/media/face_the_hydra/disorienting_glower.jpg","/media/face_the_hydra/disorienting_glower.jpg","/media/face_the_hydra/disorienting_glower.jpg","/media/face_the_hydra/disorienting_glower.jpg","/media/face_the_hydra/disorienting_glower.jpg","/media/face_the_hydra/distract_the_hydra.jpg","/media/face_the_hydra/distract_the_hydra.jpg","/media/face_the_hydra/distract_the_hydra.jpg","/media/face_the_hydra/distract_the_hydra.jpg","/media/face_the_hydra/distract_the_hydra.jpg","/media/face_the_hydra/grown_from_the_stump.jpg","/media/face_the_hydra/grown_from_the_stump.jpg","/media/face_the_hydra/grown_from_the_stump.jpg","/media/face_the_hydra/grown_from_the_stump.jpg","/media/face_the_hydra/hydras_impenetrable_hide.jpg","/media/face_the_hydra/hydras_impenetrable_hide.jpg","/media/face_the_hydra/hydras_impenetrable_hide.jpg","/media/face_the_hydra/hydras_impenetrable_hide.jpg","/media/face_the_hydra/neck_tangle.jpg","/media/face_the_hydra/neck_tangle.jpg","/media/face_the_hydra/neck_tangle.jpg","/media/face_the_hydra/noxious_hydra_breath.jpg","/media/face_the_hydra/noxious_hydra_breath.jpg","/media/face_the_hydra/noxious_hydra_breath.jpg","/media/face_the_hydra/noxious_hydra_breath.jpg","/media/face_the_hydra/strike_the_weak_spot.jpg","/media/face_the_hydra/strike_the_weak_spot.jpg","/media/face_the_hydra/swallow_the_hero_whole.jpg","/media/face_the_hydra/swallow_the_hero_whole.jpg","/media/face_the_hydra/swallow_the_hero_whole.jpg","/media/face_the_hydra/swallow_the_hero_whole.jpg","/media/face_the_hydra/swallow_the_hero_whole.jpg","/media/face_the_hydra/torn_between_heads.jpg","/media/face_the_hydra/torn_between_heads.jpg","/media/face_the_hydra/torn_between_heads.jpg","/media/face_the_hydra/torn_between_heads.jpg","/media/face_the_hydra/unified_lunge.jpg","/media/face_the_hydra/unified_lunge.jpg","/media/face_the_hydra/unified_lunge.jpg","/media/face_the_hydra/unified_lunge.jpg","/media/face_the_hydra/unified_lunge.jpg","/media/face_the_hydra/unified_lunge.jpg",];

let battlefieldDiv = document.getElementById("battlefield");

let RanNum;

let number = deckArray.length;

let drawCard;

let removeBtn;

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

    console.log(deckArray + " Random Number: " + RanNum + " Deck Length: " + deckArray.length);

}


function zero() {

    let Img = document.getElementById("zero");
    let zeroBtn = document.getElementById("zeroBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function one() {

    let Img = document.getElementById("one");
    let zeroBtn = document.getElementById("oneBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function two() {

    let Img = document.getElementById("two");
    let zeroBtn = document.getElementById("twoBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function three() {

    let Img = document.getElementById("three");
    let zeroBtn = document.getElementById("threeBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function four() {

    let Img = document.getElementById("four");
    let zeroBtn = document.getElementById("fourBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function five() {

    let Img = document.getElementById("five");
    let zeroBtn = document.getElementById("fiveBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function six() {

    let Img = document.getElementById("six");
    let zeroBtn = document.getElementById("sixBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function seven() {

    let Img = document.getElementById("seven");
    let zeroBtn = document.getElementById("sevenBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function eight() {

    let Img = document.getElementById("eight");
    let zeroBtn = document.getElementById("eightBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function nine() {

    let Img = document.getElementById("nine");
    let zeroBtn = document.getElementById("nineBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function ten() {

    let Img = document.getElementById("ten");
    let zeroBtn = document.getElementById("tenBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function eleven() {

    let Img = document.getElementById("eleven");
    let zeroBtn = document.getElementById("elevenBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function twelve() {

    let Img = document.getElementById("twelve");
    let zeroBtn = document.getElementById("twelveBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function thirteen() {

    let Img = document.getElementById("thirteen");
    let zeroBtn = document.getElementById("thirteenBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function fourteen() {

    let Img = document.getElementById("fourteen");
    let zeroBtn = document.getElementById("fourteenBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function fifteen() {

    let Img = document.getElementById("fifteen");
    let zeroBtn = document.getElementById("fifteenBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function sixteen() {

    let Img = document.getElementById("sixteen");
    let zeroBtn = document.getElementById("sixteenBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function seventeen() {

    let Img = document.getElementById("seventeen");
    let zeroBtn = document.getElementById("seventeenBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function eighteen() {

    let Img = document.getElementById("eighteen");
    let zeroBtn = document.getElementById("eighteenBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function nineteen() {

    let Img = document.getElementById("nineteen");
    let zeroBtn = document.getElementById("nineteenBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function twenty() {

    let Img = document.getElementById("twenty");
    let zeroBtn = document.getElementById("twentyBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function twentyone() {

    let Img = document.getElementById("twentyone");
    let zeroBtn = document.getElementById("twentyoneBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function twentytwo() {

    let Img = document.getElementById("twentytwo");
    let zeroBtn = document.getElementById("twentytwoBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function twentythree() {

    let Img = document.getElementById("twentythree");
    let zeroBtn = document.getElementById("twentythreeBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function twentyfour() {

    let Img = document.getElementById("twentyfour");
    let zeroBtn = document.getElementById("twentyfourBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function twentyfive() {

    let Img = document.getElementById("twentyfive");
    let zeroBtn = document.getElementById("twentyfiveBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function twentysix() {

    let Img = document.getElementById("twentysix");
    let zeroBtn = document.getElementById("twentysixBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function twentyseven() {

    let Img = document.getElementById("twentyseven");
    let zeroBtn = document.getElementById("twentysevenBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function twentyeight() {

    let Img = document.getElementById("twentyeight");
    let zeroBtn = document.getElementById("twentyeightBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function twentynine() {

    let Img = document.getElementById("twentynine");
    let zeroBtn = document.getElementById("twentynineBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function thirty() {

    let Img = document.getElementById("thirty");
    let zeroBtn = document.getElementById("thirtyBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function thirtyone() {

    let Img = document.getElementById("thirtyone");
    let zeroBtn = document.getElementById("thirtyoneBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function thirtytwo() {

    let Img = document.getElementById("thirtytwo");
    let zeroBtn = document.getElementById("thirtytwoBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function thirtythree() {

    let Img = document.getElementById("thirtythree");
    let zeroBtn = document.getElementById("thirtythreeBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function thirtyfour() {

    let Img = document.getElementById("thirtyfour");
    let zeroBtn = document.getElementById("thirtyfourBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function thirtyfive() {

    let Img = document.getElementById("thirtyfive");
    let zeroBtn = document.getElementById("thirtyfiveBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function thirtysix() {

    let Img = document.getElementById("thirtysix");
    let zeroBtn = document.getElementById("thirtysixBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function thirtyseven() {

    let Img = document.getElementById("thirtyseven");
    let zeroBtn = document.getElementById("thirtysevenBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function thirtyeight() {

    let Img = document.getElementById("thirtyeight");
    let zeroBtn = document.getElementById("thirtyeightBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function thirtynine() {

    let Img = document.getElementById("thirtynine");
    let zeroBtn = document.getElementById("thirtynineBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function forty() {

    let Img = document.getElementById("forty");
    let zeroBtn = document.getElementById("fortyBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function fortyone() {

    let Img = document.getElementById("fortyone");
    let zeroBtn = document.getElementById("fortyoneBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function fortytwo() {

    let Img = document.getElementById("fortytwo");
    let zeroBtn = document.getElementById("fortytwoBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function fortythree() {

    let Img = document.getElementById("fortythree");
    let zeroBtn = document.getElementById("fortythreeBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function fortyfour() {

    let Img = document.getElementById("fortyfour");
    let zeroBtn = document.getElementById("fortyfourBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function fourtyfive() {

    let Img = document.getElementById("fortyfive");
    let zeroBtn = document.getElementById("fortyfiveBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function fortysix() {

    let Img = document.getElementById("fortysix");
    let zeroBtn = document.getElementById("fortysixBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function fortyseven() {

    let Img = document.getElementById("fortyseven");
    let zeroBtn = document.getElementById("fortysevenBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function fortyeight() {

    let Img = document.getElementById("fortyeight");
    let zeroBtn = document.getElementById("fortyeightBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function fortynine() {

    let Img = document.getElementById("fortynine");
    let zeroBtn = document.getElementById("fortynine");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function fifty() {

    let Img = document.getElementById("fifty");
    let zeroBtn = document.getElementById("fiftyBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function fiftyone() {

    let Img = document.getElementById("fiftyone");
    let zeroBtn = document.getElementById("fiftyoneBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function fiftytwo() {

    let Img = document.getElementById("fiftytwo");
    let zeroBtn = document.getElementById("fiftytwoBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function fiftythree() {

    let Img = document.getElementById("fiftythree");
    let zeroBtn = document.getElementById("fiftythreeBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function fiftyfour() {

    let Img = document.getElementById("fiftyfour");
    let zeroBtn = document.getElementById("fiftyfourBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function fiftyfive() {

    let Img = document.getElementById("fiftyfive");
    let zeroBtn = document.getElementById("fiftyfiveBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function fiftysix() {

    let Img = document.getElementById("fiftysix");
    let zeroBtn = document.getElementById("fiftysixBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function fiftyseven() {

    let Img = document.getElementById("fiftyseven");
    let zeroBtn = document.getElementById("fiftysevenBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function fiftyeight() {

    let Img = document.getElementById("fiftyeight");
    let zeroBtn = document.getElementById("fiftyeightBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}

function fiftynine() {

    let Img = document.getElementById("fiftynine");
    let zeroBtn = document.getElementById("fiftynineBtn");

    battlefieldDiv.removeChild(Img);
    battlefieldDiv.removeChild(zeroBtn);

}