/* jshint esversion: 6 */
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
	money: 10
});

time.start();
game.loadPage(0);

//****************************
// Variables provisoires
//****************************
var test;
//****************************
new Notification({
	timeOut: 40,
	txt:"Salut Valentin ! Ca fait quoi d'être beta-testeur lol",
	btns: [{
		txt: "J'en suis charmé",
		script() {
			this.parent.closeNotif();
			new Notification({
				type:"success",
				timeOut: 10,
				txt:"Super !",
			});
		}
	},
	{
		txt: "Ca me dégoute",
		script() {
			this.parent.closeNotif();
			new Notification({
				type:"error",
				timeOut: 10,
				txt:"Pas cool",
			});
		}
	}]
});
new Notification({
	type: "success",
	txt: "Test : modals",
	timeOut: false,
	btns: [{
		txt: "Modal 1",
		blockOnModal: true,
		script() {
			modalList.Test1();
		}
	}, {
		txt: "Modal 2",
		script() {
			modalList.Test2();
		}
	}]
});
//ajoute chaque notif dans un array à l'indice [0],
//et multiplie cet indice par genre 5 et ajoute "vh" pour savoir la distance depuis top
