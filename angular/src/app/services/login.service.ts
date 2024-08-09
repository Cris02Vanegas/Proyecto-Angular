import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Interfaces } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  httpClient = inject(HttpClient);
  router = inject(Router);
  toastService = inject(ToastrService);

  API_URL = 'http://localhost:3000/inicio-sesion';

  login(credential: Interfaces) {
    return this.httpClient.post(this.API_URL, credential);
  }

  validarToken(token: string) {
    return this.httpClient.get(`${this.API_URL}/${token}`);
  }

  isLogin() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    this.toastService.info('Sesión Cerrada');
    localStorage.removeItem('token');
    this.router.navigate(['/iniciar-sesion']);
  }
}
