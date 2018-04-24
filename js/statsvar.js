function refStats(){
	classeXForce = localStorage.classeXForce;
	classeXMag = localStorage.classeXMag;
	classeXChar = localStorage.classeXChar;
	classeXAgi = localStorage.classeXAgi;

	raceXForce = localStorage.raceXForce;
	raceXMag = localStorage.raceXMag;
	raceXChar = localStorage.raceXChar;
	raceXDex = localStorage.raceXDex;
	raceXAgi = localStorage.raceXAgi;
	raceXInt = localStorage.raceXInt;
	/**/
	bForce = localStorage.bForce;
	bMag = localStorage.bMag;
	bChar = localStorage.bChar;
	bDex = localStorage.bDex;
	bAgi = localStorage.bAgi;
	bInt = localStorage.bInt;
	/**/
	totalForce = Math.round((+raceXForce * +classeXForce) * +bForce);
	localStorage.totalForce = totalForce;
	totalMag = Math.round((+raceXMag * +classeXMag) * +bMag);
	localStorage.totalMag = totalMag;
	totalChar = Math.round((+raceXChar * +classeXChar) * +bChar);
	localStorage.totalChar = totalChar;
	totalDex = Math.round(+raceXDex * +bDex);
	localStorage.totalDex = totalDex;
	totalAgi = Math.round((+raceXAgi * +classeXAgi) * +bAgi);
	localStorage.totalAgi = totalAgi;
	totalInt = Math.round(+raceXInt * +bInt);
	localStorage.totalInt = totalInt;

	inv_selected_arme = localStorage.inv_selected_arme;
	if(inv_selected_arme=="Poings"){
		localStorage.setItem("dmgbasemin", "0");
		localStorage.setItem("dmgbasemax", "0");}
	if(inv_selected_arme=="Baton"){
		localStorage.setItem("dmgbasemin", "0");
		localStorage.setItem("dmgbasemax", "10");}
	maxdmg = localStorage.dmgbasemax;
	mindmg = localStorage.dmgbasemin;

	var classe = localStorage.classe;
	var race = localStorage.race;
	var lvl = localStorage.lvl;
	$("#plHealth").html(localStorage.plHealth + "/" + localStorage.plHealthMax);
	$("#plGold").html(localStorage.plGold);
	$("#pseudo").html(localStorage.pseudo + ", " + race);
	$("#plclasse").html(classe + " niveau  " + lvl);
	if (localStorage.plHealth < 0) {
	  $("#plHealth").html("0/" + localStorage.plHealthMax);
	}
}
