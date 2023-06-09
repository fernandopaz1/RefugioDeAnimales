buttonBuscarAvisos.onclick = () => {
  renderOrganizationCards(buscadorDeAvisos(inputTipoAnimal.value, selectAviso.value))
}