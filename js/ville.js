var classeXForce = localStorage.classeXForce;
var classeXMag = localStorage.classeXMag;
var classeXChar = localStorage.classeXChar;
var classeXAgi = localStorage.classeXAgi;

var raceXForce = localStorage.raceXForce;
var raceXMag = localStorage.raceXMag;
var raceXChar = localStorage.raceXChar;
var raceXDex = localStorage.raceXDex;
var raceXAgi = localStorage.raceXAgi;
var raceXInt = localStorage.raceXInt;
/**/
var bForce = localStorage.bForce;
var bMag = localStorage.bMag;
var bChar = localStorage.bChar;
var bDex = localStorage.bDex;
var bAgi = localStorage.bAgi;
var bInt = localStorage.bInt;
/**/
var totalForce = Math.round((+raceXForce * +classeXForce) * +bForce);
localStorage.totalForce = totalForce;
var totalMag = Math.round((+raceXMag * +classeXMag) * +bMag);
localStorage.totalMag = totalMag;
var totalChar = Math.round((+raceXChar * +classeXChar) * +bChar);
localStorage.totalChar = totalChar;
var totalDex = Math.round(+raceXDex * +bDex);
localStorage.totalDex = totalDex;
var totalAgi = Math.round((+raceXAgi * +classeXAgi) * +bAgi);
localStorage.totalAgi = totalAgi;
var totalInt = Math.round(+raceXInt * +bInt);
localStorage.totalInt = totalInt;

var armeSelected = localStorage.armeSelected;
if(armeSelected=="Poings"){
	localStorage.setItem("dmgbasemin", "0");
	localStorage.setItem("dmgbasemax", "0");}
if(armeSelected=="Baton"){
	localStorage.setItem("dmgbasemin", "0");
	localStorage.setItem("dmgbasemax", "10");}
var maxdmg = localStorage.dmgbasemax;
var mindmg = localStorage.dmgbasemin;
