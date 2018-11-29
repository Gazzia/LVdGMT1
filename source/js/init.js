function round(value, round) {
	var multiplier = Math.pow(10, round || 0);
	return Math.round(value * multiplier) / multiplier;
}
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);

function isOverflown(element) {
	return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

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
// Variables provisoires
//****************************

//****************************

$('nav.gameMenu').on('click', function () {
	modalList.devModal();
});

var files = {
	paramsToSave: {

		// GAME ------------------------------
		get game_pageID() {
			return game.pageID;
		},
		set game_pageID(value) {
			game.pageID = value;
		},

		get game_page_sceneID() {
			return game.page.sceneID;
		},
		set game_page_sceneID(value) {
			game.page.sceneID = value;
		},

		// EVENTS ------------------------------
		get events() {
			return Events;
		},
		set events(value) {
			Events = value;
		},

		// TIME ------------------------------
		get time_hours() {
			return time.hours;
		},
		set time_hours(value) {
			time.hours = value;
		},

		get time_minutes() {
			return time.minutes;
		},
		set time_minutes(value) {
			time.minutes = value;
		},

		get time_daysPlayed() {
			return time.daysPlayed;
		},
		set time_daysPlayed(value) {
			time.daysPlayed = value;
		},

		// PLAYER  ------------------------------

		get player_name() {
			return player.name;
		},
		set player_name(value) {
			player.name = value;
		},

		get player_genre() {
			return player.genre;
		},
		set player_genre(value) {
			player.genre = value;
		},

		get player_money() {
			return player.money.total;
		},
		set player_money(value) {
			player.money.total = value;
		},

		get player_currentHP() {
			return player.health.current;
		},
		set player_currentHP(value) {
			player.health.current = value;
		},

		get player_maxHP() {
			return player.health.max;
		},
		set player_maxHP(value) {
			player.health.max = value;
		},

		get player_inv_itemList() {
			return player.inv._itemList;
		},
		set player_inv_itemList(value) {
			player.inv._itemList = value;
		},
	},
	save() {
		for (param in this.paramsToSave) {
			localStorage[`save_${param}`] = JSON.stringify(this.paramsToSave[param]);
		}
		console.info("Jeu sauvegardé !");
	},
	load() {
		modal.close();
		closeAllNotifications();
		for (param in this.paramsToSave) {
			this.paramsToSave[param] = JSON.parse(localStorage[`save_${param}`]);
		}
		time.refreshPeriod();
		time.refreshClocks();
		game.loadPage(game.pageID);
		console.info("Jeu chargé !");
	}
};