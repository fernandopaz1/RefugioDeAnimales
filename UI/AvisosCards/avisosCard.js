const organizacionesDiv = document.getElementById("blogPosts");

const templateAdopcion = `
  <div class="avisoCardContainer">
  <h3 class="aviso_name_card">Adopcion</h3>
  <div class="body_aviso_card">
    <div class="datos_container_card">
      <p class="av_descripcion_card">{descripcion}</p>
      <p class="av_horario_card">fecha de publicacion: {fechaPublicacion}</p>
      <p class="av_telefono_card">Cuidados Realizados: {cuidadosRealizados}</p>
    </div>
  </div>
</div>
  `;

  const templateBusqueda = `
<div class="avisoCardContainer">
<h3 class="aviso_name_card">Busqueda</h3>
<div class="body_aviso_card">
  <div class="datos_container_card">
    <p class="av_descripcion_card">{descripcion}</p>
    <p class="av_horario_card">fecha de publicacion: {fechaPublicacion}</p>
    <p class="av_telefono_card">Direccion: {direccion}</p>
    <p class="av_telefono_card">Fecha de extravío: {fechaSuceso}</p>
  </div>
  </div>
  <img class="imagen_av_card" src="{imagen}" style={width:100%; height:auto} />
</div>
`;

// Iterate over the blog posts array and generate HTML
function renderOrganizationCards(avisos) {
  // antes de dibujar las cards elimina todo
  organizacionesDiv.innerHTML = "";

  avisos.forEach((aviso) => {
    let orgTemplate = templateAdopcion;
    if(aviso.constructor.name === "AvisoAdopcion"){

      // Create elements
      orgTemplate = orgTemplate.replace("{nombre}", aviso.nombre);
      orgTemplate = orgTemplate.replace(
      "{descripcion}",
      aviso.descripcion
      );
      orgTemplate = orgTemplate.replace("{fechaPublicacion}", aviso.fechaPublicacion);
      orgTemplate = orgTemplate.replace("{cuidadosRealizados}", aviso.cuidadosRealizados);
      orgTemplate = orgTemplate.replace("{imagen}", aviso.foto);
      }else{
      // Create elements
      orgTemplate = templateBusqueda;
      orgTemplate = orgTemplate.replace("{nombre}", aviso.nombre);
      orgTemplate = orgTemplate.replace(
        "{descripcion}",
        aviso.descripcion
        );
        orgTemplate = orgTemplate.replace("{fechaPublicacion}", aviso.fechaPublicacion);
        orgTemplate = orgTemplate.replace("{direccion}", aviso.direccion);
        orgTemplate = orgTemplate.replace("{fechaSuceso}", aviso.fechaSuceso);
        orgTemplate = orgTemplate.replace("{imagen}", aviso.image);

      }
      const orgDiv = document.createElement("div");
      orgDiv.innerHTML = orgTemplate;
      /*
      // Append the post div to the main div
      */
     organizacionesDiv.appendChild(orgDiv);
  });
}


renderOrganizationCards(buscadorDeAvisos(null, null));
