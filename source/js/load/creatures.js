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
