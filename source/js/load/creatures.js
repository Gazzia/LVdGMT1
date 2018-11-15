class Civil {
	constructor(params = {}) {
		this.money = {
			total: params["money"] || 0,
			add: function (nb) {
				this.total += nb;
			},
			//TODO: money.remove
			log() {
				if (this.total.toMoney().cuivre) console.log(`${this.total.toMoney().cuivre} cuivre`);
				if (this.total.toMoney().argent) console.log(`${this.total.toMoney().argent} argent`);
				if (this.total.toMoney().or) console.log(`${this.total.toMoney().or} or`);
			}
		};
		this.name = params["name"] || "Gilbert";
		this.race = params["race"] || "Angulain";
		this.inv = new Inventory(this);
		this.health = {
			showNotifs: false,
			max: params["healthmax"] || 100,
			current: params["healthmax"] || 100,
			change(_params) {
				if (_params.remove) {
					if (_params.from == "max") {
						//SI on retire du maxhealth
						if (this.max - _params.remove > 0) {
							//SI après le retrait le maxhealth serait toujours au dessus de 0
							//ALORS on effectue le retrait
							this.max -= _params.remove;
							if (this.showNotifs) {
								new Notification({
									type: 'health',
									txt: `Votre vie maximum a été réduite de ${_params.remove} pts!`,
									timeOut: 30
								});
							}
						} else {
							//SI après le retrait le maxhealth est en dessous de 0
							//ALORS maxhealth est égal à 0
							this.max = 0;
							this.die();
						}

						if (this.max < this.current) {
							//SI après le retrait le health serait supérieur au maxhealth
							//ALORS health = maxhealth
							this.current = this.max;
						}
						return this.max;

					} else if (_params.from == "current") {
						//SI on retire du health
						if (this.current - _params.remove > 0) {
							//SI après le retrait le health est toujours au dessus de 0
							//ALORS on effectue le retrait
							this.current -= _params.remove;
							if (this.showNotifs) {
								new Notification({
									type: 'health',
									txt: `Votre vie a diminué de ${_params.remove} pts!`,
									timeOut: 30
								});
							}

						} else {
							//SI après le retrait le health est en dessous de 0
							//ALORS health est égal à 0
							this.current = 0;
						}

						return this.current;
					}

					if (this.current == 0) {
						//SI après tout ça le health est égal à 0
						//ALORS le civil est mort
						if (this.showNotifs) {
							this.die();
						}
					}

				} else if (_params.add) {
					if (_params.from == "max") {
						//SI on ajoute du maxhealth
						//ALORS l'ajout se fait
						this.max += _params.add;
						if (this.showNotifs) {
							new Notification({
								type: 'health',
								txt: `Votre vie maximum a été augmentée de ${_params.add} pts!`,
								timeOut: 30
							});
						}
						return this.max;

					} else if (_params.from == "current") {
						//SI on ajoute du health

						if (this.current + _params.add >= this.max) {
							//SI après l'ajout, on serait heal complêtement voire trop
							//ALORS on heal à 100%
							this.heal();

						} else {
							//SI après l'ajout, on ne serait pas heal complêtement
							//ALORS on fait l'ajout
							this.current += _params.add;
							if (this.showNotifs) {
								new Notification({
									type: 'health',
									txt: `Votre vie a été regénérée de ${_params.add} pts!`,
									timeOut: 30
								});
							}
						}

						return this.current;
					}
				}
			},
			heal() {
				this.current = this.max;
				if (this.showNotifs) {
					new Notification({
						type: 'health',
						txt: 'Votre vie a été complêtement regénérée !',
						timeOut: 30
					});
				}
			},
			die(){
				if(this.showNotifs){
					new Notification({
						type: 'error',
						txt: `Vous êtes mort ! (Enfin théoriquement)`,
						timeOut: false
					});
				}
			}
		};
	}
}

class NPC extends Civil {
	constructor(params = {}) {
		super(params);
		NPC.instances.push(this);
	}
}
NPC.instances = [];

class Player extends Civil {
	constructor(params = {}) {
		super(params);
		this.money.add = function (nb) {
			this.total += nb;
			new Notification({
				type: 'gold',
				txt: `Votre richesse a augmenté de ${nb.money_phrase()}!`,
				timeOut: 15
			});
		};
		this.health.showNotifs = true;
	}

}