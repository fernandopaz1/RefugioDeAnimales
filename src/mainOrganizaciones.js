if(selectServicio !== null){
  for(var s in ServciosOrganizaciones){
    thisId = s;
    thisText = ServciosOrganizaciones[s];
    var option = document.createElement("option");
    option.text = thisText;
    option.value = thisId;
    selectServicio.add(option);
  }
}

if(selectActividad !== null){
  for(var a in ActividadesOrganizaciones){
    thisId = a;
    thisText = ActividadesOrganizaciones[a];
    var option = document.createElement("option");
    option.text = thisText;
    option.value = thisId;
    selectActividad.add(option);
  }
}


const onClickBuscarOrganizaciones = () => {
  renderOrganizationCards(buscadorDeOrganizaciones(selectServicio.value, selectActividad.value));
}

buttonModal.onclick = function() {
  modal.style.display = "block";
}

// Cerrar el modal cuando se hace clic en la "X" de cierre
closeModal.onclick = function() {
  modal.style.display = "none";
}

// Cerrar el modal cuando se hace clic fuera del contenido del modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const templateServiciosInput = `
  <div class="organizationCardContainer">
  <label>
    <input id="{service}Input" type="checkbox" name="{service}Input" class="inline" />{serviceName}
  </label>
  </div>
  `;

const renderServicios = () => {
  serviciosDiv.innerHTML = ""
  for(var s in ServciosOrganizaciones){
    let orgTemplate = templateServiciosInput;
    orgTemplate = orgTemplate.replace("{service}", s);
    orgTemplate = orgTemplate.replace("{serviceName}", ServciosOrganizaciones[s]);
    serviciosDiv.innerHTML += orgTemplate
  }
}

const actividadesServiciosInput = `
  <div class="organizationCardContainer">
  <label>
    <input id="{actividad}Input" type="checkbox" name="{actividad}Input" class="inline" />{actividadName}
  </label>
  </div>
  `;

  const renderActividades = () => {
    actividadesDiv.innerHTML = ""
    for(var s in ActividadesOrganizaciones){
      let orgTemplate = actividadesServiciosInput;
      orgTemplate = orgTemplate.replace("{actividad}", s);
      orgTemplate = orgTemplate.replace("{actividadName}", ActividadesOrganizaciones[s]);
      actividadesDiv.innerHTML += orgTemplate
    }
  }

renderServicios()
renderActividades()

//selectDireccionNewOrganization
inputDireccionNewOrganization.onchange =  (event) => {
  if(event.target.value && event.target.value.length > 4) {
   // inputDireccionNewOrganization.isContentEditable = false
    let direccionesNormalizadas = normalizarDireccion(event.target.value)
    //inputDireccionNewOrganization.isContentEditable = true

    for(var s in direccionesNormalizadas){
      thisId = s;
      thisText = s.toString();
      var option = document.createElement("option");
      option.text = thisText;
      option.value = thisId;
      selectServicio.add(option);
    }

  }
}