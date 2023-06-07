// campos de filtro de busqueda
const selectServicio = document.getElementById("selectServicio");
const selectActividad = document.getElementById("selectActividad");

const buttonBuscarOrganizaciones = document.getElementById("buttonBuscarOrganizaciones");


var modal = document.getElementById("myModal");
var buttonModal = document.getElementById("buttonNuevaOrganizaciones");
var closeModal = document.getElementsByClassName("close")[0];

var serviciosDiv = document.getElementById("serviciosDiv");
var actividadesDiv = document.getElementById("actividadesDiv");

var inputNombreNewOrganization = document.getElementById("inputNombreNewOrganization");

var inputDescripcionNewOrganization = document.getElementById("inputDescripcionNewOrganization");

var inputDireccionNewOrganization = document.getElementById("inputDireccionNewOrganization");
var selectDireccionNewOrganization  = document.getElementById("selectDireccionNewOrganization");

var errorNewOrganization = document.getElementById("errorNewOrganization");
var buttonSaveOrganizacion  = document.getElementById("buttonSaveOrganizacion")