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
	var player;
	var enemy;
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
			player = rey;
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
			console.log("player two is " + playerTwoSelected);
			fight();
			
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
				fight();
				
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
				enemy = maul;
				console.log("player two is " + playerTwoSelected);
				fight();
				
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
				fight();
				
			}
		});	
	}
	function fight(){
		$("#attackBtn").on("click", function() {
			console.log("button pressed");
			if (gameStart === true){
				attack();  	
				// console.log("enemy's HP is " + enemy.healthPoints);
				if (enemy.healthPoints <= 0){
				enemiesRemaining--;
				console.log("enemies remaining is " + enemiesRemaining);
				}else {
					counterAttack();
					// console.log("rey's HP is " + player.healthPoints);
				}
				
			}
			
		});		
	}

	function attack(){
		enemy.healthPoints = enemy.healthPoints - player.attackPower;
		$("#enemy-total-hp").text(enemy.healthPoints);
		console.log("enemy HP is " + enemy.healthPoints);
	}

	function counterAttack(){
		player.healthPoints = player.healthPoints - enemy.counterAttackPower;
		$("#player-total-hp").text(player.healthPoints);
		console.log("player HP is " + player.healthPoints);
		if (player.healthPoints <= 0){
			console.log("you lose");	
		}
	}

playerSelect();
	console.log("player one is " + playerOneSelected);
});