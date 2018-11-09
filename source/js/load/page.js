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
