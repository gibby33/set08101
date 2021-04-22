/*function startup(time, temp, humi) {
    if (localStorage.getItem("graphlocal") === null) {
        // Retrieve
        charttemp(time, temp, humi);
    } else if (localStorage.getItem("graphlocal") === "humi") {
        charthumi(time, humi);
    } else {
        charttemp(time, temp, humi);
    }
}

function localtemp() {
    localStorage.setItem("graphlocal", "temp");
    location.reload();
}

function localhumi() {
    localStorage.setItem("graphlocal", "humi");
    location.reload();
}*/

//function Level()

function startgame()
{
	localStorage.setItem("floor", 1);
	localStorage.setItem("potions", 0);
	localStorage.setItem("grenade", 0);
	localStorage.setItem("lazer", 0);
	localStorage.setItem("strength", 3);
	localStorage.setItem("health", 32);
	localStorage.setItem("fight", 0);
	localStorage.setItem("god", 0);
	localStorage.setItem("status", 'alive');
 
}

function level()
{
	localStorage.setItem("floor", 1);
	addMessage()
}

function floorprogress()
{
	
	
	if (localStorage.getItem("fight") == 1){
		battle("none")
	}
	else{
	
	floor = localStorage.getItem("floor");
	floor = parseInt(floor, 10) + 1;
	localStorage.setItem("floor", floor);
	floor = "Floor " + floor
	document.getElementById("floor").innerHTML = floor;
	
	if (floor === 'Floor 5') {
		floor5()
	}
	else if (floor === 'Floor 10') {
		floor10()
	}
	else if (floor === 'Floor 15') {
		floor15()
	}
	else if (floor === 'Floor 20') {
		floor20()
	}
	else{
		encounter('Stairs')
	}
	}
}

function encounter(route)
{
	document.getElementById("music").play();
	document.getElementById("music").loop = true;
	document.getElementById("music").volume = 0.4; 
	
	chance = Math.floor(Math.random() * 10) + 1;
	
	if (chance == 2 || chance == 1 || chance == 9){
		document.getElementById("important").innerHTML = "potion";
		potion = localStorage.getItem("potions");
		potion = parseInt(potion, 10) + 1;
		localStorage.setItem("potions", potion);
		document.getElementById("potions").innerHTML = "Potion " + potion;
		
		if (route == 'Stairs'){
			document.getElementById("important").innerHTML = "As you walk up the stairs you spot a medkit on the wall.\n You pick it up and continue on to the next floor.";
		}
		else {
			document.getElementById("important").innerHTML = 'You search the through the floor and find a medkit that will surely come in handy.';
	}}
	else if (chance == 3 || chance == 10){
		document.getElementById("important").innerHTML = "damage boost";
		strength = localStorage.getItem("strength");
		strength = parseInt(strength, 10) + 1;
		localStorage.setItem("strength", strength);
		document.getElementById("strength").innerHTML = "Strength " + strength;
		
		if (route == 'Stairs'){
			document.getElementById("important").innerHTML = 'As you enter the stairwell case you notice that the stairs leading up are partially blocked by debris. you lift it out of the way making yourself stronger in the process.';
		}
		else{
			document.getElementById("important").innerHTML = 'As you search the floor you find a few barbells. You decid to give youself a quick workout before pressing on. You feel stronger now as a result.';
	}
	}
	else if (chance == 4){
		document.getElementById("important").innerHTML = "grenade";
		grenade = localStorage.getItem("grenade");
		grenade = parseInt(grenade, 10) + 1;
		localStorage.setItem("grenade", grenade);
		document.getElementById("grenade").innerHTML = "Grenade " + grenade;
		
		if (route == 'Stairs'){
			document.getElementById("important").innerHTML = 'You ascend the stairs and find a grenade sitting atop pedestal like a faberge egg on display. You realise how useless it is sitting their and take with you on your journey.';
		}
		else{
			document.getElementById("important").innerHTML = 'You search the current floor and find the lost and found box. Amounst the items you find a grenade and take it. You wonder why there is a grenade in a lost and found but you then remember where you are.';
	}}
	else if (chance == 5){
		document.getElementById("important").innerHTML = "lazer gun";
		lazergun = localStorage.getItem("lazer");
		lazergun = parseInt(lazergun, 10) + 1;
		localStorage.setItem("lazer", lazergun);
		document.getElementById("lazer").innerHTML = "Lazer ammo " + lazergun;
		
		if (route == 'Stairs'){
			document.getElementById("important").innerHTML = 'As you ascend the stairs you find a vending machine. You decide to buy the power cells for your LAS-99 sidearm.';
		}
		else{
			document.getElementById("important").innerHTML = 'You search the floor for useful items that can help you on your mission. You find some ammunition for your lazer gun that you had to dislodge from between two cushions on a decrepit couch.';
		}
	}
	else if (chance == 6){
		document.getElementById("important").innerHTML = "big mob";
		localStorage.setItem("mob", 30);
		smallmob("Mech", 30,5)
		
		if (route == 'Stairs'){
			document.getElementById("important").innerHTML = 'You climb the stairs and find a some kind of machine sitting in the corner. As you get closer it suddenly comes to life in a flash. Prepare to fight.';
		}
		else{
			document.getElementById("important").innerHTML = "As you search the floor a figure barges through a nearby metal door. It's a mech. Prepare to fight.";
	}}
	else if (chance == 7){
		document.getElementById("important").innerHTML = "small mob";
		localStorage.setItem("mob", 16);
		smallmob("cyber orc", 16,2)
		
		if (route == 'Stairs'){
			document.getElementById("important").innerHTML = 'You hear a voice coming from the top of the stairs. You peak round the corner at the top of stairs and you see a cybernetically enhanced orc. Prepare to fight.';
		}
		else{
			document.getElementById("important").innerHTML = 'As you search the floor you approach a door and put your head up against the door and listen. You hear the sound of a orc along with some kind of machinery. You break the door down. Prepare to fight.';
	}}
	else if (chance == 8){
		document.getElementById("important").innerHTML = "trap";
		battle('trap')
		if (route == 'Stairs'){
			document.getElementById("important").innerHTML = 'On your ascent you step on some kind of slippery substance on the steps and slip resulting in you banging your head on the bannister. You take some damage.';
		}
		else{
			document.getElementById("important").innerHTML = 'As you progress through a hallway your foot makes contact with a bit of rope on the ground. Before you know a log comes swinging from the ceiling which makes contact right into your stomach. You take some damage.';
}}}
	

function floor5()
{
		document.getElementById("important").innerHTML = "You climb the stairs only to find a crazed mad man. Prepare to fight.";
		localStorage.setItem("mob", 16);
		smallmob('Madman', 16, 2)
}
function floor10()
{
		document.getElementById("important").innerHTML = "You climb the stiars only to find a henchmen for the local kingpin at the top of the stairs. Prepare to fight";
		localStorage.setItem("mob", 40);
		smallmob('Henchman', 40, 4)
}
function floor15()
{
		document.getElementById("important").innerHTML = "You climb the stiars only to find some kind of kickboxing robot straight out of a bad action movie. Prepare to fight";
		localStorage.setItem("mob", 60);
		smallmob('Kickboxer', 60, 5)
}
function floor20()
{
		document.getElementById("important").innerHTML = "The reason why you're here. The kingpin sits right in front of you behind double doors made from solid gold. As you open the door you mentally prepare for your final fight.";
		localStorage.setItem("mob", 75);
		smallmob('Kingpin', 75, 6)
}

function potions()
{
if (localStorage.getItem("status") == 'alive'){
	potion = localStorage.getItem("potions");
	potion = parseInt(potion, 10) - 1;
	localStorage.setItem("potions", potion);
	potion = "Potion " + potion;
	if (potion != "Potion 0"){
	document.getElementById("potions").innerHTML = potion;
	}
	else{
		document.getElementById("potions").innerHTML = "";
	}
	battle("potion")
}}

function grenade2()
{
if (localStorage.getItem("fight") == 1){
	Grenade = localStorage.getItem("grenade");
	Grenade = parseInt(Grenade, 10) - 1;
	localStorage.setItem("grenade", Grenade);
	Grenade = "Grenade " + Grenade;
	if (Grenade != "Grenade 0"){
	document.getElementById("grenade").innerHTML = Grenade;
	}
	else{
		document.getElementById("grenade").innerHTML = "";
	}
	battle("grenade")
}}

function lazer2()
{
if (localStorage.getItem("fight") == 1){
	lazer = localStorage.getItem("lazer");
	lazer = parseInt(lazer, 10) - 1;
	localStorage.setItem("lazer", lazer);
	lazer = "lazer ammo " + lazer;
	if (lazer != "lazer ammo 0"){
	document.getElementById("lazer").innerHTML = lazer;
	}
	else{
		document.getElementById("lazer").innerHTML = "";
	}
	battle("lazer")
}}

function smallmob(name, health, strength)
{
	localStorage.setItem("enemyhealth", health);
	localStorage.setItem("enemystrength", strength);
	localStorage.setItem("fight", 1);

	document.getElementById("enemyname").innerHTML = name;
	document.getElementById("enemyhealth").innerHTML = "Health " + health + "/" + health;
	document.getElementById("enemystrength").innerHTML = "Strength " + strength;
	
	document.getElementById("search").disabled = true; 
	document.getElementById("progress").innerHTML = "Attack";
}
function battle(item)
{
	strength = localStorage.getItem("strength");
	enemystrength = localStorage.getItem("enemystrength");
	enemyhealth = localStorage.getItem("enemyhealth");
	health = localStorage.getItem("health");	
	
	document.getElementById("tooltip").innerHTML = "";
	
	if (item == "none"){
	enemyhealth = enemyhealth - strength;
	health = health - enemystrength;
	}
	else if (item =="potion"){
	health = parseInt(health, 10) + 10;
	if (health > 32){
		health = 32;
	}}
	else if (item =="lazer"){
		enemyhealth = enemyhealth - 10;
	}
	else if (item =="grenade"){
		enemyhealth = enemyhealth - 20;
	}
	else if (item =="trap"){
		health = health - 3;
		
	}
	
	localStorage.setItem("enemyhealth", enemyhealth);
	localStorage.setItem("health", health);	
	
	
	document.getElementById("health").innerHTML = "Health " + health + "/32";
	
	if (item != 'trap'){
	document.getElementById("enemyhealth").innerHTML = "Health " + enemyhealth + '/' + localStorage.getItem("mob");
	}
	
	if (enemyhealth <= 0){
		document.getElementById("search").disabled = false;
		localStorage.setItem("fight", 0);
		document.getElementById("progress").innerHTML = "Up floor";
		document.getElementById("enemyname").innerHTML = "";
		document.getElementById("enemyhealth").innerHTML = "";
		document.getElementById("enemystrength").innerHTML = "";
	}
	
	if (health <= 0){
		document.getElementById("important").innerHTML = "You fall to floor knowing this cursed building has managed to get the best of you. Game over. Refresh page to restart.";
		document.getElementById("search").disabled = true; 
		document.getElementById("progress").disabled = true;
		localStorage.setItem("status", 'dead');
	}
}


//function trap()
	