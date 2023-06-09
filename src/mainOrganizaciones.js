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
  <div class="serviciosInputContainer">
  <label>
    <input id="{service}Input" value={service} type="checkbox" name="{service}Input" class="inline serviceSeleccionadas" />{serviceName}
  </label>
  </div>
  `;

const renderServicios = () => {
  serviciosDiv.innerHTML = ''
  for(var s in ServciosOrganizaciones){
    let orgTemplate = templateServiciosInput;
    orgTemplate = orgTemplate.replace("{service}", s);
    orgTemplate = orgTemplate.replace("{serviceName}", ServciosOrganizaciones[s]);
    serviciosDiv.innerHTML += orgTemplate
  }
}

const actividadesServiciosInput = `
  <div class="actividadesInputContainer">
  <label>
    <input id="{actividad}Input" type="checkbox" name="{actividad}Input" class="inline actividadesSeleccionadas" />{actividadName}
  </label>
  </div>
  `;

  const renderActividades = () => {
    actividadesDiv.innerHTML = ''
    for(var s in ActividadesOrganizaciones){
      let orgTemplate = actividadesServiciosInput;
      orgTemplate = orgTemplate.replace("{actividad}", s);
      orgTemplate = orgTemplate.replace("{actividadName}", ActividadesOrganizaciones[s]);
      actividadesDiv.innerHTML += orgTemplate
    }
  }

renderServicios()
renderActividades()

const selectDireccion = (event) => {
  let id = event.currentTarget.getAttribute('idDireccion')
  let direccionesNormalizadas = JSON.parse(localStorage.getItem("direccionesNormalizadas"));
  selectedDirection = direccionesNormalizadas[id]
  inputDireccionNewOrganization.value = selectedDirection.direccion
  direccionesContainer.innerHTML=""
}

let selectedDirection 

const disableNewOrganizationButton = () =>{
  buttonSaveOrganizacion.disabled = true;
}
const enableNewOrganizationButton = () =>{
  buttonSaveOrganizacion.disabled = false;
}



const validateNewOrganizationForm = () => {
  if(!inputNombreNewOrganization.value || inputNombreNewOrganization.value === ""){
    disableNewOrganizationButton();
    errorNewOrganization.innerHTML = "Debe completar el nombre de la organizacion<br>"
    return;
  } 

inputDireccionNewOrganization.onchange =  (event) => {
  if(event.target.value && event.target.value.length > 4) {
   // inputDireccionNewOrganization.isContentEditable = false
    let direccionesNormalizadas = normalizarDireccion(event.target.value)
    //inputDireccionNewOrganization.isContentEditable = true
    direccionesNormalizadas.then(response => {
      localStorage.setItem("direccionesNormalizadas", JSON.stringify(response));

      direccionesContainer.innerHTML=""

      for(var s in response){
        thisId = s;
        thisText = response[s].direccion;
        var option = document.createElement("option");
        option.text = thisText;
        option.value = thisId;
        direccionesContainer.innerHTML += `<p class="direccionesASelccionar" onClick="selectDireccion(event)" idDireccion="${thisId}">${thisText}</p>`;
      }
      validateNewOrganizationForm()
    })
  }
}



  if(!selectedDirection){
    disableNewOrganizationButton();
    errorNewOrganization.innerHTML = "Debe seleccionar una direccion<br>"
    return;
  }
  enableNewOrganizationButton();
  errorNewOrganization.innerHTML = ""
}

inputNombreNewOrganization.onchange = validateNewOrganizationForm

const getServiciosSeleccionados = () => {
    var serviciosDom = document.getElementsByClassName("serviceSeleccionadas")
    let services = []
    for(let i=0; i<serviciosDom.length; i++) {
      if(serviciosDom[i].checked)
        services.push(serviciosDom[i].value)
    }
    return services
}

const getActividadesSeleccionados = () => {
  var actividadesDom = document.getElementsByClassName("actividadesSeleccionadas")
  let actividades = []
  for(let i=0; i<actividadesDom.length; i++) {
    if(actividadesDom[i].checked)
      actividades.push(actividadesDom[i].value)
  }
  return actividades
}

buttonSaveOrganizacion.onclick = () => {
  validateNewOrganizationForm()
  if(buttonSaveOrganizacion.disabled) return
  organizacionesPendientes.push(new Organizacion(
    inputNombreNewOrganization.value,
    inputDescripcionNewOrganization.value,
    selectedDirection,
    null,
    null,
    null,
    false,
    getServiciosSeleccionados(),
    getActividadesSeleccionados()
  ))

  modal.style.display = "none";
  alert("Organizacion pendiente de aprobación")
}

