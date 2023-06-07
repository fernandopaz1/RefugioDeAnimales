const organizacionesDiv = document.getElementById("blogPosts");

const templateAdopcion = `
  <div class="organizationCardContainer {destacada}" onClick="onClickCard(event)" lat='{latData}' long='{longData}'>
  <h3 class="org_name_card">{nombre}</h3>
  <div class="body_organization_card">
    <div class="datos_container_card">
      <p class="org_descripcion_card">{descripcion}</p>
      <p class="org_horario_card">Horario: {horario}</p>
      <p class="org_telefono_card">Telefono: {telefono}</p>
    </div>
    <img class="imagen_org_card" src="{imagen}" />
  </div>
</div>
  `;

let toVisualizeInMap = [];

const onClickCard = (event) => {
  let long = event.currentTarget.getAttribute('long');
  let lat = event.currentTarget.getAttribute('lat');

  if(lat && long)
    map.setView([lat, long], 14);
}

// Iterate over the blog posts array and generate HTML
function renderOrganizationCards(organizaciones) {
  // antes de dibujar las cards elimina todo
  organizacionesDiv.innerHTML = "";

  //Indico que son las organizaciones a visualizar en el mapa
  toVisualizeInMap = organizaciones;
  organizaciones.forEach((organization) => {
    // Create elements
    let orgTemplate = templateAdopcion;
    orgTemplate = orgTemplate.replace("{nombre}", organization.nombre);
    orgTemplate = orgTemplate.replace(
      "{descripcion}",
      organization.descripcion
    );
    orgTemplate = orgTemplate.replace("{horario}", organization.horarios);
    orgTemplate = orgTemplate.replace("{telefono}", organization.telefono);
    orgTemplate = orgTemplate.replace("{imagen}", organization.foto);
    
    if(organization.direccion.coordenadas){
      orgTemplate = orgTemplate.replace("{longData}", organization.direccion.coordenadas.x);
      orgTemplate = orgTemplate.replace("{latData}", organization.direccion.coordenadas.y);
    }

    // si la organizacion esta destacada agrego la clase correspodiente sino no se agrega nada
    orgTemplate = orgTemplate.replace(
      "{destacada}",
      organization.destacada ? "destacada glass" : ""
    );

    const orgDiv = document.createElement("div");
    orgDiv.innerHTML = orgTemplate;
    /*
    // Append the post div to the main div
    */
    organizacionesDiv.appendChild(orgDiv);
  });
  drawOrganizationInMap(organizaciones);
}

const templateBusqueda = `
  <div class="organizationCardContainer {destacada}" onClick="onClickCard(event)" lat='{latData}' long='{longData}'>
  <h3 class="org_name_card">{nombre}</h3>
  <div class="body_organization_card">
    <div class="datos_container_card">
      <p class="org_descripcion_card">{descripcion}</p>
      <p class="org_horario_card">Horario: {horario}</p>
      <p class="org_telefono_card">Telefono: {telefono}</p>
    </div>
    <img class="imagen_org_card" src="{imagen}" />
  </div>
</div>
  `;

renderOrganizationCards(buscadorDeOrganizaciones(null, null));
