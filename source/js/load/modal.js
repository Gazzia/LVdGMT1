var modal = {
	isOpen: false,
	buttons:[],
	load(params = {}) {
		this.isOpen ? this.switch(params) : this.fadeIn(params);
	},
	fadeIn(params) {
		this.isOpen = true;
		modal.apply(params);
		overlay.show();
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
		overlay.hide();
		$(".modal").css("animation", "close-modal .5s ease");
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
