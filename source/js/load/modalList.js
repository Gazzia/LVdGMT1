var modalList = {
	colorTestBtns: [{
			title: "faded",
			script() {
				modalList.colorTest(this.title);
			}
		},
		{
			title: "alert",
			script() {
				modalList.colorTest(this.title);
			}
		},
		{
			title: "wine",
			script() {
				modalList.colorTest(this.title);
			}
		},
		{
			title: "salmon",
			script() {
				modalList.colorTest(this.title);
			}
		},
		{
			title: "normal",
			script() {
				modalList.colorTest(this.title);
			}
		},
		{
			title: "Quitter",
			script() {
				modal.close();
			}
		},
	],
	colorTest(color) {
		modal.load({
			color: color,
			buttons: modalList.colorTestBtns,
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
							if (player.inv.add('Branche') == true) {
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
			txt: `Le petit bras d'eau est plein de vie -et plein d'eau ! L'endroit est très tranquille et serait propice à une petite halte.`,
			color: 'wine',
			img: 'rivewater',
			buttons: [{
					title: "Faire une petite halte",
					script() {
						modal.close();
						game.ui.hide();
						Events.HaltsAtRivière++;
						delay(function () {
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
			txt: `Cette petite halte est vraiment très agréable. Repartons maintenant.`,
			color: 'wine',
			img: 'rivewater',
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
			txt: `Sur l'autre rive, vous apercevez un peu plus en aval ce qui semble être une bourse de pièces au pied d'un arbre..`,
			img: 'rivewater', //TODO: IMG - tas de fringues
			buttons: [{
				title: "Traverser",
				script() {
					chance.init({
						type: "difficulté",
						diff: .75,
						consq: {
							EcCr: {
								txt: "En essayant de traverser le bras d'eau, votre pied glisse et vous tombez la tête la première sur un rocher.<br>A moitié assommé et le front en sang, vous arrivez sur l'autre rive pour découvrir une bourse d'or vide.",
								script() {
									player.health.change({
										from: "current",
										remove: 20
									});
								}
							},
							Ec: {
								txt: "Vous traversez le bras d'eau sans encombre, mais c'est en arrivant sur l'autre rive tout trempé que vous découvrez la bourse d'or complêtement vide.",
								script() {

								}
							},
							Ré: {
								txt: "Vous traversez le bras d'eau sans encombre, et en arrivant sur l'autre rive tout trempé, vous êtes récompensé en trouvant dans la bourse quelques pièces d'argent et de cuivre.",
								script() {
									player.money.add(515);
								}
							},
							RéCr: {
								txt: "Vous traversez le bras d'eau aisément, et trouvez dans la bourse, sur l'autre rive, une jolie somme en pièces d'argent et de cuivre !",
								script() {
									player.money.add(1504);
								}
							},
						}
					});
					Events.rivièreTraversée = true;
					modal.close();
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
			txt: `Vous venez de traverser les eaux à vos risques et périls, et vous ne voulez plus recommencer. D'ailleurs, il n'y aurait rien dans la bourse en face.`,
			img: 'rivewater', //TODO: IMG - tas de fringues
			buttons: [{
				title: "Partir",
				script() {
					modal.close();
				}
			}, ],
		});
	},
};