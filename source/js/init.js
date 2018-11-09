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

//****************************

new Notification();
new Notification({
	type: "success",
	timeOut: false,
	btns: [{
		txt: "Modal",
		blockOnModal: true,
		script() {
			modalList.Soufflant_Embranchement_RegarderCabane();
		}
	}, {
		txt: "Modal2",
		script() {
			modalList.Soufflant_Embranchement_RegarderBois();
		}
	}]
});
//ajoute chaque notif dans un array à l'indice [0],
//et multiplie cet indice par genre 5 et ajoute "vh" pour savoir la distance depuis top
