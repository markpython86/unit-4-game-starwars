$(document).ready(function() {
console.log("we are live!!!")
	// an array of objects(players)
	var players = 	[rey = {
						name: "Rey",
						healthPoints: 80,
						initialAttackPower: 6,
						attackPower: 6,
						counterAttackPower: 5,
						isPlayerOne: false,
						isPlayerTwo: false,
						isDead: false,
					}, 
					luke = {
						name: "Luke Skywalker",
						healthPoints: 150,
						initialAttackPower: 5,
						attackPower: 5,
						counterAttackPower: 10,
						isPlayerOne: false,
						isPlayerTwo: false,
						isDead: false,
					},
					maul = {
						name: "Darth Maul",
						healthPoints: 160,
						initialAttackPower: 4,	
						attackPower: 4,
						counterAttackPower: 15,
						isPlayerOne: false,
						isPlayerTwo: false,
						isDead: false,
					},
					vader = {
						name: "Darth Vader",
						healthPoints: 180,
						initialAttackPower: 2,
						attackPower: 2,
						counterAttackPower: 25,
						isPlayerOne: false,
						isPlayerTwo: false,
						isDead: false,
					}
					]

	playerOneSelected = false;
	playerTwoSelected = false;
	gameStart = false;
	var enemyHealthPoints;
	var enemyCounterAttackPower;
	var enemiesRemaining = players.length;
	console.log("enemies remaining is " + enemiesRemaining)
	



	//Functions=====================================
	function playerSelect(){
	
		$("#rey").on("click", function() {
			if (playerOneSelected === false){
			console.log("rey is first player");
			
			$("#rey").appendTo("#player-fight-area");
			$("#player-name").text(rey.name);
			$("#rey").addClass('flip');
			$("#player-hp").text("HealthPoints");
			$("#player-total-hp").text(rey.healthPoints);
			playerOneSelected = true;
			rey.isPlayerOne = true;
			enemySelect();
			console.log("player one is " + playerOneSelected);
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
			console.log("player two is " + playerTwoSelected);
			
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
				console.log("gamestart is " + gameStart);
				console.log("player two is " + playerTwoSelected);
				
			}
		});	
	
		$("#maul").on("click", function() {
			if (playerTwoSelected === false && maul.isPlayerOne === false){
				console.log("maul is second player");
				
				$("#maul").appendTo("#enemy-fight-area");
				$("#enemy-name").text(maul.name);
				$("#enemy-hp").text("Health Points");
				$("#enemy-total-hp").text(maul.healthPoints);
				playerTwoSelected = true;
				isPlayerTwo = true;
				gameStart = true;
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
				console.log("player two is " + playerTwoSelected);
				
			}
		});	
	}

playerSelect();
	console.log("player one is " + playerOneSelected);
});