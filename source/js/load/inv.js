class Inventory {
	constructor(owner) {
		this.owner = owner;
		this.maxWeight = 9;
		this._itemList = [];
		this.sum = function (items, prop) {
			return items.reduce(function (a, b) {
				return a + b[prop];
			}, 0);
		};

	}
	get list() {
		return this._itemList.sort();
	}

	log() {
		console.log('%cInventaire de ' + this.owner.name + " (" + this.owner.constructor.name + ")", 'font-weight: bold; color:blue;');
		console.table(this._itemList);
	}

	get totalWeight() {
		return this.sum(this._itemList, 'poids');
	}

	hasSpaceFor(item) {
		return (this.totalWeight + item["poids"]) <= this.maxWeight;
	}

	find(name) {
		var result = this._itemList.find(obj => {
			return obj["name"] === name;
		});
		return result;
	}

	add(name) {
		var obj = itemList.find(name);
		if (obj && this.hasSpaceFor(obj)) {
			if (this.owner.constructor.name == "Player") {
				var addTxt, addBtns;
				switch (obj.type) {
					case "Arme":
						addTxt = "Nouvelle arme";
						addBtns = [{
							txt: "Equipper",
							blockOnModal: true,
							script() {
								// TODO: INV - Equipement
							}
						}, {
							txt: "Inventaire",
							blockOnModal: true,
							script() {
								// TODO: UI - inventaire
							}
						}];
						break;
					default:
						addTxt = "Nouvel objet";
						addBtns = false;
				}
				new Notification({
					type: "inv",
					timeOut: false,
					btns: addBtns,
					txt: `${addTxt} : ${name} !`
				});
			}
			this._itemList.push(obj);
			return true;
		} else if (!obj) {
			console.error(name + ": objet inexistant");
			return false;
		} else {
			if (this.owner.constructor.name == "Player") {
				new Notification({
					type: "error",
					timeOut: false,
					txt: `Vous n'avez pas assez de place dans votre inventaire pour : ${name} !`
				});
			}
			console.warn(name + ": pas assez de place dans l'inventaire de " + this.owner.name + " (" + this.owner.constructor.name + ")");
			return false;
		}
	}

	remove(name) {
		var obj = itemList.find(name);
		var obj_inInv = this.find(name);
		if (obj && obj_inInv) {
			this._itemList.splice(this._itemList.indexOf(obj), 1);
		} else if (!obj) {
			console.error(name + ": objet inexistant");
		} else {
			console.warn(name + ": il n'y en a pas dans l'inventaire de " + this.owner.name + " (" + this.owner.constructor.name + ")");
		}
	}
	give(ent, item) {
		// TODO: INV - give
		// si:
		//   -objet existe
		//   -objet existe dans l'inventaire
		//   -entité existe
		//   -entité a assez de place dans son inventaire (ent.inv.hasSpaceFor(obj))
		// alors:
		//   -l'objet est supprimé de notre inventaire (du moins un exemplaire)
		//   -l'objet est ajouté dans son inventaire
	}
}