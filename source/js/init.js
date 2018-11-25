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
//TODO: "Lancez le d20" clignotant