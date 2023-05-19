class Organizacion {
  constructor(
    nombre,
    descripcion,
    direccion,
    horarios,
    telefono,
    foto,
    destacada
  ) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.direccion = direccion;
    this.horarios = horarios;
    this.telefono = telefono;
    this.foto = foto;
    this.destacada = destacada;
  }
}

let organizaciones = [
  new Organizacion(
    "PetAdopt",
    "Organización dedicada a la adopción de mascotas",
    "Calle Principal, Ciudad",
    "Lunes a viernes de 9:00 AM a 5:00 PM",
    "123-456-789",
    "persistencia/organizacion/imagenes/1.png",
    true
  ),
  new Organizacion(
    "AnimalRescue",
    "Rescate y rehabilitación de animales en situación de riesgo",
    "Avenida Central, Ciudad",
    "Martes a sábado de 10:00 AM a 6:00 PM",
    "987-654-321",
    "persistencia/organizacion/imagenes/1.png",
    false
  ),
  new Organizacion(
    "PawsInNeed",
    "Ayuda a animales abandonados y enfermos",
    "Calle Amistad, Ciudad",
    "Lunes a viernes de 8:00 AM a 4:00 PM",
    "555-123-456",
    "persistencia/organizacion/imagenes/1.png",
    true
  ),
  new Organizacion(
    "HappyTails",
    "Fomentando la adopción responsable de mascotas",
    "Calle Felicidad, Ciudad",
    "Lunes a sábado de 11:00 AM a 7:00 PM",
    "777-888-999",
    "persistencia/organizacion/imagenes/1.png",
    false
  ),
  new Organizacion(
    "RescueMeow",
    "Rescate y cuidado de gatos callejeros",
    "Avenida Gatos, Ciudad",
    "Miércoles a domingo de 12:00 PM a 8:00 PM",
    "444-555-666",
    "persistencia/organizacion/imagenes/1.png",
    true
  ),
  new Organizacion(
    "WoofHaven",
    "Refugio para perros en busca de un hogar",
    "Calle Esperanza, Ciudad",
    "Martes a viernes de 9:00 AM a 6:00 PM",
    "222-333-444",
    "persistencia/organizacion/imagenes/1.png",
    true
  ),
  new Organizacion(
    "FurryFriends",
    "Promoviendo la adopción de mascotas de todas las especies",
    "Avenida Amor, Ciudad",
    "Lunes a sábado de 10:00 AM a 5:00 PM",
    "666-777-888",
    "persistencia/organizacion/imagenes/1.png",
    false
  ),
];
