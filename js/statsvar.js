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
	$("#totalForce .statNumber").html(totalForce);
	$("#bForce .statNumber").html(bForce);
	$("#raceXForce .statNumber").html(raceXForce);
	$("#classeXForce .statNumber").html(classeXForce);

	$("#totalMag .statNumber").html(totalMag);
	$("#bMag .statNumber").html(bMag);
	$("#raceXMag .statNumber").html(raceXMag);
	$("#classeXMag .statNumber").html(classeXMag);

	$("#totalChar .statNumber").html(totalChar);
	$("#bChar .statNumber").html(bChar);
	$("#raceXChar .statNumber").html(raceXChar);
	$("#classeXChar .statNumber").html(classeXChar);

	$("#totalAgi .statNumber").html(totalAgi);
	$("#bAgi .statNumber").html(bAgi);
	$("#raceXAgi .statNumber").html(raceXAgi);
	$("#classeXAgi .statNumber").html(classeXAgi);

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
