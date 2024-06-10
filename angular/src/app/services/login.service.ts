import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Interfaces } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  httpClient = inject(HttpClient);

  login(credential: Interfaces) {
    return this.httpClient.post(
      'http://localhost:3000/inicio-sesion',
      credential
    );
  }
}
