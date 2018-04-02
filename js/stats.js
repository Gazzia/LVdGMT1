$("#statistiques").html(
  '<table class="tg">'+
  '<tr class="firstln"> <th></th> <th>Base<br></th> <th title="Race">* '+localStorage.race+'<br></th> <th title="Classe">* '+localStorage.classe+'<br></th> <th>Objets<br></th> <th>TOTAL<br></th> </tr>'+
  '<tr class="secondln"> <td title="Force"><img src="images/UI/abilities/force.png" class="staticon">FOR<br></td> <td>'+bForce+'</td> <td>'+raceXForce+'</td> <td>'+classeXForce+'</td> <td></td> <td>'+totalForce+'</td> </tr>'+
  '<tr class="thirdln"> <td title="Puissance Magique"><img src="images/UI/abilities/mag.png" class="staticon">MAG<br></td> <td>'+bMag+'</td> <td>'+raceXMag+'</td> <td>'+classeXMag+'</td> <td></td> <td>'+totalMag+'</td> </tr>'+
  '<tr class="secondln"> <td title="Charisme"><img src="images/UI/abilities/cha.png" class="staticon">CHAR</td> <td>'+bChar+'</td> <td>'+raceXChar+'</td> <td>'+classeXChar+'</td> <td></td> <td>'+totalChar+'</td> </tr>'+
  '<tr class="thirdln"> <td title="Agilité"><img src="images/UI/abilities/agi.png" class="staticon">AGI</td> <td>'+bAgi+'</td> <td>'+raceXAgi+'</td> <td>'+classeXAgi+'</td> <td></td> <td>'+totalAgi+'</td> </tr>'+
  '<tr class="secondln"> <td title="Dexterité"><img src="images/UI/abilities/dex.png" class="staticon">DEX</td> <td>'+bDex+'</td> <td>'+raceXDex+'</td> <td>X</td> <td></td> <td>'+totalDex+'</td> </tr>'+
  '<tr class="thirdln"> <td title="Intelligence"><img src="images/UI/abilities/int.png" class="staticon">INT</td> <td>'+bInt+'</td> <td>'+raceXInt+'</td> <td>X</td> <td></td> <td>'+totalInt+'</td> </tr>'+ '</table>'
);
$("#statForce").html(bForce+" *("+raceXForce+"*"+classeXForce+") = <b>"+totalForce);
$("#statMag").html(bMag+" *("+raceXMag+"*"+classeXMag+") = <b>"+totalMag);
$("#statChar").html(bChar+" *("+raceXChar+"*"+classeXChar+") = <b>"+totalChar);
$("#statDex").html(bDex+" *("+raceXDex+") = <b>"+totalDex);
$("#statAgi").html(bAgi+" *("+raceXAgi+"*"+classeXAgi+") = <b>"+totalAgi);
$("#statInt").html(bInt+" *("+raceXInt+") = <b>"+totalInt);
