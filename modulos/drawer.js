var map = L.map("map").setView([-34.5067, -58.7064], 14);

L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
  maxZoom: 18,
}).addTo(map);

let ultimoMarker;

let organizacionDestacadaIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [40, 65.6],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

let organizacionIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

let avisoIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.marker([51.5, -0.09]).addTo(map).bindPopup("hola");

let Drawer = function () {
  /******************************************************************************
   * Función para dibujar una ubicacion en un mapa.
   */
  function drawLocationInMap(location, map) {
    console.log("Dibujando la ubicacion: " + location.getNombre());

    let icon;
    if (location.esOrganizacion()) {
      icon = organizacionIcon;
    } else if (location.esOrganizacionDestacada()) {
      icon = organizacionDestacadaIcon;
    } else if (location.esAviso()) {
      icon = avisoIcon;
    } else {
      icon = avisoIcon;
    }

    let info = location.getNombre() + " - " + location.getDescripcion();

    let coord = L.latLng(location.getLat(), location.getLong());
    ultimoMarker = L.marker(coord, {
      icon: icon,
    })
      .addTo(map)
      .bindPopup(info);

    return ultimoMarker;
  }
  return {
    drawLocationInMap: drawLocationInMap,
  };
};
