var playerHand = [];
var cpuHand = [];
var paired = [];
var cpuMin;
var cpuMax;
var playerMin;
var playerMax;
var playerCardCount = 0;
//var tpHand = new Array();

var $ = function (id) {
    return document.getElementById(id);
};

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    ev.target.appendChild(document.getElementById(data));
    alert(data);
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var firstRun = function () {
    var deckMin = 0;
    var deckMax = 26;

    // Middle Deck only needs 26 Cards
    for (i = deckMin; i < deckMax; i++) {
        paired[i] = 0;
    }
    // The coin toss here to determine who gets more cards
    // it's a 52% against 48% ratio on the chance to get the joker card.
    var jokerChance = Math.floor((Math.random() * 2) + 1);

    //Deck holding the original 26 values.
    var shuffleDeck = [];

    for (i = deckMin; i <= deckMax; i++) {
        shuffleDeck[i] = i;
    }

    shuffle(shuffleDeck);

    /*
	 for (i = deckMin; i <= deckMax; i++){
        alert(i + ": the shuffled deck has " + shuffleDeck[i]);
    }
    */

    //alert("Joker Chance is " + jokerChance);
    if (jokerChance === 1) {
        //alert("Player got joker chance");
        playerMin = 0;
        playerMax = 13;

        for (i = playerMin; i <= playerMax; i++) {
            playerHand[i] = shuffleDeck[i];
        }

        cpuMax = playerMax - 1;
        //cpuMax = 12;
        var shuffleMin = playerMax + 1;
        //shuffleMin = 14;
        for (i = 0; i <= cpuMax; i++) {
            cpuHand[i] = shuffleDeck[shuffleMin + i];
            //alert(i + " contains " + cpuHand[i] + " for CPU");
        }
    }
    else {
        //alert("Player did not get joker chance");
        playerMin = 0;
        playerMax = 12;

        for (i = playerMin; i <= playerMax; i++) {
            playerHand[i] = shuffleDeck[i];
        }

        //cpuMax = 13
        cpuMax = playerMax + 1;
        //shuffleMin = 13
        var shuffleMin = playerMax + 1;
        for (i = 0; i <= cpuMax; i++) {
            cpuHand[i] = shuffleDeck[shuffleMin + i];
            //alert(i + " contains " + cpuHand[i] + " for CPU");
        }
    }

    for (i = 0; i <= cpuMax; i++) {
        if (cpuHand[i] === 26) {
            //alert("Joker found on cpu hand at " + i);
            cpuHand[i] = -1;
            playerMax++;
            playerHand[playerMax] = -2;
        }
        //alert((i+1) + " CPU Hand has " + cpuHand[i]);
    }

    for (i = 0; i <= playerMax; i++) {
        if (playerHand[i] === 26) {
            //alert("Joker found on player's hand at " + i);
            playerHand[i] = -1;
            cpuMax++;
            cpuHand[cpuMax] = -2;
        }
        //alert((i+1) + " Player Hand has " + playerHand[i]);
    }

    /*
	console.clear();
	for (i = 0; i <= cpuMax; i++){
		console.log("CPU has " + cpuHand[i] + " at element " + i);
	}
	
	for (i = 0; i <= playerMax; i++){
		console.log("Player has " + playerHand[i] + " at element " + i);
	}
	*/
    autoPairCpu();
    autoPairPlayer();
};

var displayCards = function () {
    var drawCpuHand = "";
    var drawPlayerHand = "";
    var middleNewDraw = "";

    for (i = 0; i <= cpuMax; i++) {
        //alert("Current CPU Hand Card " + cpuHand[i]);

        if (cpuHand[i] === -1) {
            //drawCpuHand += '<img src="images/test/-1.png" draggable="true" ondragstart="drag(event)" id="-1" width="50" height="70" onclick = playerChoice(' + cpuHand[i] + ')>';
            //alert("Joker is on CPU at " + i + " with the value " + cpuHand[i]);
            drawCpuHand += '<img src="\Content\Cards\test\back.png" draggable="true" ondragstart="drag(event)" id="-1" width="50" height="70" onclick = playerChoice(' + cpuHand[i] + ')>';
        }
        else if (cpuHand[i] !== -2 && cpuHand[i] !== 999) {
            //drawCpuHand += '<img src="images/test/' + cpuHand[i] + '.png" draggable="true" ondragstart="drag(event)" id="' + cpuHand[i] + '" width="50" height="70" onclick = playerChoice(' + cpuHand[i] + ')>';
            drawCpuHand += '<img src= "\Content\Cards\testback.png" draggable="true" ondragstart="drag(event)" id="' + cpuHand[i] + '" width="50" height="70" onclick = playerChoice(' + cpuHand[i] + ')>';

        }
        $("cpuDeck").innerHTML = drawCpuHand;
    }



    //alert("Current Player Max is " + playerMax);
    for (i = 0; i <= playerMax; i++) {
        //alert("Current Player's Hand Card " + cpuHand[i]);

        if (playerHand[i] === -1) {
            //alert("Joker is on Player at " + i + " with the value " + playerHand[i]);
            drawPlayerHand += '<img src="images/test/-1.png" draggable="true" ondragstart="drag(event)" id="-1" width="50" height="70">';
            //drawPlayerHand += '<img src="images/test/back.png" draggable="true" ondragstart="drag(event)" id="-1" width="50" height="70">';
        }
        else if (playerHand[i] !== -2 && playerHand[i] !== 999) {
            drawPlayerHand += '<img src="images/test/' + playerHand[i] + '.png" draggable="true" ondragstart="drag(event)" id="' + playerHand[i] + '" width="50" height="70">';
            //drawPlayerHand += '<img src="images/test/back.png" draggable="true" ondragstart="drag(event)" id="' + playerHand[i] + '" width="50" height="70">';	
        }
        $("playerDeck").innerHTML = drawPlayerHand;

    }

    for (i = 0; i <= 12; i++) {
        if (paired[i] !== 0) {
            middleNewDraw += '<img src="images/test/' + i + '.png" width="50" height="70">';
            middleNewDraw += '<img src="images/test/' + (i + 13) + '.png" width="50" height="70">';
            $("cpuDrop").innerHTML = middleNewDraw;
        }
    }

};

var autoPairCpu = function () {

    var checkHand = 0;
    // initial pairFound needs to be set to false
    var pairFound = false;


    //Check the cpuHand
    /*
	for(i=0; i<=cpuMax;i++){
		console.log(cpuHand[i]);
	}
	*/

    // Going from cpuHand[0-12 or 13]
    for (i = 0; i <= cpuMax; i++) {
        //It is essential to determine if current pair can be found 
        //when starting from spade (13-25) or heart (0-12)
        //Pairs can be found based on clovers finding hearts or vice versa. 
        //Hearts start at 0-12
        if (cpuHand[i] < 13 && cpuHand[i] >= 0) {
            //alert("Current value of cpuHand is " + cpuHand[i]);
            checkHand = cpuHand[i] + 13;
            //alert("checked hand is currently at " + checkHand);
        }
            //Clovers start at 13-25
        else if (cpuHand[i] >= 13 && cpuHand[i] < 26) {
            //alert("Current value of cpuHand is " + cpuHand[i]);
            checkHand = cpuHand[i] - 13;
            //alert("checked hand is currently at " + checkHand);
        }

        // Check each array content with checkhand

        for (c = i + 1; c <= cpuMax; c++) {
            if (cpuHand[c] === (checkHand)) {
                //alert("Found one at " + cpuHand[c]);
                //paired[counter] = i;
                //counter++;

                //alert("First card " + cpuHand[i] + " at location " + i); 
                paired[cpuHand[i]] = 1;
                cpuHand[i] = 999;


                //alert("Second card " + cpuHand[c] + " at location " + c);
                paired[cpuHand[c]] = 1;
                cpuHand[c] = 999;

                //alert("Paired now has " + paired[cpuHand[i]] + " paired with " + paired[cpuHand[c]]);
                pairFound = true;

            }

        }

    }


    // Shuffle the DECK!
    ;

    if (pairFound === true) {
        shuffle(cpuHand)
        displayCards();
    }

};

var autoPairPlayer = function () {

    var checkHand = 0;
    /*
    for (i = 0; i <= 25; i++){
        paired[i] = 0;
    }
    */
    // initial pairFound needs to be set to false
    var pairFound = false;
    //Check the cpuHand
    /*
	for(i=0; i<=cpuMax;i++){
		alert(cpuHand[i]);
	}
	*/
    console.clear();
    // Going from cpuHand[0-12 or 13]
    for (i = 0; i <= playerMax; i++) {
        //It is essential to determine if current pair can be found 
        //when starting from spade (13-25) or heart (0-12)
        //Pairs can be found based on clovers finding hearts or vice versa. 
        //Hearts start at 0-12
        if (playerHand[i] < 13 && playerHand[i] >= 0) {
            //alert("Current value of cpuHand is " + cpuHand[i]);
            checkHand = playerHand[i] + 13;
            //alert("checked hand is currently at " + checkHand);
        }
            //Clovers start at 13-25
        else if (playerHand[i] >= 13 && playerHand[i] < 26) {
            //alert("Current value of cpuHand is " + cpuHand[i]);
            checkHand = playerHand[i] - 13;
            //alert("checked hand is currently at " + checkHand);
        }

        // Check each array content with checkhand

        for (c = i + 1; c <= playerMax; c++) {

            //if(paired[playerHand[i]] === 0 || paired[playerHand[c]] === 0){

            console.log("Player: " + paired[playerHand[i]] + " Pair " + i + ":" + paired[playerHand[c]]);
            if (playerHand[c] === (checkHand)) {

                //alert("Found one at " + cpuHand[c]);
                //paired[counter] = i;
                //counter++;

                //alert("First card " + cpuHand[i] + " at location " + i); 
                paired[playerHand[i]] = 1;
                playerHand[i] = 999;
                //alert("Second card " + cpuHand[c] + " at location " + c);
                paired[playerHand[c]] = 1;
                playerHand[c] = 999;
                //alert("Paired now has " + paired[cpuHand[i]] + " paired with " + paired[cpuHand[c]]);
                pairFound = true;
            }
            //}
        }
    }

    // Shuffle the DECK!

    if (pairFound === true) {
        shuffle(playerHand);
        displayCards();
    }

};


function playerChoice(card) {


    $(card).src = "images/test/" + card + ".png";

    //alert(card);

    if (card === -1) {
        for (i = 0; i <= cpuMax; i++) {
            if (cpuHand[i] === card) {
                cpuHand[i] = -2;
            }
        }

        for (i = 0; i <= playerMax; i++) {
            if (playerHand[i] === -2) {
                playerHand[i] = -1;
            }
        }
    }

    else {
        var checkHand;
        //The card chosen either has to be 13 greater or lesser than the card value

        for (i = 0; i <= cpuMax; i++) {
            if (cpuHand[i] === card) {
                paired[cpuHand[i]] = 1;
                //THIS IS BAD PROGRAMMING!
                // YOU GOTTA THINK ABOUT SCABILITY
                // WHAT IF THERE ARE MORE THAN TWO PLAYERS?
                cpuHand[i] = 999;

            }
        }

        if (card < 13 && card >= 0) {
            checkHand = card + 13;
        }
        else if (card >= 13 && card < 26) {
            checkHand = card - 13;
        }
        //Go through the player's hand and identify the card matching
        for (i = 0; i <= playerMax; i++) {
            if (playerHand[i] === checkHand) {
                console.log("Check hand is " + checkHand);

                //Tag the cards within the paired array as found and paired
                //console.log("Player Hand at " + i + " is " + playerHand[i]);
                //console.log("Paired found at " + paired[playerHand[i]] + " with " + paired[checkHand]);	
                playerHand[i] = 999;
                paired[checkHand] = 1;
                //console.log("Renewed paired found at " + paired[checkHand] + " with " + paired[checkHand]);	
            }
        }
    }

    shuffle(cpuHand);
    shuffle(playerHand);
    displayCards();
}
/*
var computerChooses = function() {
	playerCardCount=0;
	var cpuChoCard = [];
	var counter = 0;
	for (i =0; i <= playerMax; i++){
		if(playerHand[i] !== 999 && playerHand[i] !== -2){
			playerCardCount++;
			cpuChoCard[counter] = playerHand[i]; 
			counter++;
		}
	}
   // alert("Player has " + playerCardCount);
	//console.log("Player has " + playerCardCount);
    var cpuChoice = Math.floor((Math.random()*playerCardCount)+1);
    //console.log("CPU choice " + cpuChoice + " and the card is " + cpuChoCard[cpuChoice - 1]);
    var card = cpuChoCard[cpuChoice - 1];
	alert("Computer chose " + card + "!");
	
	if (card === -1){
		for (i = 0; i <= playerMax; i++){
			if (playerHand[i] === card){
				playerHand[i] = -2;
			}
		}
		
		for (i=0; i<= cpuMax; i++){
			if(cpuHand[i] === -2){
				cpuHand[i] = -1;
			}
		}
	}
	
	else{
		var checkHand;
		//The card chosen either has to be 13 greater or lesser than the card value

		for (i = 0; i <= cpuMax; i++){
			if(playerHand[i] === card){
				paired[playerHand[i]] = 1;
				//THIS IS BAD PROGRAMMING!
				// YOU GOTTA THINK ABOUT SCABILITY
				// WHAT IF THERE ARE MORE THAN TWO PLAYERS?
				playerHand[i] = 999;

			}
		}

		if (card < 13 && card >= 0){
			checkHand = card + 13;
		}
		else if (card >= 13 && card < 26){
			checkHand = card - 13;
		}
		//Go through the player's hand and identify the card matching
		for(i = 0; i <= playerMax; i++){
			if(cpuHand[i] === checkHand){
				console.log("Check hand is " + checkHand);
				
				//Tag the cards within the paired array as found and paired
				//console.log("Player Hand at " + i + " is " + playerHand[i]);
				//console.log("Paired found at " + paired[playerHand[i]] + " with " + paired[checkHand]);	
				cpuHand[i] = 999;
				paired[checkHand] = 1;
				//console.log("Renewed paired found at " + paired[checkHand] + " with " + paired[checkHand]);	
			}
		}
	}
	
	shuffle(cpuHand);
	shuffle(playerHand);
	displayCards();
	
};
*/

var computerChooses = function () {
    playerCardCount = 0;
    var cpuChoCard = [];
    var counter = 0;
    for (i = 0; i <= playerMax; i++) {
        if (playerHand[i] !== 999 && playerHand[i] !== -2) {
            playerCardCount++;
            cpuChoCard[counter] = playerHand[i];
            counter++;
        }
    }
    // alert("Player has " + playerCardCount);
    //console.log("Player has " + playerCardCount);
    var cpuChoice = Math.floor((Math.random() * playerCardCount) + 1);
    //console.log("CPU choice " + cpuChoice + " and the card is " + cpuChoCard[cpuChoice - 1]);
    var card = cpuChoCard[cpuChoice - 1];
    //alert("Computer chose " + card + "!");

    window.setTimeout(checkCPU(card), 3000);
};

function checkCPU(card) {
    if (card === -1) {
        for (i = 0; i <= playerMax; i++) {
            if (playerHand[i] === card) {
                playerHand[i] = -2;
            }
        }

        for (i = 0; i <= cpuMax; i++) {
            if (cpuHand[i] === -2) {
                cpuHand[i] = -1;
            }
        }
    }

    else {
        var checkHand;
        //The card chosen either has to be 13 greater or lesser than the card value

        for (i = 0; i <= cpuMax; i++) {
            if (playerHand[i] === card) {
                paired[playerHand[i]] = 1;
                //THIS IS BAD PROGRAMMING!
                // YOU GOTTA THINK ABOUT SCABILITY
                // WHAT IF THERE ARE MORE THAN TWO PLAYERS?
                playerHand[i] = 999;

            }
        }

        if (card < 13 && card >= 0) {
            checkHand = card + 13;
        }
        else if (card >= 13 && card < 26) {
            checkHand = card - 13;
        }
        //Go through the player's hand and identify the card matching
        for (i = 0; i <= playerMax; i++) {
            if (cpuHand[i] === checkHand) {
                console.log("Check hand is " + checkHand);

                //Tag the cards within the paired array as found and paired
                //console.log("Player Hand at " + i + " is " + playerHand[i]);
                //console.log("Paired found at " + paired[playerHand[i]] + " with " + paired[checkHand]);	
                cpuHand[i] = 999;
                paired[checkHand] = 1;
                //console.log("Renewed paired found at " + paired[checkHand] + " with " + paired[checkHand]);	
            }
        }
    }

    shuffle(cpuHand);
    shuffle(playerHand);
    displayCards();

};

window.onload = function () {
    firstRun();
    displayCards();
    // $("-1").onclick = jokerPicked;
    //$("autoPairBtn").onclick = autoPairPlayer;
    //$("playerTurnOver").onclick = autoPairCpu;
    $("playerTurnOver").onclick = computerChooses;

};