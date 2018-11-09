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
