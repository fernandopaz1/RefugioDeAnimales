const drawer = Drawer();

const tipoPuntoMapa = {
  avisos: "aviso",
  organizacion: "organizacion",
  oraganizacionDestacada: "organización destacada",
};

const punto = (nombre, lat, long, descripcion, tipo) => {
  this.lat = lat;
  this.long = long;
  this.descripcion = descripcion;
  this.nombre = nombre;
  this.tipo = tipo;

  this.getLat = () => lat;
  this.getLong = () => long;
  this.getDescripcion = () => descripcion;
  this.getNombre = () => nombre;
  this.esAviso = () => this.tipo === tipoPuntoMapa.avisos;
  this.esOrganizacion = () => this.tipo === tipoPuntoMapa.organizacion;
  this.esOrganizacionDestacada = () =>
    this.tipo === tipoPuntoMapa.oraganizacionDestacada;
  this.equals = (punto) => {
    return (
      this.getLat() == punto.getLat() &&
      this.getLong() == punto.getLong() &&
      this.getDescripcion() == punto.getDescipcion() &&
      this.getNombre() == punto.getNombre()
    );
  };

  return {
    getLat: getLat,
    getLong: getLong,
    getDescripcion,
    getNombre,
    equals,
    esAviso,
    esOrganizacion,
    esOrganizacionDestacada,
  };
};

let markerGroupOrganizaciones = L.markerClusterGroup({
  iconCreateFunction: function (cluster) {
    return L.divIcon({
      html: '<b class="leaflet-div-icon2">' + cluster.getChildCount() + "</b>",
    });
  },
});

function removeAllLayers() {}

function drawOrganizationInMap(organizations) {
  organizations.forEach((o) => {
    if (o.direccion.coordenadas === undefined) return;
    a = drawer.drawLocationInMap(
      punto(
        o.nombre,
        o.direccion.coordenadas.y,
        o.direccion.coordenadas.x,
        o.descripcion,
        o.destacada
          ? tipoPuntoMapa.oraganizacionDestacada
          : tipoPuntoMapa.organizacion
      ),
      map
    );
  });
}
