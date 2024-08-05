import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Contactenos } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  httpClient = inject(HttpClient);
  router = inject(Router);

  API_URL = 'http://18.217.102.207:3000/contacto';

  login(credential: Contactenos) {
    return this.httpClient.post(this.API_URL, credential);
  }
}
