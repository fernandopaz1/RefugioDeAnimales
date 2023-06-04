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