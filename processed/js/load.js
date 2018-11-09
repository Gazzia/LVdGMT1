class Civil {
	constructor(params = {}) {
		this.money = {
			total: params["money"] || 0,
      log(){
        var cuivre = this.total%100;
        var argent = Math.floor(this.total/100)%100;
        var or = Math.floor(this.total/10000);
        if(cuivre) console.log(`${cuivre} cuivre`);
        if(argent) console.log(`${argent} argent`);
        if(or) console.log(`${or} or`);
      }
		};
		this.name = params["name"] || "Gilbert";
		this.race = params["race"] || "Angulain";
		this.inv = new Inventory(this);

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

	}

}

var Events = {
  //UI
  helper_btnBlockOnModal:false,
  //STORY
  tookbaton:false,
};

var extrasDB = {
  time:{
    long_soufflant(){
      if ((time.daysPlayed == 0 && time.period == "nuit") || (time.daysPlayed == 1 && time.hours <= 4)) {
        //IF c'est la première nuit :
        extraBlock("Le soleil est déjà couché, et vous ne voyez plus grand chose.. peut-être serait-il temps de se hâter vers Merryvale ?", 'time');
      }
      if (time.daysPlayed == 1 && time.period != "nuit") {
        //IF c'est le deuxième jour mais pas la nuit:
        extraBlock("Cela fait déjà un jour entier que vous êtes dans la plaine.. Ne serait-il pas une bonne idée d'essayer d'atteindre Merryvale ?", 'time');
      }
      if ((time.daysPlayed == 1 && time.hours >= 21) || time.daysPlayed > 1) {
        //IF c'est la première nuit :
        extraBlock("Cela fait beaucoup trop longtemps que vous êtes ici. Vous n'êtes plus derrière l'écran ? Ouu vous avez eu un problème ? Je dois appeler les urgences ?", 'time');
      }
    }
  },
};

var game = {
  pageID:0,
  page:{},
  scene:{},
  loadPage: function(pageID) {
    game.pageID = pageID;
    game.page = new Page(pageList[pageID]);
  	$("main .textbox.title").html(game.page.title);
  	$("main .textbox.scene").html(game.page.fluff);
    $("main .extrasContainer").html('');

  	game.scene = game.page.scenes[game.page.sceneID - 1];
  	$("main .textbox.story").html(game.scene.story());
    game.scene.extras();
    game.page.refBackground();
  },
  refreshPage: function() {
  	$("main .textbox.title").html(game.page.title);
  	$("main .textbox.scene").html(game.page.fluff);
    $("main .extrasContainer").html('');

  	game.scene = game.page.scenes[game.page.sceneID - 1];
  	$("main .textbox.story").html(game.scene.story());
    game.scene.extras();
    game.page.refBackground();
  },
};

class Inventory {
	constructor(owner) {
		this.owner = owner;
		this.maxWeight = 9;
		this._itemList = [];
		this.sum = function(items, prop) {
			return items.reduce(function(a, b) {
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
            addBtns=[{
          		txt: "Equipper",
							blockOnModal: true,
          		script() {
            		// TODO: EQUIPEMENT
          		}
          	},{
          		txt: "Inventaire",
							blockOnModal: true,
          		script() {
            		// TODO: OUVRIR INVENTAIRE
          		}
          	}];
						break;
					default:
						addTxt = "Nouvel objet";
            addBtns = false;
				}
				new Notification({
					type: "inv",
					timeOut:false,
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
    // TODO:
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

const itemList={
  find(name) {
    var result = itemList.list.find(obj => {
      return obj["name"] === name;
    });
    return result;
  },
  type(type) {
    var result = itemList.list.filter(obj => {
      return obj["type"] === type;
    });
    return result;
  },
  log: {
    ol() {
      var types = ["Arme", "Divers", "Bouffe"];
      for (type of types) {
        console.log('%c' + type, 'font-weight: bold;');
        console.table(itemList.type(type));
      }
    },
    ul() {
      console.table(itemList.list);
    }
  },
  list: [
    {
      "name": "Branche",
      "type": "Arme",
      "poids": 5
    },
    {
      "name": "Epée",
      "type": "Arme",
      "poids": 7
    }
  ],
};

var modal = {
	isOpen: false,
	buttons:[],
	load(params = {}) {
		this.isOpen ? this.switch(params) : this.fadeIn(params);
	},
	fadeIn(params) {
		this.isOpen = true;
		modal.apply(params);
		$(".overlay").css({
			animation: "fadeIn .5s ease forwards",
			display: "block"
		});
		$(".modal").css({
			animation: "open-modal .7s cubic-bezier(.16, .81, .32, 1) forwards",
			display: "block"
		});
		if (this.img) {
			delay(function() {
				$(".modal").css("animation", "adapt-modal 0.4s ease forwards");
			}, 700);
		}
	},
	switch (params) {
		$(".modal").css("animation", "switch-modal-hide 0.4s ease-in forwards");
		delay(function() {
			modal.apply(params);
			$(".modal").css("animation", "switch-modal-show 0.4s ease-out forwards");
		}, 400);
	},
	close() {
		this.isOpen = false;
		$(".overlay").css("animation", "fadeOut .5s ease forwards");
		$(".modal").css("animation", "close-modal .5s ease");
		delay(function() {
			$(".modal, .overlay").css("display", "none");
		}, 500);
	},
	apply(params) {
		this.img = params["img"] || 0;
		this.title = params["title"] || "Pas de titre";
		this.txt = params["txt"] || "Pas de texte";
		this.btnColor = 0;
		switch (params["color"]) {
			case "salmon":
				this.color = "rgb(237, 159, 146)";
        this.btnColor= "rgb(241, 136, 118)";
				break;
			case "wine":
				this.color = "#87475b";
				break;
			case "faded":
				this.color = "#6d6875";
				break;
			case "alert":
				this.color = "#600c1c";
				break;
			default:
				this.color = "rgb(100, 86, 83)";
				this.btnColor = "rgb(148, 117, 111)";
		}
		if (!this.btnColor) this.btnColor = this.color;
		this.img && this.img != "0" ?
			$(".modal").addClass("withImage") :
			$(".modal").removeClass("withImage");
		$(".modal header")
			.html(this.title)
			.css("background-color", this.color);
		$(".modal main .txt").html(this.txt);
		$(".modal .img").css({
			"background-image": `url('../assets/img/modal/${this.img}.png')`,
			"border-top-color": this.color
		});
		$(".modal main .btns").html("");
		if (params["buttons"])
		modal.buttons = params["buttons"];
			for (btn in modal.buttons) {
				$(".modal main .btns").append(
					`<div class='btn' onclick='modal.buttons[${btn}].script()'>${modal.buttons[btn].title}</div>`
				);
			}
		$(".modal main .btns .btn").css("background-color", this.btnColor);
	},
};

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

function Notification(params = {}) {
	this.type = params.type || "normal";
	switch (this.type) {
		case "error":
			var styleGradient = { from: "#d44d2b", to: "#e92e2e" };
			var styleColor = "white";
			var defaultText = "Erreur";
			var styleIcon = "notif-error.svg";
			break;
		case "success":
			var styleGradient = { from: "#5acf9c", to: "#43bc4c" };
			var styleColor = "white";
			var defaultText = "Succès";
			var styleIcon = false;
			break;
		case "magic":
			var styleGradient = { from: "rgb(142, 115, 236)", to: "rgb(182, 93, 80)" };
			var styleColor = "white";
			var defaultText = "Nouvel objet!";
			var styleIcon = "notif-magic.svg";
			break;
		case "inv":
			var styleGradient = { from: "rgb(236, 152, 115)", to: "rgb(182, 93, 80)" };
			var styleColor = "white";
			var defaultText = "Nouvel objet!";
			var styleIcon = "notif-inv.svg";
			break;
		case "gold":
			var styleGradient = { from: "rgb(212, 204, 72)", to: "rgb(182, 93, 80)" };
			var styleColor = "white";
			var defaultText = "Nouvel objet!";
			var styleIcon = "coin.svg";
			break;
		default:
			var styleGradient = { from: "#5acecf", to: "#4350bc" };
			var styleColor = "white";
			var defaultText = "Information";
			var styleIcon = "notif-info.svg";
	}

	this.txt = params.txt || defaultText;
	this.btns = params.btns || 0;
	(!params.closable && params.closable !== false)?
		this.closable = true: this.closable = params.closable;
	(!params.timeOut && params.timeOut != false) ? this.timeOut = 5: this.timeOut = params.timeOut;
	this.element = $(`<div class="notif"><div class="icon"></div>${this.txt}<div class="btns"></div></div>`);

	$(".notifications").prepend(this.element);
	this.element.css({
		backgroundImage: `linear-gradient(162deg, ${styleGradient.from}, ${styleGradient.to})`,
		color: styleColor,
		animation: "fadeInNotif 0.3s ease-in forwards"
	});

	if (styleIcon){
		this.element.children('.icon').css('background-image', `url("../assets/img/ui/${styleIcon}")`);
		this.element.css('padding-left', '2vw');
	}

	if (this.closable) {
		$closeBtn = $('<div class="close">');
		this.element.append($closeBtn).css('padding-right', '2vw');
		$closeBtn.on('click', function() {
			this.closeNotif();
		}.bind(this));
	}

	if (this.btns) {
		for (btn of this.btns) {
			btn.element = $('<div class="btn">');
			btn.parent = this;
			this.element.children('.btns').append(
				btn.element.text(btn.txt).on('click',
					function () {
						if (!this.blockOnModal || (this.blockOnModal && !modal.isOpen)) {
							this.script().bind(this);
						} else {
							this.element.css('background-color', "#b24e4e");
							delay(function() {
								this.element.css('background-color', "");
								delay(function() {
									if (!Events.helper_btnBlockOnModal) {
										new Notification({
											txt: "Lorsqu'un bouton de notification clignote rouge une fois cliqué, c'est que sa fonction est interdite dans le contexte actuel (évènement, modal, etc..), mais sera réactivée dès ce contexte terminé.",
											timeOut: 20
										});
										Events.helper_btnBlockOnModal = true;
									}
								}.bind(this), 400);
							}.bind(this), 300);
						}
					}.bind(btn))
			);
		}
	}

	if (this.timeOut != false) {
		this.element.append('<div class="progressBar"><div class="progress">');
		delay(function() {
			var $progress = this.element.children(".progressBar").children(".progress");
			$progress.css("animation", "progressDecrease " + this.timeOut + "s linear forwards");
			delay(function() {
				this.closeNotif();
			}.bind(this), this.timeOut * 1000);
		}.bind(this), 500);
	}

	this.closeNotif = function() {
		this.element.css("animation", "fadeOutNotif 0.4s ease-out forwards");
		delay(function() {
			this.element.remove();
			var index = Notification.instances.indexOf(this);
			if (index > -1) {
				Notification.instances.splice(index, 1);
			}
		}.bind(this), 400);
	};

	Notification.instances.unshift(this);
}
Notification.instances = [];

function Page(obj) {
	this.sceneID = obj.sceneID || 1;
	this.title = obj.title;
	this.fluff = obj.fluff;
	this.scenes = obj.scenes;
	this.changeScene = function(id) {
		this.sceneID = id;
		game.refreshPage();
	};
	this.refBackground = obj.refBackground;
}

function extraBlock(txt, img) {
	img ?
		$("main .extrasContainer").append(`<div class='textbox extra hasimg'><div class='img' style='background-image:url("../assets/img/extraIcons/${img}.png")'></div>${txt}</div>`) :
		$("main .extrasContainer").append(`<div class='textbox extra'>${txt}</div>`);
}

function applyBackground(params) {
	$('.background .prop.object').css('background-image', 'none');
	params["back"] ?
		$('.cover.-back').css('background-image', `url("../assets/img/bg/full/${params["back"]}.png")`) :
		$('.cover.-back').css('background-image', `none`);
	params["mid"] ?
		$('.cover.-mid').css('background-image', `url("../assets/img/bg/full/${params["mid"]}.png")`) :
		$('.cover.-mid').css('background-image', `none`);
	params["fore"] ?
		$('.cover.-fore').css({
			'background-image': `url("../assets/img/bg/full/${params["fore"]}.png")`,
			'background-position': params["fore_pos"]
		}) :
		$('.cover.-fore').css('background-image', `none`);
}

var pageList = [{
		title: "Errance",
		fluff: `Vous voilà planté au coeur de la plaine du Soufflant.<br>
    Malgré son nom, la plaine est chaude l'été mais pas la moindre brise ne se fait ressentir.`,
		refBackground: function() {
			applyBackground({
				"fore": "Soufflant_Plaine_Embranchement_fore_day",
				"fore_pos": "right",
				"mid": "Soufflant_Plaine_Embranchement_mid_day",
				"back": "Soufflant_Plaine_Embranchement_back_day"
			});

		},
		scenes: [{
			story() {
				if (time.period == "journée") {
					return `Les sauterelles chantent sous le ciel d'azur.<br>
							Vous êtes trempé de sueur et l'atmosphère devient de plus en plus lourde.<br>
		          En regardant vers l'Ouest, vous apercevez un petit <a class="click">bois</a> où vous pourrez vous rafraîchir.<br>
		          Vers l'Est, une petite <a class="click">cabane</a> en bois se dresse sur une colline.<br>
		          Au Nord, le <a class="click">chemin</a> de terre continue et serpente vers un vallon.`;
				}
				if (time.period == "nuit") {
					return `La nuit est tombée mais l'atmosphère continue tout de même à s'allourdir de minutes en minutes.<br>
		          Vous ne distinguez pas grand-chose, mais savec que vers l'Ouest se trouve un petit <a class="click">bois</a>.<br>
		          Vers l'Est, une petite <a class="click">cabane</a> en bois se dresse sur une colline.<br>
		          Au Nord, le <a class="click">chemin</a> de terre continue et serpente dans l'obscurité.`;
				}
				if (time.period == "crépuscule") {
					return `Le nuit tombe et la température redescend lentement, mais l'atmosphère continue tout de même à s'allourdir de minutes en minutes.<br>
		          Vers l'Ouest se trouve un petit <a class="click">bois</a>, dont les ombres s'allongent de minute en minute.<br>
		          Vers l'Est, une petite <a class="click">cabane</a> en bois se dresse sur une colline.<br>
		          Au Nord, le <a class="click">chemin</a> de terre continue et serpente vers le soleil couchant.`;
				}
				if (time.period == "aube") {
					return `Le jour se lève lentement, avec la même sensation pesante dans l'atmosphère.<br>
		          Vers l'Ouest se trouve un petit <a class="click">bois</a>, dont les ombres s'allongent de minute en minute.<br>
		          Vers l'Est, une petite <a class="click">cabane</a> en bois se dresse sur une colline.<br>
		          Au Nord, le <a class="click">chemin</a> de terre continue et serpente vers le soleil couchant.`;
				}
			},
			extras() {
				extrasDB.time.long_soufflant();
			},
			triggers: [{
					triggerText: "bois",
					showName: "le petit bois",
					rightClickScript: function() {
						game.loadPage(1);
					},
					actions: [{
							name: "Regarder",
							style: 'normal',
							script() {
								//modal de description
								modalList.Soufflant_Embranchement_RegarderBois();
							}
						},
						{
							name: "Y aller",
							style: 'rightClick',
							script() {
								//changement de page : bois
								game.loadPage(1);
							}
						}
					]
				},
				{
					triggerText: "cabane",
					showName: "la cabane",
					actions: [{
							name: "Regarder",
							style: 'normal',
							script() {
								modalList.Soufflant_Embranchement_RegarderCabane();
							}
						},
						{
							name: "S'approcher",
							style: 'rightClick',
							script() {
								//changement de page : devant cabane
							}
						}
					]
				},
				{
					triggerText: "chemin",
					showName: "le chemin",
					actions: [{
						name: "Continuer",
						style: 'rightClick',
						script() {
							//changement de page : devant le mur
						}
					}]
				}
			]
		}]
	},
	{
		title: "Une fraîcheur bien méritée",
		fluff: `Vous voilà à l'entrée d'un petit bois de cérembles.`,
		refBackground: function() {
			applyBackground({
				"mid": "Soufflant_Plaine_Bois_mid",
				"fore": "Soufflant_Plaine_Bois_fore",
				"fore_pos": "center",
			});
			if (Events.tookbaton == false) $('.background .prop.object')
				.css({
					backgroundImage: 'url("../assets/img/bg/prop/baton.png")',
					height: '13vh',
					width: '11vw',
					left: '15vw',
					bottom: '5vh'
				});
		},
		scenes: [{
			story() {
				if (time.period == "journée") {
					return `De l'ombre ! Enfin !<br>
						Vous vous apprêtez à vous asseoir au <a class="click">sol</a> au pied d'un jeune tronc, quand vous entendez un <a class="click">bruit</a> : une eau qui s'enfuit un peu plus loin.`;
				}
				if (time.period == "nuit") {
					return `Vous ne distinguez pas grand chose dans le chaos d'ombres des arbres. Cependant, un <a class="click">bruit</a> vous interpelle : le murmure d'une eau qui s'enfuit plus loin.`;
				}
				if (time.period == "crépuscule") {
					return `Vous vous apprêtez à vous reposer quelques minutes au <a class="click">sol</a>, parmis les ombres allongeantes. Cependant, un <a class="click">bruit</a> vous interpelle : le murmure d'une eau qui s'enfuit plus loin.`;
				}
				if (time.period == "aube") {
					return `Les arbres se colorent lentement avec le soleil naissant.<br>
					Passer toute une nuit debout dans la plaine était exténuant : vous vous apprêtez à vous reposer quelques minutes au <a class="click">sol</a>. Cependant, un <a class="click">bruit</a> vous interpelle : le murmure d'une eau qui s'enfuit plus loin.`;
				}
			},
			extras() {
				extraBlock(`Vous vous êtes légèrement écarté du <a class="click">chemin</a>`, 'path');
				extrasDB.time.long_soufflant();
			},
			triggers: [{
					triggerText: "sol",
					showName: "le sol du bois",
					actions: [{
						name: "Inspecter",
						style: 'normal',
						script() {
							//modal de description + branche
							modalList.Soufflant_Bois_RegarderSol();
						}
					}]
				},
				{
					triggerText: "bruit",
					showName: "le bruit d'eau",
					actions: [{
							name: "Regarder",
							style: 'normal',
							script() {
								//modal de description
							}
						},
						{
							name: "Suivre le bruit",
							style: 'rightClick',
							script() {
								//changement de page : rivière
							}
						}
					]
				},
				{
					triggerText: "chemin",
					showName: "le chemin",
					rightClickScript: function() {
						game.loadPage(0);
					},
					actions: [{
						name: "Revenir sur le chemin",
						style: 'rightClick',
						script() {
							//changement de page : embranchement
							game.loadPage(0);
						}
					}]
				}
			]
		}]
	},
	//end of pages
];

var time = {
	IRLsectoIGmin: 1.5,
	hours: 13,
	minutes: 0,
	period: "journée",
	daysPlayed: 0,
	set: function(param) {
		if (param["minutes"] !== undefined) {
			this.minutes = param["minutes"];
			if (this.minutes > 59) {
				this.set({
					"hours": ++this.hours,
					"minutes": 0
				});
			}
		}
		if (param["hours"] !== undefined) {
			this.hours = param["hours"];
			if ((
					(24 >= this.hours && this.hours >= 21) ||
					(4 >= this.hours && this.hours >= 0)
				) && (time.period != "nuit")) { this.changePeriod("nuit"); }
			if (
				(9 >= this.hours && this.hours >= 5) &&
				(time.period != "aube")) { this.changePeriod("aube"); }
			if (
				(17 >= this.hours && this.hours >= 10) &&
				(time.period != "journée")) { this.changePeriod("journée"); }
			if (
				(20 >= this.hours && this.hours >= 18) &&
				(time.period != "crépuscule")) { this.changePeriod("crépuscule"); }

			if (this.hours > 23) {
				this.set({
					"hours": 0
				});
				this.daysPlayed++;
			}
			game.refreshPage();
			time.refreshClocks();
		}
	},
	start: function() {
		time.changePeriod('journée');
		time.refreshClocks();
		setInterval(function() {
			time.set({ "minutes": ++time.minutes });
			time.refreshClocks();
		}, time.IRLsectoIGmin * 1000);
	},
	formatDate: function() {
		let hours = this.hours < 10 ? "0" + this.hours : this.hours;
		let minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
		return (hours + ":" + minutes);
	},
	refreshClocks: function() {
		$('nav').html(time.formatDate());
	},
	changePeriod: function(per) {
		if (per == "journée") {
			time.period = "journée";
			$('.background').css('background-color', '');
			$('.sun').css({ 'display': '', "z-index": '', "left": '', "top": '' });
			$('.clouds.-back,.clouds.-front').css({ 'filter': '', 'opacity': 1 });
			$('.cover, .prop').css('filter', '');
			$('.stars').css('display', 'none');
		}
		if (per == "crépuscule") {
			time.period = "crépuscule";
			$('.background').css('background-color', 'rgb(255, 136, 108)');
			$('.sun').css({
				display: '',
				"z-index": 1,
				top: "44vh",
				left: "37vw"
			});
			$('.stars').css({
				display: '',
				opacity: "0.4",
			});
			$('.clouds').css('filter', 'saturate(85.3%) brightness(29%) sepia(100%) contrast(127%) hue-rotate(-44deg)');
			$('.cover, .prop')
				.css('filter', 'saturate(100.3%) brightness(43%) sepia(52%) contrast(128%) hue-rotate(-52deg)');
		}
		if (per == "nuit") {
			time.period = "nuit";
			$('.background').css('background-color', 'rgb(30, 26, 36)');
			$('.sun').css('display', 'none');
			$('.stars').css({
        display:'',
				opacity: "1",
			});
			$('.clouds.-back')
				.css({
					filter: 'saturate(85.3%) brightness(12%) sepia(100%) contrast(122%) hue-rotate(-125deg)',
					opacity: 0.3
				});
			$('.clouds.-front')
				.css({
					filter: 'saturate(85.3%) brightness(12%) sepia(100%) contrast(122%) hue-rotate(-125deg)',
					opacity: 0.7
				});
			$('.cover.-back')
				.css('filter', 'saturate(79.3%) brightness(11%) sepia(100%) contrast(110%) hue-rotate(-119deg)');
			$('.cover.-mid, .cover.-fore, .prop')
				.css('filter', 'saturate(126.3%) brightness(13%) sepia(82%) contrast(104%) hue-rotate(-135deg)');
		}
		if (per == "aube") {
			time.period = "aube";
			$('.background').css('background-color', 'rgb(149, 145, 207)');
			$('.sun').css({
				display: '',
				"z-index": 1,
				top: "32vh",
				left: "4vw"
			});
			$('.stars').css({
        display:'',
				opacity: "0.3",
			});
			$('.clouds.-back')
				.css({
					filter: 'saturate(116%) brightness(40%) contrast(147%) hue-rotate(132deg)',
					opacity: 0.3
				});
			$('.clouds.-front')
				.css({
					filter: 'saturate(116%) brightness(40%) contrast(147%) hue-rotate(132deg)',
					opacity: 0.7
				});
			$('.cover.-back')
				.css('filter', 'saturate(41.3%) brightness(33%) sepia(0%) contrast(100%) hue-rotate(9deg)');
			$('.cover.-mid, .cover.-fore, .prop')
				.css('filter', 'saturate(38.3%) brightness(52%) sepia(0%) contrast(113%) hue-rotate(-9deg)');
		}
		console.info(`TIME : période ${time.period}`);
	},
};
