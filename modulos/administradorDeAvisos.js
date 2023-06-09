const buscadorDeAvisos = (tipoMascota, tipoAviso) => {
  let avisos = [...avisosAdopcion, ...avisosBusqueda]
  if(!tipoMascota && !tipoAviso) return avisos
  return avisos
          .filter(a => a.descripcion.toLowerCase().includes(tipoMascota.toLowerCase()) || tipoMascota === "")
          .filter(a => {
            if(!tipoAviso) return true
            if(tipoAviso ==="adopcion" && a.constructor.name === "AvisoAdopcion"){
              return true
            }
            if(tipoAviso === "busqueda" && a.constructor.name === "AvisoBusqueda"){
              return true
            }
            return false
          })
          .filter(a => a.estado === EstadoAviso.activo)
}