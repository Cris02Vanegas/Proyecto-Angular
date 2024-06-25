import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  constructor() {}

  httpClient = inject(HttpClient);
  router = inject(Router);

  API_URL = 'http://localhost:3000/privado';

  createReserva(
    nombre: any,
    tipoDocumento: any,
    documento: any,
    fechaNacimiento: any,
    planViaje: any,
    fechaViaje: any,
    email: any,
    numeroEmergencia: any,
    imagen: File,
    marca: any,
    modelo: any,
    anio: any,
    cilindraje: any,
    fechaRTM: any,
    fechaSoat: any,
    fechaTDR: any
  ) {
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('tipoDocumento', tipoDocumento);
    formData.append('documento', documento);
    formData.append('fechaNacimiento', fechaNacimiento);
    formData.append('planViaje', planViaje);
    formData.append('fechaViaje', fechaViaje);
    formData.append('email', email);
    formData.append('numeroEmergencia', numeroEmergencia);
    formData.append('imagen', imagen);
    formData.append('marca', marca);
    formData.append('modelo', modelo);
    formData.append('anio', anio);
    formData.append('cilindraje', cilindraje);
    formData.append('fechaRTM', fechaRTM);
    formData.append('fechaSoat', fechaSoat);
    formData.append('fechaTDR', fechaTDR);
    return this.httpClient.post(this.API_URL, formData);
  }

  getReservas() {
    return this.httpClient.get(this.API_URL);
  }

  getReservasInfo(id: string) {
    return this.httpClient.get(`${this.API_URL}/${id}`);
  }

  deleteReserva(id: string) {
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }
}
