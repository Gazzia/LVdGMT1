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

	if (Number(localStorage.plLvl) == 1){
		localStorage.plXpToLevel = 100;
	} else {
		localStorage.plXpToLevel = Math.round(100 * ((Number(localStorage.plLvl)-1)*1.3));
	}
	inv_selected_arme = localStorage.inv_selected_arme;
	if(inv_selected_arme=="Poings"){
		localStorage.setItem("dmgbasemin", "0");
		localStorage.setItem("dmgbasemax", "0");}
	if(inv_selected_arme=="Branche"){
		localStorage.setItem("dmgbasemin", "0");
		localStorage.setItem("dmgbasemax", "10");}
	plMaxDmg = localStorage.dmgbasemax;
	plMinDmg = localStorage.dmgbasemin;
	$(".statForce .total").html(totalForce);$(".statForce .total").attr('title','<u style="color:lightgrey">Détails</u><br>Base <b>'+bForce+'</b><br>Race <b>*'+raceXForce+'</b><br>Origine <b>*'+origineXForce+'</b><br>Classe <b>*'+classeXForce+'</b><br>Objets <b>'+'+0</b>');
	$(".statFesse .total").html(totalFesse);$(".statFesse .total").attr('title','<u style="color:lightgrey">Détails</u><br>Base <b>'+bFesse+'</b><br>Race <b>*'+raceXFesse+'</b><br>Origine <b>*'+origineXFesse+'</b><br>Classe <b>*'+classeXFesse+'</b><br>Objets <b>'+'+0</b>');
	$(".statChar .total").html(totalChar);$(".statChar .total").attr('title','<u style="color:lightgrey">Détails</u><br>Base <b>'+bChar+'</b><br>Race <b>*'+raceXChar+'</b><br>Origine <b>*'+origineXChar+'</b><br>Classe <b>*'+classeXChar+'</b><br>Objets <b>'+'+0</b>');
	$(".statDex .total").html(totalDex);$(".statDex .total").attr('title','<u style="color:lightgrey">Détails</u><br>Base <b>'+bDex+'</b><br>Race <b>*'+raceXDex+'</b><br>Origine <b>*'+origineXDex+'</b><br>Classe <b>*'+classeXDex+'</b><br>Objets <b>'+'+0</b>');
	$(".statSag .total").html(totalSag);$(".statSag .total").attr('title','<u style="color:lightgrey">Détails</u><br>Base <b>'+bSag+'</b><br>Race <b>*'+raceXSag+'</b><br>Origine <b>*'+origineXSag+'</b><br>Objets <b>'+'+0</b>');
	$(".statInt .total").html(totalInt);$(".statInt .total").attr('title','<u style="color:lightgrey">Détails</u><br>Base <b>'+bInt+'</b><br>Race <b>*'+raceXInt+'</b><br>Origine <b>*'+origineXInt+'</b><br>Objets <b>'+'+0</b>');

	//health bars
	$('#plHealthBar').progressbar({classes:{"ui-progressbar": "progression game health", "ui-progressbar-value": "progression-value"}});
	$('#plHealthBar_inv').progressbar({classes:{"ui-progressbar": "progression inv health", "ui-progressbar-value": "progression-value"}});
	$('#plHealthBar').progressbar('option', {'value': Number(localStorage.plHealth), 'max': Number(localStorage.plHealthMax)}).attr('title',localStorage.plHealth+"/"+localStorage.plHealthMax+ "♥");
	$('#plHealthBar_inv').progressbar('option', {'value': Number(localStorage.plHealth), 'max': Number(localStorage.plHealthMax)}).attr('title',localStorage.plHealth+"/"+localStorage.plHealthMax+ "♥");
	//xp bar
	$('#plXpBar').progressbar({classes:{"ui-progressbar": "progression xp", "ui-progressbar-value": "progression-value"}});
	$('#plXpBar').progressbar('option', {'value': Number(localStorage.plXp), 'max': Number(localStorage.plXpToLevel)}).attr('title','<b>Niveau '+localStorage.plLvl+'</b><br>Expérience :<br>'+localStorage.plXp+"/"+localStorage.plXpToLevel);
	//
	$(".pseudo").html(localStorage.pseudo);
	$("#plGold").html(localStorage.plGold);

}
