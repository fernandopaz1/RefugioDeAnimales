// campos de filtro de busqueda
const selectServicio = document.getElementById("selectServicio");
const selectActividad = document.getElementById("selectActividad");
const inputNombreOrganizacion = document.getElementById("inputNombreOrganizacion");

const buttonBuscarOrganizaciones = document.getElementById("buttonBuscarOrganizaciones");

// creacion de organizacion
const modal = document.getElementById("myModal");
const buttonModal = document.getElementById("buttonNuevaOrganizaciones");
const closeModal = document.getElementsByClassName("close")[0];

const serviciosDiv = document.getElementById("serviciosDiv");
const actividadesDiv = document.getElementById("actividadesDiv");
const direccionesContainer= document.getElementById("direccionesContainer");

const inputNombreNewOrganization = document.getElementById("inputNombreNewOrganization");

const inputDescripcionNewOrganization = document.getElementById("inputDescripcionNewOrganization");

const inputDireccionNewOrganization = document.getElementById("inputDireccionNewOrganization");

const errorNewOrganization = document.getElementById("errorNewOrganization");
const buttonSaveOrganizacion  = document.getElementById("buttonSaveOrganizacion")

// busqueda de avisos
const buttonBuscarAvisos = document.getElementById("buttonBuscarAvisos")
const selectAviso = document.getElementById("selectAviso")
const inputTipoAnimal = document.getElementById("inputTipoAnimal")