class Civil{constructor(e={}){this.money={total:e.money||0,log(){var e=this.total%100,t=Math.floor(this.total/100)%100,s=Math.floor(this.total/1e4);e&&console.log(`${e} cuivre`),t&&console.log(`${t} argent`),s&&console.log(`${s} or`)}},this.name=e.name||"Gilbert",this.race=e.race||"Angulain",this.inv=new Inventory(this)}}class NPC extends Civil{constructor(e={}){super(e),NPC.instances.push(this)}}NPC.instances=[];class Player extends Civil{constructor(e={}){super(e)}}var Events={helper_btnBlockOnModal:!1,tookbaton:!1},extrasDB={time:{long_soufflant(){(0==time.daysPlayed&&"nuit"==time.period||1==time.daysPlayed&&time.hours<=4)&&extraBlock("Le soleil est déjà couché, et vous ne voyez plus grand chose.. peut-être serait-il temps de se hâter vers Merryvale ?","time"),1==time.daysPlayed&&"nuit"!=time.period&&extraBlock("Cela fait déjà un jour entier que vous êtes dans la plaine.. Ne serait-il pas une bonne idée d'essayer d'atteindre Merryvale ?","time"),(1==time.daysPlayed&&time.hours>=21||time.daysPlayed>1)&&extraBlock("Cela fait beaucoup trop longtemps que vous êtes ici. Vous n'êtes plus derrière l'écran ? Ouu vous avez eu un problème ? Je dois appeler les urgences ?","time")}}},game={pageID:0,page:{},scene:{},loadPage:function(e){game.pageID=e,game.page=new Page(pageList[e]),$("main .textbox.title").html(game.page.title),$("main .textbox.scene").html(game.page.fluff),$("main .extrasContainer").html(""),game.scene=game.page.scenes[game.page.sceneID-1],$("main .textbox.story").html(game.scene.story()),game.scene.extras(),game.page.refBackground()},refreshPage:function(){$("main .textbox.title").html(game.page.title),$("main .textbox.scene").html(game.page.fluff),$("main .extrasContainer").html(""),game.scene=game.page.scenes[game.page.sceneID-1],$("main .textbox.story").html(game.scene.story()),game.scene.extras(),game.page.refBackground()}};class Inventory{constructor(e){this.owner=e,this.maxWeight=9,this._itemList=[],this.sum=function(e,t){return e.reduce(function(e,s){return e+s[t]},0)}}get list(){return this._itemList.sort()}log(){console.log("%cInventaire de "+this.owner.name+" ("+this.owner.constructor.name+")","font-weight: bold; color:blue;"),console.table(this._itemList)}get totalWeight(){return this.sum(this._itemList,"poids")}hasSpaceFor(e){return this.totalWeight+e.poids<=this.maxWeight}find(e){return this._itemList.find(t=>t.name===e)}add(e){var t=itemList.find(e);if(t&&this.hasSpaceFor(t)){if("Player"==this.owner.constructor.name){var s,i;switch(t.type){case"Arme":s="Nouvelle arme",i=[{txt:"Equipper",blockOnModal:!0,script(){}},{txt:"Inventaire",blockOnModal:!0,script(){}}];break;default:s="Nouvel objet",i=!1}new Notification({type:"inv",timeOut:!1,btns:i,txt:`${s} : ${e} !`})}return this._itemList.push(t),!0}return t?("Player"==this.owner.constructor.name&&new Notification({type:"error",timeOut:!1,txt:`Vous n'avez pas assez de place dans votre inventaire pour : ${e} !`}),console.warn(e+": pas assez de place dans l'inventaire de "+this.owner.name+" ("+this.owner.constructor.name+")"),!1):(console.error(e+": objet inexistant"),!1)}remove(e){var t=itemList.find(e),s=this.find(e);t&&s?this._itemList.splice(this._itemList.indexOf(t),1):t?console.warn(e+": il n'y en a pas dans l'inventaire de "+this.owner.name+" ("+this.owner.constructor.name+")"):console.error(e+": objet inexistant")}give(e,t){}}const itemList={find:e=>itemList.list.find(t=>t.name===e),type:e=>itemList.list.filter(t=>t.type===e),log:{ol(){for(type of["Arme","Divers","Bouffe"])console.log("%c"+type,"font-weight: bold;"),console.table(itemList.type(type))},ul(){console.table(itemList.list)}},list:[{name:"Branche",type:"Arme",poids:5},{name:"Epée",type:"Arme",poids:7}]};var modal={isOpen:!1,buttons:[],load(e={}){this.isOpen?this.switch(e):this.fadeIn(e)},fadeIn(e){this.isOpen=!0,modal.apply(e),$(".overlay").css({animation:"fadeIn .5s ease forwards",display:"block"}),$(".modal").css({animation:"open-modal .7s cubic-bezier(.16, .81, .32, 1) forwards",display:"block"}),this.img&&delay(function(){$(".modal").css("animation","adapt-modal 0.4s ease forwards")},700)},switch(e){$(".modal").css("animation","switch-modal-hide 0.4s ease-in forwards"),delay(function(){modal.apply(e),$(".modal").css("animation","switch-modal-show 0.4s ease-out forwards")},400)},close(){this.isOpen=!1,$(".overlay").css("animation","fadeOut .5s ease forwards"),$(".modal").css("animation","close-modal .5s ease"),delay(function(){$(".modal, .overlay").css("display","none")},500)},apply(e){switch(this.img=e.img||0,this.title=e.title||"Pas de titre",this.txt=e.txt||"Pas de texte",this.btnColor=0,e.color){case"salmon":this.color="rgb(237, 159, 146)",this.btnColor="rgb(241, 136, 118)";break;case"wine":this.color="#87475b";break;case"faded":this.color="#6d6875";break;case"alert":this.color="#600c1c";break;default:this.color="rgb(100, 86, 83)",this.btnColor="rgb(148, 117, 111)"}for(btn in this.btnColor||(this.btnColor=this.color),this.img&&"0"!=this.img?$(".modal").addClass("withImage"):$(".modal").removeClass("withImage"),$(".modal header").html(this.title).css("background-color",this.color),$(".modal main .txt").html(this.txt),$(".modal .img").css({"background-image":`url('../assets/img/modal/${this.img}.png')`,"border-top-color":this.color}),$(".modal main .btns").html(""),e.buttons&&(modal.buttons=e.buttons),modal.buttons)$(".modal main .btns").append(`<div class='btn' onclick='modal.buttons[${btn}].script()'>${modal.buttons[btn].title}</div>`);$(".modal main .btns .btn").css("background-color",this.btnColor)}},modalList={Test1(){modal.load({title:"Modal de test 1",txt:"Voili voilouu, blablabla du lore",color:0,img:0,buttons:[{title:"Fermer",script(){modal.close()}}]})},Test2(){modal.load({title:"Modal de test 2",txt:"Le vieux marchand vous observe un moment, bourre sa pipe, puis vous débite du lore en s'appuyant sur son bon vieux tonneau, son seul camarade de toujours.",color:"wine",img:"merchant",buttons:[{title:"Fermer",script(){modal.close()}}]})},Soufflant_Embranchement_RegarderBois(){modal.load({title:"Bois",txt:"La présence de ce petit bois est opportune : il fait très chaud dans la plaine, qui est d'ordinaire plutôt dépourvue d'arbres. Les premiers arbres se situent à une minute de marche, et leur ombre vous fera sûrement le plus grand bien.",color:0,img:0,buttons:[{title:"Ok",script(){modal.close()}}]})},Soufflant_Embranchement_RegarderCabane(){var e;switch(time.période){case"nuit":e="Vous ne pouvez pas distinguer clairement l'édifice d'aussi loin et dans le noir, mieux vaut s'approcher.";break;default:e="L'édifice s'élève sur une colline voisine, mais vous ne distinguez pas grand chose d'aussi loin."}modal.load({title:"Cabane",txt:e,color:0,img:0,buttons:[{title:"Ok",script(){modal.close()}}]})},Soufflant_Bois_RegarderSol(){0==Events.tookbaton?modal.load({title:"Sol",txt:"Vous apercevez à terre une belle branche qui pourrait vous servir d'arme rudimentaire.<br>\n\t\t\t\tVoulez-vous la prendre ?",color:0,img:0,buttons:[{title:"Prendre",script(){1==player.inv.add("Branche")?(game.page.refBackground(),modal.close()):modal.close()}},{title:"Partir",script(){modal.close()}}]}):modal.load({title:"Sol",txt:"Le sol est jonché de vieilles brindilles et de feuilles.",color:0,img:0,buttons:[{title:"Partir",script(){modal.close()}}]})}};function Notification(e={}){switch(this.type=e.type||"normal",this.type){case"error":var t={from:"#d44d2b",to:"#e92e2e"},s="white",i="Erreur",o="notif-error.svg";break;case"success":t={from:"#5acf9c",to:"#43bc4c"},s="white",i="Succès",o=!1;break;case"magic":t={from:"rgb(142, 115, 236)",to:"rgb(182, 93, 80)"},s="white",i="Nouvel objet!",o="notif-magic.svg";break;case"inv":t={from:"rgb(236, 152, 115)",to:"rgb(182, 93, 80)"},s="white",i="Nouvel objet!",o="notif-inv.svg";break;case"gold":t={from:"rgb(212, 204, 72)",to:"rgb(182, 93, 80)"},s="white",i="Nouvel objet!",o="coin.svg";break;default:t={from:"#5acecf",to:"#4350bc"},s="white",i="Information",o="notif-info.svg"}if(this.txt=e.txt||i,this.btns=e.btns||0,e.closable||!1===e.closable?this.closable=e.closable:this.closable=!0,e.timeOut||0==e.timeOut?this.timeOut=e.timeOut:this.timeOut=5,this.element=$(`<div class="notif"><div class="icon"></div>${this.txt}<div class="btns"></div></div>`),$(".notifications").prepend(this.element),this.element.css({backgroundImage:`linear-gradient(162deg, ${t.from}, ${t.to})`,color:s,animation:"fadeInNotif 0.3s ease-in forwards"}),o&&(this.element.children(".icon").css("background-image",`url("../assets/img/ui/${o}")`),this.element.css("padding-left","2vw")),this.closable&&($closeBtn=$('<div class="close">'),this.element.append($closeBtn).css("padding-right","2vw"),$closeBtn.on("click",function(){this.closeNotif()}.bind(this))),this.btns)for(btn of this.btns)btn.element=$('<div class="btn">'),btn.parent=this,this.element.children(".btns").append(btn.element.text(btn.txt).on("click",function(){!this.blockOnModal||this.blockOnModal&&!modal.isOpen?this.script().bind(this):(this.element.css("background-color","#b24e4e"),delay(function(){this.element.css("background-color",""),delay(function(){Events.helper_btnBlockOnModal||(new Notification({txt:"Lorsqu'un bouton de notification clignote rouge une fois cliqué, c'est que sa fonction est interdite dans le contexte actuel (évènement, modal, etc..), mais sera réactivée dès ce contexte terminé.",timeOut:20}),Events.helper_btnBlockOnModal=!0)}.bind(this),400)}.bind(this),300))}.bind(btn)));0!=this.timeOut&&(this.element.append('<div class="progressBar"><div class="progress">'),delay(function(){this.element.children(".progressBar").children(".progress").css("animation","progressDecrease "+this.timeOut+"s linear forwards"),delay(function(){this.closeNotif()}.bind(this),1e3*this.timeOut)}.bind(this),500)),this.closeNotif=function(){this.element.css("animation","fadeOutNotif 0.4s ease-out forwards"),delay(function(){this.element.remove();var e=Notification.instances.indexOf(this);e>-1&&Notification.instances.splice(e,1)}.bind(this),400)},Notification.instances.unshift(this)}function Page(e){this.sceneID=e.sceneID||1,this.title=e.title,this.fluff=e.fluff,this.scenes=e.scenes,this.changeScene=function(e){this.sceneID=e,game.refreshPage()},this.refBackground=e.refBackground}function extraBlock(e,t){t?$("main .extrasContainer").append(`<div class='textbox extra hasimg'><div class='img' style='background-image:url("../assets/img/extraIcons/${t}.png")'></div>${e}</div>`):$("main .extrasContainer").append(`<div class='textbox extra'>${e}</div>`)}function applyBackground(e){$(".background .prop.object").css("background-image","none"),e.back?$(".cover.-back").css("background-image",`url("../assets/img/bg/full/${e.back}.png")`):$(".cover.-back").css("background-image","none"),e.mid?$(".cover.-mid").css("background-image",`url("../assets/img/bg/full/${e.mid}.png")`):$(".cover.-mid").css("background-image","none"),e.fore?$(".cover.-fore").css({"background-image":`url("../assets/img/bg/full/${e.fore}.png")`,"background-position":e.fore_pos}):$(".cover.-fore").css("background-image","none")}Notification.instances=[];var pageList=[{title:"Errance",fluff:"Vous voilà planté au coeur de la plaine du Soufflant.<br>\n    Malgré son nom, la plaine est chaude l'été mais pas la moindre brise ne se fait ressentir.",refBackground:function(){applyBackground({fore:"Soufflant_Plaine_Embranchement_fore_day",fore_pos:"right",mid:"Soufflant_Plaine_Embranchement_mid_day",back:"Soufflant_Plaine_Embranchement_back_day"})},scenes:[{story:()=>"journée"==time.period?'Les sauterelles chantent sous le ciel d\'azur.<br>\n\t\t\t\t\t\t\tVous êtes trempé de sueur et l\'atmosphère devient de plus en plus lourde.<br>\n\t\t          En regardant vers l\'Ouest, vous apercevez un petit <a class="click">bois</a> où vous pourrez vous rafraîchir.<br>\n\t\t          Vers l\'Est, une petite <a class="click">cabane</a> en bois se dresse sur une colline.<br>\n\t\t          Au Nord, le <a class="click">chemin</a> de terre continue et serpente vers un vallon.':"nuit"==time.period?'La nuit est tombée mais l\'atmosphère continue tout de même à s\'allourdir de minutes en minutes.<br>\n\t\t          Vous ne distinguez pas grand-chose, mais savec que vers l\'Ouest se trouve un petit <a class="click">bois</a>.<br>\n\t\t          Vers l\'Est, une petite <a class="click">cabane</a> en bois se dresse sur une colline.<br>\n\t\t          Au Nord, le <a class="click">chemin</a> de terre continue et serpente dans l\'obscurité.':"crépuscule"==time.period?'Le nuit tombe et la température redescend lentement, mais l\'atmosphère continue tout de même à s\'allourdir de minutes en minutes.<br>\n\t\t          Vers l\'Ouest se trouve un petit <a class="click">bois</a>, dont les ombres s\'allongent de minute en minute.<br>\n\t\t          Vers l\'Est, une petite <a class="click">cabane</a> en bois se dresse sur une colline.<br>\n\t\t          Au Nord, le <a class="click">chemin</a> de terre continue et serpente vers le soleil couchant.':"aube"==time.period?'Le jour se lève lentement, avec la même sensation pesante dans l\'atmosphère.<br>\n\t\t          Vers l\'Ouest se trouve un petit <a class="click">bois</a>, dont les ombres s\'allongent de minute en minute.<br>\n\t\t          Vers l\'Est, une petite <a class="click">cabane</a> en bois se dresse sur une colline.<br>\n\t\t          Au Nord, le <a class="click">chemin</a> de terre continue et serpente vers le soleil couchant.':void 0,extras(){extrasDB.time.long_soufflant()},triggers:[{triggerText:"bois",showName:"le petit bois",rightClickScript:function(){game.loadPage(1)},actions:[{name:"Regarder",style:"normal",script(){modalList.Soufflant_Embranchement_RegarderBois()}},{name:"Y aller",style:"rightClick",script(){game.loadPage(1)}}]},{triggerText:"cabane",showName:"la cabane",actions:[{name:"Regarder",style:"normal",script(){modalList.Soufflant_Embranchement_RegarderCabane()}},{name:"S'approcher",style:"rightClick",script(){}}]},{triggerText:"chemin",showName:"le chemin",actions:[{name:"Continuer",style:"rightClick",script(){}}]}]}]},{title:"Une fraîcheur bien méritée",fluff:"Vous voilà à l'entrée d'un petit bois de cérembles.",refBackground:function(){applyBackground({mid:"Soufflant_Plaine_Bois_mid",fore:"Soufflant_Plaine_Bois_fore",fore_pos:"center"}),0==Events.tookbaton&&$(".background .prop.object").css({backgroundImage:'url("../assets/img/bg/prop/baton.png")',height:"13vh",width:"11vw",left:"15vw",bottom:"5vh"})},scenes:[{story:()=>"journée"==time.period?'De l\'ombre ! Enfin !<br>\n\t\t\t\t\t\tVous vous apprêtez à vous asseoir au <a class="click">sol</a> au pied d\'un jeune tronc, quand vous entendez un <a class="click">bruit</a> : une eau qui s\'enfuit un peu plus loin.':"nuit"==time.period?"Vous ne distinguez pas grand chose dans le chaos d'ombres des arbres. Cependant, un <a class=\"click\">bruit</a> vous interpelle : le murmure d'une eau qui s'enfuit plus loin.":"crépuscule"==time.period?'Vous vous apprêtez à vous reposer quelques minutes au <a class="click">sol</a>, parmis les ombres allongeantes. Cependant, un <a class="click">bruit</a> vous interpelle : le murmure d\'une eau qui s\'enfuit plus loin.':"aube"==time.period?'Les arbres se colorent lentement avec le soleil naissant.<br>\n\t\t\t\t\tPasser toute une nuit debout dans la plaine était exténuant : vous vous apprêtez à vous reposer quelques minutes au <a class="click">sol</a>. Cependant, un <a class="click">bruit</a> vous interpelle : le murmure d\'une eau qui s\'enfuit plus loin.':void 0,extras(){extraBlock('Vous vous êtes légèrement écarté du <a class="click">chemin</a>',"path"),extrasDB.time.long_soufflant()},triggers:[{triggerText:"sol",showName:"le sol du bois",actions:[{name:"Inspecter",style:"normal",script(){modalList.Soufflant_Bois_RegarderSol()}}]},{triggerText:"bruit",showName:"le bruit d'eau",actions:[{name:"Regarder",style:"normal",script(){}},{name:"Suivre le bruit",style:"rightClick",script(){}}]},{triggerText:"chemin",showName:"le chemin",rightClickScript:function(){game.loadPage(0)},actions:[{name:"Revenir sur le chemin",style:"rightClick",script(){game.loadPage(0)}}]}]}]}],time={IRLsectoIGmin:1.5,hours:13,minutes:0,period:"journée",daysPlayed:0,set:function(e){void 0!==e.minutes&&(this.minutes=e.minutes,this.minutes>59&&this.set({hours:++this.hours,minutes:0})),void 0!==e.hours&&(this.hours=e.hours,(24>=this.hours&&this.hours>=21||4>=this.hours&&this.hours>=0)&&"nuit"!=time.period&&this.changePeriod("nuit"),9>=this.hours&&this.hours>=5&&"aube"!=time.period&&this.changePeriod("aube"),17>=this.hours&&this.hours>=10&&"journée"!=time.period&&this.changePeriod("journée"),20>=this.hours&&this.hours>=18&&"crépuscule"!=time.period&&this.changePeriod("crépuscule"),this.hours>23&&(this.set({hours:0}),this.daysPlayed++),game.refreshPage(),time.refreshClocks())},start:function(){time.changePeriod("journée"),time.refreshClocks(),setInterval(function(){time.set({minutes:++time.minutes}),time.refreshClocks()},1e3*time.IRLsectoIGmin)},formatDate:function(){return(this.hours<10?"0"+this.hours:this.hours)+":"+(this.minutes<10?"0"+this.minutes:this.minutes)},refreshClocks:function(){$("nav").html(time.formatDate())},changePeriod:function(e){"journée"==e&&(time.period="journée",$(".background").css("background-color",""),$(".sun").css({display:"","z-index":"",left:"",top:""}),$(".clouds.-back,.clouds.-front").css({filter:"",opacity:1}),$(".cover, .prop").css("filter",""),$(".stars").css("display","none")),"crépuscule"==e&&(time.period="crépuscule",$(".background").css("background-color","rgb(255, 136, 108)"),$(".sun").css({display:"","z-index":1,top:"44vh",left:"37vw"}),$(".stars").css({display:"",opacity:"0.4"}),$(".clouds").css("filter","saturate(85.3%) brightness(29%) sepia(100%) contrast(127%) hue-rotate(-44deg)"),$(".cover, .prop").css("filter","saturate(100.3%) brightness(43%) sepia(52%) contrast(128%) hue-rotate(-52deg)")),"nuit"==e&&(time.period="nuit",$(".background").css("background-color","rgb(30, 26, 36)"),$(".sun").css("display","none"),$(".stars").css({display:"",opacity:"1"}),$(".clouds.-back").css({filter:"saturate(85.3%) brightness(12%) sepia(100%) contrast(122%) hue-rotate(-125deg)",opacity:.3}),$(".clouds.-front").css({filter:"saturate(85.3%) brightness(12%) sepia(100%) contrast(122%) hue-rotate(-125deg)",opacity:.7}),$(".cover.-back").css("filter","saturate(79.3%) brightness(11%) sepia(100%) contrast(110%) hue-rotate(-119deg)"),$(".cover.-mid, .cover.-fore, .prop").css("filter","saturate(126.3%) brightness(13%) sepia(82%) contrast(104%) hue-rotate(-135deg)")),"aube"==e&&(time.period="aube",$(".background").css("background-color","rgb(149, 145, 207)"),$(".sun").css({display:"","z-index":1,top:"32vh",left:"4vw"}),$(".stars").css({display:"",opacity:"0.3"}),$(".clouds.-back").css({filter:"saturate(116%) brightness(40%) contrast(147%) hue-rotate(132deg)",opacity:.3}),$(".clouds.-front").css({filter:"saturate(116%) brightness(40%) contrast(147%) hue-rotate(132deg)",opacity:.7}),$(".cover.-back").css("filter","saturate(41.3%) brightness(33%) sepia(0%) contrast(100%) hue-rotate(9deg)"),$(".cover.-mid, .cover.-fore, .prop").css("filter","saturate(38.3%) brightness(52%) sepia(0%) contrast(113%) hue-rotate(-9deg)")),console.info(`TIME : période ${time.period}`)}};