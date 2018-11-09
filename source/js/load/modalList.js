var modalList = {
	Test1() {
		modal.load({
			title: "Modal de test 1",
			txt: `Voili voilouu, blablabla du lore`,
			color: 0,
			img: 0,
			buttons: [{
				title: "Fermer",
				script() {
					modal.close();
				}
			}, ],
		});
	},
	Test2() {
		modal.load({
			title: "Modal de test 1",
			txt: `Encore du lore comme on l'aime blabla`,
			color: "wine",
			img: "merchant",
			buttons: [{
				title: "Fermer",
				script() {
					modal.close();
				}
			}, ],
		});
	},
	Soufflant_Embranchement_RegarderBois() {
		modal.load({
			title: "Bois",
			txt: `La présence de ce petit bois est opportune : il fait très chaud dans la plaine, qui est d'ordinaire plutôt dépourvue d'arbres. Les premiers arbres se situent à une minute de marche, et leur ombre vous fera sûrement le plus grand bien.`,
			color: 0,
			img: 0,
			buttons: [{
				title: "Ok",
				script() {
					modal.close();
				}
			}, ],
		});
	},
	Soufflant_Embranchement_RegarderCabane() {
		var texte;
		switch (time.période) {
			case "nuit":
				texte = "Vous ne pouvez pas distinguer clairement l'édifice d'aussi loin et dans le noir, mieux vaut s'approcher.";
				break;
			default:
				texte = "L'édifice s'élève sur une colline voisine, mais vous ne distinguez pas grand chose d'aussi loin.";
		}
		modal.load({
			title: "Cabane",
			txt: texte,
			color: 0,
			img: 0,
			buttons: [{
				title: "Ok",
				script() {
					modal.close();
				}
			}, ],
		});
	},
	Soufflant_Bois_RegarderSol() {
		if (Events.tookbaton == false) {
			modal.load({
				title: "Sol",
				txt: `Vous apercevez à terre une belle branche qui pourrait vous servir d'arme rudimentaire.<br>
				Voulez-vous la prendre ?`,
				color: 0,
				img: 0,
				buttons: [{
						title: "Prendre",
						script() {
							if(player.inv.add('Branche') == true){
								// Events.tookbaton = true;
								game.page.refBackground();
								modal.close();
							} else {
								modal.close();
							}
						}
					},
					{
						title: "Partir",
						script() {
							modal.close();
						}
					},
				],
			});
		} else {
			modal.load({
				title: "Sol",
				txt: `Le sol est jonché de vieilles brindilles et de feuilles.`,
				color: 0,
				img: 0,
				buttons: [
					{
						title: "Partir",
						script() {
							modal.close();
						}
					},
				],
			});
		}
	},
};
