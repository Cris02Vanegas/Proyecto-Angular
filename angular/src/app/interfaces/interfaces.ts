export interface Interfaces {
  usuario: String;
  password: String;
}

export interface Contactenos {
  nombre: String;
  email: String;
  mensaje: String;
}

export interface Registro {
  nombre: String;
  correo: String;
  contrasenia: String;
  telefono: String;
}

export interface Update {
  nombre: String;
  /*  tipoDocumento: any; */
  documento: any;
  /* fechaNacimiento: any;*/
  planViaje: any;
  /* fechaViaje: any;*/
  /* email: any; */
  numeroEmergencia: any;
  marca: any;
  modelo: any;
  anio: any;
  cilindraje: any;
  /*  fechaRTM: any;
  fechaSoat: any;
  fechaTDR: any; */
}
