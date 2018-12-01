function round(value, round) {
	var multiplier = Math.pow(10, round || 0);
	return Math.round(value * multiplier) / multiplier;
}
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);


var player = new Player();
var bob = new NPC({
	name: "Bob",
	race: "Human",
	genre: "m",
	money: 10
});

time.start();
game.loadPage(0);

//****************************
// Provisoire :
//****************************

// Spell pour activer le devMenu :
var spell_dev = new Spell("dev", function () {
	devMenu.toggle();
});

//init du devMenu :
var gui = new dat.GUI({
	autoPlace: false
});
var FOLDER_pl = gui.addFolder('Player');
var pl_name = FOLDER_pl.add(player, 'name');
var pl_genre = FOLDER_pl.add(player, 'genre', {
	'Homme': 'm',
	'Femme': 'f'
}).onFinishChange(function () {
	game.refreshPage();
});
var pl_money = FOLDER_pl.add(player.money, 'total').min(0).step(1).listen();
var pl_health = FOLDER_pl.addFolder('Health');
var pl_hp = pl_health.add(player.health, 'current', 0, player.health.max).step(1).listen();
var pl_hpmax = pl_health.add(player.health, 'max').min(0).step(1).listen().onFinishChange(function () {
	pl_hp.max(player.health.max);
});
var FOLDER_time = gui.addFolder('Time');
var time_hours = FOLDER_time.add(time, 'hours', {
	'Aube': 6,
	'Journée': 10,
	'Crépuscule': 19,
	'Nuit': 22
}).onFinishChange(function () {
	time.refreshPeriod();
	game.refreshPage();
	time.refreshClocks();
});
var time_days = FOLDER_time.add(time, 'daysPlayed').min(0).step(1).listen().onFinishChange(function () {
	game.refreshPage();
});
var FOLDER_samples = gui.addFolder('GUI samples');
FOLDER_samples.add(devEvents, 'modal_sample');
FOLDER_samples.add(devEvents, 'notif_sample');
var FOLDER_events = gui.addFolder('Events');
var events_ui = FOLDER_events.addFolder('UI');
var events_player = FOLDER_events.addFolder('Player');
for (var ev in Events) {
	if (Events.hasOwnProperty(ev)) {
		if (/(helper_)/g.test(ev))
			events_ui.add(Events, ev);
		else if (/(player_)/g.test(ev))
			events_player.add(Events, ev);
		else
			FOLDER_events.add(Events, ev);
	}
}

var devContainer = document.getElementById('devMenu');
devContainer.appendChild(gui.domElement);