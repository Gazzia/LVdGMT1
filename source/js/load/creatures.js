class Civil {
	constructor(params = {}) {
		this.money = {
			total: params.money || 0,
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
		this.name = params.name || "Gilbert";
		this.race = params.race || "Angulain";
		this.inv = new Inventory(this);
		this.genre = params.genre || "m";
		this.health = {
			showNotifs: false,
			_max: params.healthmax || 100,
			_current: params.healthmax || 100,
			checkNewValue(type) {
				if (this[type] < 0) this[type] = 0;
				if (this[type] == 0) this.die();
				if (this.max < this.current) this.current = this.max;
			},
			set max(value) {
				if (this._max !== 0) {
					this._max = value;
					this.checkNewValue("max");
				}
			},
			get max() {
				return this._max;
			},
			set current(value) {
				if (this._current !== 0){
					this._current = value;
					this.checkNewValue("current");
				}
			},
			get current() {
				return this._current;
			},
			change(_params) {
				if (_params.remove) {
					if (_params.from == "max") {
						this.max -= _params.remove;
						this.checkNewValue("max");
						if (this.showNotifs) {
							if (this.max > 0) {
								new Notification({
									type: 'health',
									txt: `Votre vie maximum a été réduite de ${_params.remove} pts!`,
									timeOut: 30
								});
							}
						}
						return this.max;
					} else if (_params.from == "current") {
						this._current -= _params.remove;
						this.checkNewValue("current");
						if (this.showNotifs) {
							if (this.current > 0) {
								new Notification({
									type: 'health',
									txt: `Votre vie a diminué de ${_params.remove} pts!`,
									timeOut: 30
								});
							}
						}
					}
				} else if (_params.add) {
					if (_params.from == "max") {
						this.checkNewValue("max");
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
						if (this.current != 0) {
							if (this.current + _params.add >= this.max) {
								//SI après l'ajout, on serait heal complêtement voire trop
								//ALORS on heal à 100%
								this.heal();

							} else {
								//SI après l'ajout, on ne serait pas heal complêtement
								//ALORS on fait l'ajout
								this.current += _params.add;
								this.checkNewValue("current");
								if (this.showNotifs) {
									new Notification({
										type: 'health',
										txt: `Votre vie a été regénérée de ${_params.add} pts!`,
										timeOut: 30
									});
								}
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
			die() {
				if (!Events.player_isDead) {
					Events.player_isDead = true;
					new Notification({
						type: 'error',
						txt: `Vous êtes mort ! (Enfin théoriquement)`,
						timeOut: false,
						closable: false
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