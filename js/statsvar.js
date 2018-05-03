function refStats(){
	classeXForce = localStorage.classeXForce;
	classeXFesse = localStorage.classeXFesse;
	classeXChar = localStorage.classeXChar;
	classeXSag = localStorage.classeXSag;

	raceXForce = localStorage.raceXForce;
	raceXFesse = localStorage.raceXFesse;
	raceXChar = localStorage.raceXChar;
	raceXDex = localStorage.raceXDex;
	raceXSag = localStorage.raceXSag;
	raceXInt = localStorage.raceXInt;
	/**/
	bForce = localStorage.bForce;
	bFesse = localStorage.bFesse;
	bChar = localStorage.bChar;
	bDex = localStorage.bDex;
	bSag = localStorage.bSag;
	bInt = localStorage.bInt;
	/**/
	totalForce = Math.round((+raceXForce * +classeXForce) * +bForce);
	localStorage.totalForce = totalForce;
	totalFesse = Math.round((+raceXFesse * +classeXFesse) * +bFesse);
	localStorage.totalFesse = totalFesse;
	totalChar = Math.round((+raceXChar * +classeXChar) * +bChar);
	localStorage.totalChar = totalChar;
	totalDex = Math.round(+raceXDex * +bDex);
	localStorage.totalDex = totalDex;
	totalSag = Math.round((+raceXSag * +classeXSag) * +bSag);
	localStorage.totalSag = totalSag;
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
	$("#totalForce .statNumber").html(totalForce);
	$("#bForce .statNumber").html(bForce);
	$("#raceXForce .statNumber").html(raceXForce);
	$("#classeXForce .statNumber").html(classeXForce);

	$("#totalFesse .statNumber").html(totalFesse);
	$("#bFesse .statNumber").html(bFesse);
	$("#raceXFesse .statNumber").html(raceXFesse);
	$("#classeXFesse .statNumber").html(classeXFesse);

	$("#totalChar .statNumber").html(totalChar);
	$("#bChar .statNumber").html(bChar);
	$("#raceXChar .statNumber").html(raceXChar);
	$("#classeXChar .statNumber").html(classeXChar);

	$("#totalSag .statNumber").html(totalSag);
	$("#bSag .statNumber").html(bSag);
	$("#raceXSag .statNumber").html(raceXSag);
	$("#classeXSag .statNumber").html(classeXSag);

	$("#totalDex .statNumber").html(totalDex);
	$("#raceXDex .statNumber").html(raceXDex);
	$("#bDex .statNumber").html(bDex);

	$("#totalInt .statNumber").html(totalInt);
	$("#raceXInt .statNumber").html(raceXInt);
	$("#bInt .statNumber").html(bInt);

	$("#plGold").html(localStorage.plGold);
	$('#plHealthBar').progressbar({classes:{"ui-progressbar": "progression", "ui-progressbar-value": "progression-value"}});
	$('#plHealthBar').progressbar('option', 'value', Number(localStorage.plHealth));
	$('#plHealthBar').progressbar('option', 'max', Number(localStorage.plHealthMax));
	$('#plHealthText').html(localStorage.plHealth+"/"+localStorage.plHealthMax);
	$("#uiFG_bot_top_plPseudo").html(localStorage.pseudo);
	$("#uiFG_bot_top_plRace").html(localStorage.race);

}
