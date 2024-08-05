import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Registro } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor() {}

  httpClient = inject(HttpClient);
  router = inject(Router);

  API_URL = 'http://18.217.102.207:3000/usuarios';

  login(credential: Registro) {
    return this.httpClient.post(this.API_URL, credential);
  }
}
