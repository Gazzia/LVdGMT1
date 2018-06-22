function setpage(région, milieu, zone){
  if (région != undefined && région != 0){
    localStorage.région = région;
  }
  if (milieu != undefined && milieu != 0){
    localStorage.milieu = milieu;
  }
  if (zone != undefined && zone != 0){
    localStorage.zone = zone;
  }
}
