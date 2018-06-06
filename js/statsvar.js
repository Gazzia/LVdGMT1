function refStats(){
	classeXForce = localStorage.classeXForce;
	classeXFesse = localStorage.classeXFesse;
	classeXChar = localStorage.classeXChar;
	classeXDex = localStorage.classeXDex;

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
	origineXForce = localStorage.origineXForce;
	origineXFesse = localStorage.origineXFesse;
	origineXChar = localStorage.origineXChar;
	origineXDex = localStorage.origineXDex;
	origineXSag = localStorage.origineXSag;
	origineXInt = localStorage.origineXInt;
	/**/
	totalForce = Math.round(+raceXForce * +classeXForce * +origineXForce * +bForce);
	localStorage.totalForce = totalForce;
	totalFesse = Math.round(+raceXFesse * +classeXFesse * +origineXFesse * +bFesse);
	localStorage.totalFesse = totalFesse;
	totalChar = Math.round(+raceXChar * +classeXChar * +origineXChar * +bChar);
	localStorage.totalChar = totalChar;
	totalDex = Math.round(+raceXDex * +classeXDex * +origineXDex * +bDex);
	localStorage.totalDex = totalDex;
	totalSag = Math.round(+raceXSag * +origineXSag * +bSag);
	localStorage.totalSag = totalSag;
	totalInt = Math.round(+raceXInt * +origineXInt * +bInt);
	localStorage.totalInt = totalInt;

	inv_selected_arme = localStorage.inv_selected_arme;
	if(inv_selected_arme=="Poings"){
		localStorage.setItem("dmgbasemin", "0");
		localStorage.setItem("dmgbasemax", "0");}
	if(inv_selected_arme=="Branche"){
		localStorage.setItem("dmgbasemin", "0");
		localStorage.setItem("dmgbasemax", "10");}
	maxdmg = localStorage.dmgbasemax;
	mindmg = localStorage.dmgbasemin;
	$(".statForce .text").html('Base: '+bForce+'<br>Race: '+raceXForce+'<br>Origine: '+origineXForce+'<br>Classe: '+classeXForce+'<br>Objets: '+'0');
	$(".statFesse .text").html('Base: '+bFesse+'<br>Race: '+raceXFesse+'<br>Origine: '+origineXFesse+'<br>Classe: '+classeXFesse+'<br>Objets: '+'0');
	$("#totalFesse .statNumber").html(totalFesse);
	$("#bFesse .statNumber").html(bFesse);
	$("#raceXFesse .statNumber").html(raceXFesse);
	$("#origineXFesse .statNumber").html(origineXFesse);
	$("#classeXFesse .statNumber").html(classeXFesse);

	$("#totalChar .statNumber").html(totalChar);
	$("#bChar .statNumber").html(bChar);
	$("#raceXChar .statNumber").html(raceXChar);
	$("#origineXChar .statNumber").html(origineXChar);
	$("#classeXChar .statNumber").html(classeXChar);

	$("#totalDex .statNumber").html(totalDex);
	$("#bDex .statNumber").html(bDex);
	$("#raceXDex .statNumber").html(raceXDex);
	$("#origineXDex .statNumber").html(origineXDex);
	$("#classeXDex .statNumber").html(classeXDex);

	$("#totalSag .statNumber").html(totalSag);
	$("#bSag .statNumber").html(bSag);
	$("#raceXSag .statNumber").html(raceXSag);
	$("#origineXSag .statNumber").html(origineXSag);

	$("#totalInt .statNumber").html(totalInt);
	$("#bInt .statNumber").html(bInt);
	$("#raceXInt .statNumber").html(raceXInt);
	$("#origineXInt .statNumber").html(origineXInt);

	$("#plGold").html(localStorage.plGold);
	$('#plHealthBar').progressbar({classes:{"ui-progressbar": "progression big", "ui-progressbar-value": "progression-value"}});
	$('#plHealthBar_inv').progressbar({classes:{"ui-progressbar": "progression small inv", "ui-progressbar-value": "progression-value"}});
	$('#plHealthBar, #plHealthBar_inv').progressbar('option', 'value', Number(localStorage.plHealth));
	$('#plHealthBar, #plHealthBar_inv').progressbar('option', 'max', Number(localStorage.plHealthMax));
	$('#plHealthText').html(localStorage.plHealth+"/"+localStorage.plHealthMax);
	$(".pseudo").html(localStorage.pseudo);
	$("#topBlock_plRace").html(localStorage.race+" de "+localStorage.origine);

}
