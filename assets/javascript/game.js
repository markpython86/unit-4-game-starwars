$(document).ready(function() {
console.log("we are live!!!")
	// an array of objects(players)
	var players = 	[rey = {
						name: "Rey",
						healthPoints: 1080,
						basicHitStrength: 15,
						hitStrength: 12,
						counterHitStrength: 12,
						isPlayerOne: false,
						isPlayerTwo: false,
					}, 
					luke = {
						name: "Luke Skywalker",
						healthPoints: 150,
						basicHitStrength: 5,
						hitStrength: 5,
						counterHitStrength: 10,
						isPlayerOne: false,
						isPlayerTwo: false,
					},
					maul = {
						name: "Darth Maul",
						healthPoints: 160,
						basicHitStrength: 4,	
						hitStrength: 4,
						counterHitStrength: 15,
						isPlayerOne: false,
						isPlayerTwo: false,
					},
					vader = {
						name: "Darth Vader",
						healthPoints: 180,
						basicHitStrength: 2,
						hitStrength: 2,
						counterHitStrength: 25,
						isPlayerOne: false,
						isPlayerTwo: false,
					}]
	var player;
	var enemy;
	playerOneSelected = false;
	playerTwoSelected = false;
	gameStart = false;
	var enemyHealthPoints;
	var enemycounterHitStrength;
	var enemiesRemaining = players.length - 1;
	console.log("enemies remaining is " + enemiesRemaining)
	playerSelect();
	fight();



	//Functions=====================================
	function playerSelect(){
	
		$("#rey").on("click", function() {
			if (playerOneSelected === false){
			console.log("rey is first player");
			$("#rey").appendTo("#player-fight-area");
			$("#player-name").text(rey.name);
			$("#rey").addClass('flip');
			$("#player-hp").text("Health Points");
			$("#player-total-hp").text(rey.healthPoints);
			playerOneSelected = true;
			rey.isPlayerOne = true;
			player = rey;
			console.log("player one is " + playerOneSelected);
			enemySelect();
			}
		});	
	
		$("#luke").on("click", function() {
			if (playerOneSelected === false){
				console.log("luke is first player");
				$("#luke").appendTo("#player-fight-area");
				$("#luke").addClass('flip');
				$("#player-name").text(luke.name);
				$("#player-hp").text("Health Points");
				$("#player-total-hp").text(luke.healthPoints);
				playerOneSelected = true;
				luke.isPlayerOne = true;
				player = luke;
				console.log("player one is " + playerOneSelected);
				enemySelect();
			}
		});	
	
		$("#maul").on("click", function() {
			if (playerOneSelected === false){
				console.log("maul is first player");
				$("#maul").appendTo("#player-fight-area");
				$("#player-name").text(maul.name);
				$("#player-hp").text("Health Points");
				$("#player-total-hp").text(maul.healthPoints);
				$("#player-total-hp").text(maul.healthPoints);
				playerOneSelected = true;
				maul.isPlayerOne = true;
				player = maul;
				console.log("player one is " + playerOneSelected);
				enemySelect();
			}
 		});	
	
		$("#vader").on("click", function() {
			if (playerOneSelected === false){
				console.log("vader is first player");
				$("#vader").appendTo("#player-fight-area");
				$("#vader").addClass('flip');
				$("#player-name").text(vader.name);
				$("#player-hp").text("Health Points");
				$("#player-total-hp").text(vader.healthPoints);
				playerOneSelected = true;
				vader.isPlayerOne = true;
				player = vader;
				console.log("player one is " + playerOneSelected);
				enemySelect();
			}
		});	
	}
 	function enemySelect(){
		//HTML - display "select your enemy"
		$("#rey").on("click", function() {
			if (playerTwoSelected === false && rey.isPlayerOne === false){
			console.log("rey is second player");
			$("#rey").appendTo("#enemy-fight-area");
			$("#enemy-name").text(rey.name);
			$("#enemy-hp").text("Health Points");
			$("#enemy-total-hp").text(rey.healthPoints);
			playerTwoSelected = true;
			isPlayerTwo = true;
			gameStart = true;
			enemy = rey;
			console.log("player two is " + playerTwoSelected)			
			}
		});	
	
		$("#luke").on("click", function() {
			if (playerTwoSelected === false && luke.isPlayerOne === false){
				console.log("luke is second player");
				$("#luke").appendTo("#enemy-fight-area");
				$("#enemy-name").text(luke.name);
				$("#enemy-hp").text("Health Points");
				$("#enemy-total-hp").text(luke.healthPoints);
				playerTwoSelected = true;
				isPlayerTwo = true;
				gameStart = true;
				enemy = luke;
				console.log("gamestart is " + gameStart);
				console.log("player two is " + playerTwoSelected);				
			}
		});	
	
		$("#maul").on("click", function() {
			if (playerTwoSelected === false && maul.isPlayerOne === false){
				console.log("maul is second player");
				
				$("#maul").appendTo("#enemy-fight-area");
				$("#enemy-name").text(maul.name);
				$("#maul").addClass('flip');
				$("#enemy-hp").text("Health Points");
				$("#enemy-total-hp").text(maul.healthPoints);
				playerTwoSelected = true;
				isPlayerTwo = true;
				gameStart = true;
				enemy = maul;
				console.log("player two is " + playerTwoSelected);				
			}
		});	
	
		$("#vader").on("click", function() {
			if (playerTwoSelected === false && vader.isPlayerOne === false){
				console.log("vader is second player");
				
				$("#vader").appendTo("#enemy-fight-area");
				$("#enemy-name").text(vader.name);
				$("#enemy-hp").text("Health Points");
				$("#enemy-total-hp").text(vader.healthPoints);
				playerTwoSelected = true;
				isPlayerTwo = true;
				gameStart = true;
				enemy = vader;
				console.log("player two is " + playerTwoSelected);				
			}
		});	
	}
	function fight(){
		$("#attackBtn").on("click", function() {
			console.log("button pressed");
			if (gameStart === true){
				attack();
				gainMorePower();  	
				// console.log("enemy's HP is " + enemy.healthPoints);
				if (enemy.healthPoints <= 0){
				enemiesRemaining--;
				console.log("enemies remaining is " + enemiesRemaining);
				statusCheck();
				} else {
				counterAttack();
					// console.log("rey's HP is " + player.healthPoints);
				}
				
			}
			
		});		
	}

	

	function attack(){
		enemy.healthPoints = enemy.healthPoints - player.hitStrength;
		$("#enemy-total-hp").text(enemy.healthPoints);
		console.log("enemy HP is " + enemy.healthPoints);
	}

	function counterAttack(){
		player.healthPoints = player.healthPoints - enemy.counterHitStrength;
		$("#player-total-hp").text(player.healthPoints);
		console.log("player Health is " + player.healthPoints);
		console.log("Enemy counter hit strength is " + enemy.counterHitStrength)
		if (player.healthPoints <= 0){
			console.log("you lose");
			// statusCheck();
			gameLose();	
		}
	}

	function statusCheck(){
			if (enemiesRemaining === 0){
			gameWin();
		}
		else {	
			gameStart = false;
				if (enemiesRemaining === 2){
				} else if (enemiesRemaining === 1){
		}
			$("#enemy-fight-area").empty();
			$("#enemy-name").text("");
			$("#enemy-total-hp").text("");
			$('#enemy-hp').text("");
			playerTwoSelected = false;
			console.log("player two selected is " + playerTwoSelected);
		}	
	}



	function gameWin() {
		console.log("you win");
		alert("you win!");
		//player win screen
		//player win music
		$("#enemy-total-hp").text(0);
		gameStart = false;	
	}



 	function gameLose() {
		console.log("you lose");
		//player lose screen
		//player lose music
		$("#player-total-hp").text(0);
		gameStart = false;
	}

	function gainMorePower(){
		player.hitStrength = player.hitStrength + player.basicHitStrength;
			console.log("player hit strength is " + player.hitStrength);
	}	



});