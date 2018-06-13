function setpage(région, milieu, zone){
  if (région != undefined && région != 0){
    localStorage.région = région;
    console.log(région);
  }
  if (milieu != undefined && milieu != 0){
    localStorage.milieu = milieu;
    console.log(milieu);
  }
  if (zone != undefined && zone != 0){
    localStorage.zone = zone;
    console.log(zone);
  }
}
