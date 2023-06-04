const buscadorDeOrganizaciones = (servicioFilter, actividadFillter) => {
  if(actividadFillter === null && actividadFillter === null) return organizaciones
  return organizaciones
          .filter(o => o.actividades.includes(actividadFillter) || actividadFillter === "")
          .filter(o => o.servicios.includes(servicioFilter) || servicioFilter === "");
}