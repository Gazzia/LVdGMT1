class Civil {
	constructor(params = {}) {
		this.money = {
			_total: params.money || 0,
			get total() {
				return this._total;
			},
			set total(nb) {
				this._total = nb;
				this.cuivre = this.total % 100;
				this.argent = Math.floor(this.total / 100) % 100;
				this.or = Math.floor(this.total / 10000);
			},
			cuivre: this._total % 100,
			argent: Math.floor(this._total / 100) % 100,
			or: Math.floor(this._total / 10000),
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
				if (this._current !== 0) {
					this._current = value;
					this.checkNewValue("current");
				}
			},
			get current() {
				return this._current;
			},
			add(nb) {
				console.log(this.ownerType);

				if (this.current != 0) {
					if (this.current + nb >= this.max && this.current != this.max) {
						this.heal();

					} else if (this.current == this.max) {
						if (this.ownerType == "Player") {
							new Notification({
								type: 'health',
								txt: `Votre vie est déjà au maximum!`,
								timeOut: 30
							});
						}
					} else {
						this.current += nb;
						if (this.ownerType == "Player") {
							new Notification({
								type: 'health',
								txt: `Votre vie a été regénérée de ${nb} pts!`,
								timeOut: 30
							});
						}
					}

				}
			},
			addMax(nb) {
				this.max += nb;
				if (this.ownerType == "Player") {
					new Notification({
						type: 'health',
						txt: `Votre vie maximum a été augmentée de ${nb} pts!`,
						timeOut: 30
					});
				}
				return this.max;
			},
			remove(nb) {
				this._current -= nb;
				if (this.ownerType == "Player") {
					if (this.current > 0) {
						new Notification({
							type: 'health',
							txt: `Votre vie a diminué de ${nb} pts!`,
							timeOut: 30
						});
					}
				}
			},
			removeMax(nb) {
				this.max -= nb;
				if (this.ownerType == "Player") {
					if (this.max > 0) {
						new Notification({
							type: 'health',
							txt: `Votre vie maximum a été réduite de ${nb} pts!`,
							timeOut: 30
						});
					}
				}
				return this.max;
			},
			heal() {
				this.current = this.max;
				if (this.ownerType == "Player") {
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
		this.health.ownerType = this.constructor.name;
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
	}

}