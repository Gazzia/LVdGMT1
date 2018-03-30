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
var totalMag = Math.round((+raceXMag * +classeXMag) * +bMag);
var totalChar = Math.round((+raceXChar * +classeXChar) * +bChar);
var totalDex = Math.round(+raceXDex * +bDex);
var totalAgi = Math.round((+raceXAgi * +classeXAgi) * +bAgi);
var totalInt = Math.round(+raceXInt * +bInt);

var armeSelected = localStorage.armeSelected;
if(armeSelected=="Poing"){
	localStorage.setItem("dmgbasemin", "0");
	localStorage.setItem("dmgbasemax", "0");}
if(armeSelected=="Baton"){
	localStorage.setItem("dmgbasemin", "0");
	localStorage.setItem("dmgbasemax", "10");}
var maxdmg = localStorage.dmgbasemax;
var mindmg = localStorage.dmgbasemin;
