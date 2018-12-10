var modalList = {
	devModal(color) {
		modal.load({
			title: "Ceci est un titre",
			txt: "Modifications :",
			color: color,
			buttons: [{
					title: "<i>color</i> - faded",
					script() {
						modalList.devModal("faded");
					}
				},
				{
					title: "<i>color</i> - aqua",
					script() {
						modalList.devModal("aqua");
					}
				},
				{
					title: "<i>color</i> - wine",
					script() {
						modalList.devModal("wine");
					}
				},
				{
					title: "<i>color</i> - salmon",
					script() {
						modalList.devModal("salmon");
					}
				},
				{
					title: "<i>color</i> - royal",
					script() {
						modalList.devModal("royal");
					}
				},
				{
					title: "<i>color</i> - normal",
					script() {
						modalList.devModal("normal");
					}
				},
				{
					title: "QUITTER",
					script() {
						modal.close();
					}
				},
			],
		});
	},
	Soufflant_Embranchement_RegarderBois() {
		modal.load({
			title: "Bois",
			txt: `La présence de ce petit bois est opportune : il fait très chaud dans la plaine, qui est d'ordinaire plutôt dépourvue d'arbres. Les premiers arbres se situent à une minute de marche, et leur ombre vous fera sûrement le plus grand bien.
			{img:lol}
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.In interdum lectus nec turpis sagittis faucibus.Integer molestie feugiat neque id finibus.Quisque ac velit ut purus hendrerit aliquet.Pellentesque id nunc imperdiet, auctor ante sodales, tristique turpis.Pellentesque facilisis pretium elit sed rutrum.Phasellus eget accumsan quam.Aenean tincidunt interdum interdum.Morbi sed lacus semper, venenatis lorem a, ornare ex.Vivamus congue posuere maximus.Proin ac tincidunt nulla.Nam varius fringilla neque at semper.Vestibulum eu sagittis ipsum, sed varius mi.Proin non placerat elit.Sed pharetra felis a eros suscipit, nec lacinia sapien porttitor.Donec non risus scelerisque, auctor dolor id, egestas tellus.
			`,
			color: 'royal',
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
				buttons: [{
						title: "Prendre",
						script() {
							if (player.inv.add('Branche') == true) {
								// Events.tookbaton = true;
								//TODO: uncomment
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
				buttons: [{
					title: "Partir",
					script() {
						modal.close();
					}
				}, ],
			});
		}
	},
	Soufflant_Riviere_RegarderEau() {
		modal.load({
			title: "Dans l'onde fraîche",
			txt: `Le petit bras d'eau est plein de vie -et plein d'eau ! L'endroit est très tranquille et serait propice à une petite halte.`, //TODO: image eau
			color: 'wine',
			buttons: [{
					title: "Faire une petite halte",
					script() {
						modal.close();
						game.ui.hide();
						Events.HaltsAtRivière++;
						delay(function () {
							time.ellipse(20);
							modalList.Soufflant_Riviere_HalteFinie();
						}, 20000);
					}
				},
				{
					title: "Pas le temps !",
					script() {
						modal.close();
					}
				},
			],
		});
	},

	Soufflant_Riviere_HalteFinie() {
		modal.load({
			title: "Super",
			txt: `Cette petite halte est vraiment très agréable. Repartons maintenant.`, //TODO: image eau
			color: 'wine',
			buttons: [{
					title: "Non",
					script() {
						modal.close();
						game.ui.hide();
						if (++Events.HaltsAtRivière === 3) {
							new Notification({
								type: "magic",
								timeOut: '30',
								txt: `Ce petit moment de répit vous a fait du bien, votre vie a été régénérée.`
							});
						}
						delay(function () {
							time.ellipse(20);
							modalList.Soufflant_Riviere_HalteFinie();
						}, 14000);
					}
				},
				{
					title: "Partir",
					script() {
						Events.HaltsAtRivière = 0;
						modal.close();
						game.ui.show();
					}
				},
			],
		});
	},
	Soufflant_Riviere_LookRive() {
		modal.load({
			title: "De l'autre côté des flots",
			txt: `Sur l'autre rive, vous apercevez un peu plus en aval ce qui semble être une bourse de pièces au pied d'un arbre..`, //TODO: image rive
			buttons: [{
				title: "Traverser",
				script() {
					chance.init({
						type: "difficulté",
						diff: .35,
						consq: {
							EcCr: {
								txt: "En essayant de traverser le bras d'eau, votre pied glisse et vous tombez la tête la première sur un rocher.<br>A moitié assommé{f:e} et le front en sang, vous arrivez sur l'autre rive pour découvrir une bourse vide.",
								script: function () {
									player.health.change({
										from: "current",
										remove: 20
									});
									time.ellipse(20);
								}
							},
							Ec: {
								txt: "Vous traversez le bras d'eau sans encombre, mais en arrivant sur l'autre rive trempé{f:e} jusqu'aux os, vous découvrez la bourse complêtement vide.",
								script: function () {
									time.ellipse(15);
								}
							},
							Ré: {
								txt: "Vous traversez le bras d'eau sans encombre, et en arrivant sur l'autre rive tout{f:e} trempé{f:e}, vous êtes récompensé{f:e} en trouvant dans la bourse quelques lunes d'argent et de cuivre.",
								script: function () {
									player.money.add(515);
									time.ellipse(10);
								}
							},
							RéCr: {
								txt: "Vous traversez le bras d'eau aisément, et trouvez dans la bourse, sur l'autre rive, une jolie somme en lunes d'argent et de cuivre !",
								script: function () {
									player.money.add(1504);
									time.ellipse(7);
								}
							},
						}
					});
					Events.rivièreTraversée = true;
					modal.close({
						keepOverlay: true
					});
				}
			}, {
				title: "Partir",
				script() {
					modal.close();
				}
			}, ],
		});
	},
	Soufflant_Riviere_LookRive_Traversée() {
		modal.load({
			title: "De l'autre côté des flots",
			txt: `Vous venez de traverser les eaux à vos risques et périls, et vous ne voulez plus recommencer. D'ailleurs, il n'y aurait rien dans la bourse en face.`, //TODO: image fringues
			buttons: [{
				title: "Partir",
				script() {
					modal.close();
				}
			}, ],
		});
	},
	Soufflant_Riviere_LookInsectes() {
		modal.load({
			title: "Un essaim de lumière",
			txt: `Les bégariannes sont des insectes volants très étranges, capables de produire autour d'eux, la nuit, un halo de jour large comme la main. Leurs proches cousins, les négariannes, produisent l'effet inverse : on les repère facilement le jour, car elles émettent un halo de nuit autour d'elles.`, //TODO: image bégariannes
			buttons: [{
				title: "Ok",
				script() {
					modal.close();
				}
			}, {
				title: "Essayer d'en attraper",
				script() {
					modal.close();
				}
			}, ],
		});
	}
};