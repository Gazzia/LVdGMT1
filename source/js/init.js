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
var pl_name = FOLDER_pl.add(player, 'name').name("Nom");
var pl_genre = FOLDER_pl.add(player, 'genre', {
	'Homme': 'm',
	'Femme': 'f'
}).name("Genre").onFinishChange(function () {
	game.refreshPage();
});
var pl_money = FOLDER_pl.add(player.money, 'total').name("Argent").min(0).step(1).listen();
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
}).name("Période").onFinishChange(function () {
	time.refreshPeriod();
	game.refreshPage();
	time.refreshClocks();
});
var time_days = FOLDER_time.add(time, 'daysPlayed').name("Jours passés").min(0).step(1).listen().onFinishChange(function () {
	game.refreshPage();
});
var FOLDER_samples = gui.addFolder('GUI samples');
FOLDER_samples.add(devEvents, 'modal_sample');
FOLDER_samples.add(devEvents, 'notif_sample');
var FOLDER_events = gui.addFolder('Events trackers');
var events_helper = FOLDER_events.addFolder('Messages d\'aide');
var events_player = FOLDER_events.addFolder('Player');
for (var ev in Events) {
	if (Events.hasOwnProperty(ev)) {
		if (/(helper_)/g.test(ev))
			events_helper.add(Events, ev).name(ev.replace(/(helper_)/g, ''));
		else if (/(player_)/g.test(ev))
			events_player.add(Events, ev).name(ev.replace(/(player_)/g, ''));
		else
			FOLDER_events.add(Events, ev);
	}
}
var FOLDER_pageList = gui.addFolder('Go to page..');
var Région_Soufflant = FOLDER_pageList.addFolder('Soufflant');
for (var pgID in pageList) {
	var pgName = pageList[pgID].locale.identifier;
	if (pageList[pgID].locale.interior) pgName = pageList[pgID].locale.interior + ">" + pgName;
	if (pageList[pgID].locale.city) pgName = pageList[pgID].locale.city + ">" + pgName;

	if (pageList[pgID].locale.région == 'Soufflant') {
		Région_Soufflant.add({
			'loadPage': game.loadPage.bind(this, pgID)
		}, 'loadPage').name(pgName);
	} else {
		FOLDER_pageList.add({
			'loadPage': game.loadPage.bind(this, pgID)
		}, 'loadPage').name(pgName);
	}
}
var devContainer = document.getElementById('devMenu');
devContainer.appendChild(gui.domElement);


$(document).on("click", ".playerMenu", function (evt) {
	var trgt = $(evt.target || evt.srcElement);
	if (trgt.is(".playerMenu") || trgt.is(".head") || trgt.is(".head *")) playerMenu.toggle();
});