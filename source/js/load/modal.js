var modal = {
	isOpen: false,
	buttons: [],
	load(params = {}) {
		this.isOpen ? this.switch(params) : this.fadeIn(params);
	},
	fadeIn(params) {
		this.isOpen = true;
		game.ui.animations.pause();
		modal.apply(params);
		overlay.show();
		$(".modal").css({
			animation: "open-modal .7s cubic-bezier(.16, .81, .32, 1) forwards",
			display: "block"
		});
		if (this.img) {
			delay(function () {
				$(".modal").css("animation", "adapt-modal 0.4s ease forwards");
			}, 700);
		}
	},
	switch (params) {
		$(".modal").css("animation", "switch-modal-hide 0.4s ease-in forwards");
		delay(function () {
			modal.apply(params);
			$(".modal").css("animation", "switch-modal-show 0.4s ease-out forwards");
		}, 400);
	},
	close(params = {}) {
		this.isOpen = false;
		if (!params.keepOverlay) {
			overlay.hide();
			game.ui.animations.play();
		}
		delay(function () {
			$(".modal").css("animation", "close-modal .5s ease");
		}, 300);
	},
	apply(params) {
		this.img = params.img || 0;
		this.title = params.title.format() || "Pas de titre";
		this.txt = params.txt.format() || "Pas de texte";
		this.btnColor = 0;
		switch (params.color) {
			case "salmon":
				this.color = "rgb(239, 137, 119)";
				this.btnColor = "rgb(238, 122, 102)";
				break;
			case "wine":
				this.color = "#87475b";
				break;
			case "faded":
				this.color = "#6d6875";
				break;
			case "aqua":
				this.color = "rgb(52, 118, 122)";
				break;
			case "royal":
				this.color = "rgb(145, 44, 44)";
				break;
			default:
				this.color = "rgb(167, 113, 103)";
				this.btnColor = "rgb(167, 113, 103)";
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
		$(".modal .img-story")
			.css({
				"background-color": this.color,
				"border-color": this.color
			});
		if (params.buttons)
			modal.buttons = params.buttons;
		for (btn in modal.buttons) {
			$(".modal main .btns").append(
				`<div class='btn' onclick='modal.buttons[${btn}].script()'>${modal.buttons[btn].title.format()}</div>`
			);
		}
		$(".modal main .btns .btn").css("background-color", this.btnColor);
		delay(function () {
			if (isOverflown($(".modal main")[0])) {
				$(".modal").append("<div class='overflowGradient bot'></div><div class='overflowGradient top'></div><div class='overflowIndicator'>...</div>");
				$(".modal main").on("wheel", function (event) {
					delay(function(){
						if ($(".modal main")[0].scrollTop >= 0.9 * $(".modal main")[0].scrollTopMax)
							$(".modal .overflowIndicator, .modal .overflowGradient.bot").css('opacity', 0);
						else
							$(".modal .overflowIndicator, .modal .overflowGradient.bot").css('opacity', 1);

						if ($(".modal main")[0].scrollTop > 0)
							$(".modal .overflowGradient.top").css('opacity', 1);
						else
							$(".modal .overflowGradient.top").css('opacity', 0);
					}, 200);
				}, false);
			}
		}, 300);
	},
};