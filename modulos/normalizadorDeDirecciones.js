class DireccionNormalizada {
  constructor(json) {
    this.altura = json.altura;
    this.cod_calle = json.cod_calle;
    this.cod_calle_cruce = json.cod_calle_cruce;
    this.cod_partido = json.cod_partido;
    this.coordenadas = json.coordenadas;
    this.direccion = json.direccion;
    this.nombre_calle = json.nombre_calle;
    this.nombre_calle_cruce = json.nombre_calle_cruce;
    this.nombre_localidad = json.nombre_localidad;
    this.nombre_partido = json.nombre_partido;
    this.tipo = json.tipo;
  }
}

const url = Config.urlNormalizar;

const normalizarDireccion = async function (direccion) {
  callURL = url + "/?direccion=" + direccion+"&geocodificacion=TRUE";
  listaDirecciones = [];
  await fetch(callURL)
    .then((res) => res.json())
    .then((data) => {
      listaDirecciones = data.direccionesNormalizadas.map(
        (dnJson) => new DireccionNormalizada(dnJson)
      );
    });
  return listaDirecciones.filter((d) => d.tipo === "calle_altura");
};
