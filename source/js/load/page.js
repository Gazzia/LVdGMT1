function Page(obj) {
	this.sceneID = obj.sceneID || 1;
	this.title = obj.title;
	this.fluff = obj.fluff;
	this.scenes = obj.scenes;
	this.changeScene = function (id) {
		this.sceneID = id;
		game.refreshPage();
	};
	this.refBackground = obj.refBackground;
}

function extraBlock(txt, img) {
	img ?
		$("main .extrasContainer").append(`<div class='textbox extra hasimg'><div class='img' style='background-image:url("../assets/img/extraIcons/${img}.png")'></div>${txt.format()}</div>`) :
		$("main .extrasContainer").append(`<div class='textbox extra'>${txt.format()}</div>`);
}

function applyBackground(params) {
	$('.background .prop.object').css('background-image', 'none');
	params.back ?
		$('.cover.-back').css('background-image', `url("../assets/img/bg/full/${params.back}.png")`) :
		$('.cover.-back').css('background-image', `none`);
	params.mid ?
		$('.cover.-mid').css('background-image', `url("../assets/img/bg/full/${params.mid}.png")`) :
		$('.cover.-mid').css('background-image', `none`);
	params.fore ?
		$('.cover.-fore').css({
			'background-image': `url("../assets/img/bg/full/${params.fore}.png")`,
			'background-position': params.fore_pos
		}) :
		$('.cover.-fore').css('background-image', `none`);
}

var pageList = [
	{
		locale: {
			région: "Soufflant",
			// interior: false,
			// city: false,
			identifier: "Embranchement"
		},
		title: "Errance",
		fluff: `Vous voilà planté{f:e} au coeur de la plaine du Soufflant.//
    Malgré son nom, la plaine est chaude l'été mais pas la moindre brise ne se fait ressentir.`,
		refBackground: function () {
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
					return `Les sauterelles chantent sous le ciel d'azur.//
					Vous êtes trempé{f:e} de sueur et l'atmosphère devient de plus en plus lourde..//
		          En regardant vers l'Ouest, vous apercevez {c:un petit bois|wood} où vous pourrez vous rafraîchir.//
		          Vers l'Est, {c:une petite cabane en bois|cabane} se dresse sur une colline.//
		          Au Nord, {c:le chemin de terre|chemin} continue et serpente vers un vallon.
					 `;
				}
				if (time.period == "crépuscule") {
					return `Le nuit tombe et la température redescend lentement, mais l'atmosphère continue tout de même à s'allourdir de minutes en minutes.//
		          Vers l'Ouest se trouve {c:un petit bois|wood}, dont les ombres s'allongent de minute en minute.//
		          Vers l'Est, {c:une petite cabane en bois|cabane} se dresse sur une colline.//
		          Au Nord, {c:le chemin de terre|chemin} continue et serpente vers le soleil couchant.`;
				}
				if (time.period == "nuit") {
					return `La nuit est tombée mais l'atmosphère continue tout de même à s'allourdir de minutes en minutes.//
		          Vous ne distinguez pas grand-chose, seulement que vers l'Ouest se trouve {c:un petit bois obscur|wood}.
		          Vers l'Est, {c:l'ombre d'une cabane|cabane} se dresse sur une colline.//
		          Au Nord, {c:le chemin|chemin} continue et serpente dans l'obscurité.`;
				}
				if (time.period == "aube") {
					return `Le jour se lève lentement, avec la même sensation pesante dans l'atmosphère.//
		          Vers l'Ouest se trouve {c:un petit bois|wood}, dont les ombres s'allongent de minute en minute.//
		          Vers l'Est, {c:une petite cabane en bois|cabane} se dresse sur une colline.//
		          Au Nord, {c:le chemin de terre|chemin} continue et serpente vers le soleil couchant.`;
				}
			},
			extras() {
				extrasDB.time.long_soufflant();
			},
			triggers: [{
					trigText: "wood",
					showName: "le petit bois",
					RClick: function () {
						time.ellipse(10);
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
								time.ellipse(10);
								game.loadPage(1);
							}
						}
					]
				},
				{
					trigText: "cabane",
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
					trigText: "chemin",
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
		locale: {
			région: "Soufflant",
			identifier: "Petit bois"
		},
		title: "Une fraîcheur bien méritée",
		fluff: `Vous voilà à l'entrée d'un petit bois de cérembles.`,
		refBackground: function () {
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
					return `De l'ombre ! Enfin !//
						Vous vous apprêtez à vous asseoir {c:dans l'herbe|sol} au pied d'un jeune tronc, quand vous entendez {c:un bruit|bruit} : une eau qui s'enfuit un peu plus loin.`;
				}
				if (time.period == "crépuscule") {
					return `Vous vous apprêtez à vous reposer quelques minutes {c:dans l'herbe |sol}, parmis les ombres allongeantes. Cependant, {c:un bruit|bruit} vous interpelle : le murmure d'une eau qui s'enfuit plus loin.`;
				}
				if (time.period == "nuit") {
					return `Vous ne distinguez pas grand chose dans le chaos d'ombres des arbres. Cependant, {c:un bruissement|bruit} vous interpelle : le murmure d'une eau qui s'enfuit plus loin.`;
				}
				if (time.period == "aube") {
					return `Les arbres se colorent lentement avec le soleil naissant.//
					Passer toute une nuit debout dans la plaine était exténuant : vous vous apprêtez à vous reposer quelques minutes {c:par terre|sol}. Cependant, {c:un bruissement|bruit} vous interpelle : le murmure d'une eau qui s'enfuit plus loin.`;
				}
			},
			extras() {
				extraBlock(`Vous vous êtes légèrement écarté{f:e} du {c:sentier}`, 'path');
				extrasDB.time.long_soufflant();
			},
			triggers: [{
					trigText: "sol",
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
					trigText: "bruit",
					showName: "le bruit d'eau",
					RClick: function () {
						time.ellipse(5);
						game.loadPage(2);
					},
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
								time.ellipse(5);
								game.loadPage(2);
							}
						}
					]
				},
				{
					trigText: "sentier",
					showName: "le chemin",
					RClick: function () {
						time.ellipse(10);
						game.loadPage(0);
					},
					actions: [{
						name: "Revenir sur le chemin",
						style: 'rightClick',
						script() {
							//changement de page : embranchement
							time.ellipse(10);
							game.loadPage(0);
						}
					}]
				}
			]
		}]
	},
	{
		locale: {
			région: "Soufflant",
			identifier: "Rivière"
		},
		title: "Un torrent qui s'enfuit",
		fluff: `Derrière {c:les arbres|bois}, une petite rivière clairette court entre les rochers moussus.`,
		refBackground: function () {
			applyBackground({
				"mid": "Soufflant_Plaine_Rivière_mid",
			});
		},
		scenes: [{
			story() {
				if (time.period == "journée") {
					return `{c:L'eau chantante de la rivière|rivière} est transparente, et sur le bord, vous observez des têtards -tout sémillants dans l'onde fraîche- entamant l'aventure de la vie.`;
				}
				if (time.period == "crépuscule") {
					return `{c:Le petit bras d'eau|rivière} reflète les derniers rayons du soleil, et sur le bord, vous observez des têtards -tout sémillants dans l'onde fraîchissante- entamant l'aventure de la vie.`;
				}
				if (time.period == "nuit") {
					return `Vous devinez la masse sombre du court d'eau à peine un mètre avant de tomber dedans. Vous ne voyez pas grand chose d'autre que {c:de petits essaims de bégariannes|bégariannes}, qui semblent peu troublées par la profondeur de la nuit. Mais la lumière émise par ces insectes ne vous permettent pas de distinguer autre chose que vos pieds.`;
				}
				if (time.period == "aube") {
					return `{c:L'eau chantante de la rivière|rivière} reflète les permiers rayons du soleil, et sur le bord, vous observez des têtards -tout sémillants dans l'onde fraîche- entamant l'aventure de la vie.`;
				}
			},
			extras() {
				if (time.period != "nuit") {
					extraBlock(`L'eau semble assez peu profonde et le courant assez faible pour traverser {c:vers l'autre rive|rive}.`, 'path');
				}
				if (time.period == "nuit") {
					extraBlock(`Mieux vaudrait revenir ici de jour, vous ne voyez pas grand chose..`, 'night');
				}
				extrasDB.time.long_soufflant();
			},
			triggers: [{
					trigText: "bois",
					showName: "le bois",
					RClick: function () {
						time.ellipse(5);
						game.loadPage(1);
					},
					actions: [{
						name: "Revenir",
						style: 'rightClick',
						script() {
							time.ellipse(5);
							game.loadPage(1);
						}
					}]
				},
				{
					trigText: "rivière",
					showName: "la rivière",
					actions: [{
						name: "Observer",
						style: 'normal',
						script() {
							//long modal de l'enfer - faire une halte et tout
							modalList.Soufflant_Riviere_RegarderEau();
						}
					}]
				}, {
					trigText: "rive",
					showName: "l'autre rive",
					actions: [{
						name: "Observer",
						style: 'normal',
						script() {
							if (!Events.rivièreTraversée) {
								modalList.Soufflant_Riviere_LookRive();
							} else {
								modalList.Soufflant_Riviere_LookRive_Traversée();
							}
						}
					}, ]
				}, {
					trigText: "bégariannes",
					showName: "les bégariannes",
					actions: [{
						name: "Observer",
						style: 'normal',
						script() {
							modalList.Soufflant_Riviere_LookInsectes();
						}
					}, ]
				}
			]
		}]
	},
	//end of pages
];