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
	plMaxDmg = localStorage.dmgbasemax;
	plMinDmg = localStorage.dmgbasemin;
	$(".statForce .total").html(totalForce);$(".statForce .total").attr('title','Base: '+bForce+'  |   Race: *'+raceXForce+'  |   Origine: *'+origineXForce+'  |   Classe: *'+classeXForce+'  |   Objets: '+'+0');
	$(".statFesse .total").html(totalFesse);$(".statFesse .total").attr('title','Base: '+bFesse+'  |   Race: *'+raceXFesse+'  |   Origine: *'+origineXFesse+'  |   Classe: *'+classeXFesse+'  |   Objets: '+'+0');
	$(".statChar .total").html(totalChar);$(".statChar .total").attr('title','Base: '+bChar+'  |   Race: *'+raceXChar+'  |   Origine: *'+origineXChar+'  |   Classe: *'+classeXChar+'  |   Objets: '+'+0');
	$(".statDex .total").html(totalDex);$(".statDex .total").attr('title','Base: '+bDex+'  |   Race: *'+raceXDex+'  |   Origine: *'+origineXDex+'  |   Classe: *'+classeXDex+'  |   Objets: '+'+0');
	$(".statSag .total").html(totalSag);$(".statSag .total").attr('title','Base: '+bSag+'  |   Race: *'+raceXSag+'  |   Origine: *'+origineXSag+'  |   Objets: '+'+0');
	$(".statInt .total").html(totalInt);$(".statInt .total").attr('title','Base: '+bInt+'  |   Race: *'+raceXInt+'  |   Origine: *'+origineXInt+'  |   Objets: '+'+0');


	$("#plGold").html(localStorage.plGold);
	$('#plHealthBar').progressbar({classes:{"ui-progressbar": "progression big", "ui-progressbar-value": "progression-value"}});
	$('#plHealthBar_inv').progressbar({classes:{"ui-progressbar": "progression small inv", "ui-progressbar-value": "progression-value"}});
	$('#plHealthBar, #plHealthBar_inv').progressbar('option', 'value', Number(localStorage.plHealth));
	$('#plHealthBar, #plHealthBar_inv').progressbar('option', 'max', Number(localStorage.plHealthMax));
	$('#plHealthText').html(localStorage.plHealth+"/"+localStorage.plHealthMax);
	$(".pseudo").html(localStorage.pseudo);
	$("#topBlock_plRace").html(localStorage.race+" de "+localStorage.origine);

}
