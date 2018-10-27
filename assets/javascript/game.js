	// $(document).on("click", function() {
	// 	var intro = new Audio('https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.mp3');
	// 	intro.play();
	// 	// $("#start").css("display", "none");
	// 	// intro.pause();
	// });
	// $('#skip').on("click", function() {
	// 	$("#start").css("display", "none");
	// 	intro.pause();
	// });
	// intro.pause();
$(document).ready(function() {
	$('#skip').on("click", function() {
		$("#start").css("display", "none");
		$("#iframeAudio").attr("src","");
		// intro.pause();
	});

	


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
	var saber = new Audio ("assets/audio/player-select.mp3");
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
			saber.play();
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
				saber.play();
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
				saber.play();
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
				saber.play();
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
 		$("#select-option").text("Select your Enemy");
		$("#rey").on("click", function() {
			if (playerTwoSelected === false && rey.isPlayerOne === false){
			console.log("rey is second player");
			saber.play();
			$("#rey").appendTo("#enemy-fight-area");
			$("#enemy-name").text(rey.name);
			$("#enemy-hp").text("Health Points");
			$("#enemy-total-hp").text(rey.healthPoints);
			playerTwoSelected = true;
			isPlayerTwo = true;
			gameStart = true;
			enemy = rey;
			$("#select-option").text("Let the Battle Begin!");
			console.log("player two is " + playerTwoSelected)			
			}
		});	
	
		$("#luke").on("click", function() {
			if (playerTwoSelected === false && luke.isPlayerOne === false){
				console.log("luke is second player");
				saber.play();
				$("#luke").appendTo("#enemy-fight-area");
				$("#enemy-name").text(luke.name);
				$("#enemy-hp").text("Health Points");
				$("#enemy-total-hp").text(luke.healthPoints);
				playerTwoSelected = true;
				isPlayerTwo = true;
				gameStart = true;
				enemy = luke;
				$("#select-option").text("Let the Battle Begin!");
				console.log("gamestart is " + gameStart);
				console.log("player two is " + playerTwoSelected);				
			}
		});	
	
		$("#maul").on("click", function() {
			if (playerTwoSelected === false && maul.isPlayerOne === false){
				console.log("maul is second player");
				saber.play();
				$("#maul").appendTo("#enemy-fight-area");
				$("#enemy-name").text(maul.name);
				$("#maul").addClass('flip');
				$("#enemy-hp").text("Health Points");
				$("#enemy-total-hp").text(maul.healthPoints);
				playerTwoSelected = true;
				isPlayerTwo = true;
				gameStart = true;
				enemy = maul;
				$("#select-option").text("Let the Battle Begin!");
				console.log("player two is " + playerTwoSelected);				
			}
		});	
	
		$("#vader").on("click", function() {
			if (playerTwoSelected === false && vader.isPlayerOne === false){
				console.log("vader is second player");
				saber.play();
				$("#vader").appendTo("#enemy-fight-area");
				$("#enemy-name").text(vader.name);
				$("#enemy-hp").text("Health Points");
				$("#enemy-total-hp").text(vader.healthPoints);
				playerTwoSelected = true;
				isPlayerTwo = true;
				gameStart = true;
				enemy = vader;
				$("#select-option").text("Let the Battle Begin!");
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
			setTimeout(function(){playerTwoSelected = false}, 2000);
			setTimeout(function(){$("#select-option").text("Select your Enemy")}, 500);
			console.log("player two selected is " + playerTwoSelected);
		}	
	}



	function gameWin() {
		console.log("you win");
		$("#enemy-total-hp").text(0);
		gameStart = false;
		setTimeout(function(){$("#fin-win").html("<img src='assets/images/game-win.gif'>")}, 1000*3);
		setTimeout(gameReset, 1000 * 8);
	}



 	function gameLose() {
		console.log("you lose");
		//player lose screen
		//player lose music
		$("#player-total-hp").text(0);
		gameStart = false;
		setTimeout(function(){$("#fin-lose").html("<img src='assets/images/game-lose.gif'>")}, 1000*3);		
		setTimeout(gameReset, 1000 * 8);
	}

	function gainMorePower(){
		player.hitStrength = player.hitStrength + player.basicHitStrength;
		console.log("player hit strength is " + player.hitStrength);
	}	

//game reset
	function gameReset(){
			[rey = {
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
			playerOneSelected = false;
			playerTwoSelected = false;
			enemiesRemaining = players.length - 1;
			$("#select-option").text("Select your Character")
			$("#fin-win",).html("");
			$("#fin-lose").html("");
			$("#enemy-name").text("");
			$("#enemy-hp").text("");
			$("#player-name").text("");
			$("#player-hp").text("");
			$("#player-total-hp").text("");
			$("#enemy-total-hp").text("");
			$("#player-fight-area").html("");
			$("#enemy-fight-area").html("");
			$("#firstSection").html("");
			$("<img id='maul' class='col-sm-3 char mx-auto d-block' src='assets/images/darth-maul.png'>").appendTo("#firstSection");
			$("<img id='vader' class='col-sm-3 char mx-auto d-block' src='assets/images/darth-vader.png'>").appendTo("#firstSection");
			$("<img id='luke' class='col-sm-3 char mx-auto d-block' src='assets/images/luke-skywalker.png'>").appendTo("#firstSection");
			$("<img id='rey' class='col-sm-3 char mx-auto d-block' src='assets/images/rey.png'>").appendTo("#firstSection");
			console.log("game reset seccessful");
			playerSelect();
	}


});