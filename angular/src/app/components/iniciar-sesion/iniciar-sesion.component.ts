import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Interfaces } from '../../interfaces/interfaces';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css',
})
export class IniciarSesionComponent {
  router = inject(Router);
  toastService = inject(ToastrService);
  loginService: LoginService = inject(LoginService);

  formulariocredenciales = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  isLoading: boolean = false;

  manejarEnvio() {
    if (this.formulariocredenciales.valid) {
      const usuario = this.formulariocredenciales.value.usuario;
      const password = this.formulariocredenciales.value.password;

      if (typeof usuario === 'string' && typeof password === 'string') {
        this.isLoading = true;
        const credenciales: Interfaces = {
          usuario,
          password,
        };
        this.loginService.login(credenciales).subscribe((respuesta: any) => {
          if (respuesta.resultado == 'bien') {
            setTimeout(() => {
              this.isLoading = false;
              localStorage.setItem('token', respuesta.datos.token);
              this.router.navigateByUrl('/privado');
            }, 1000);
          } else {
            setTimeout(() => {
              this.isLoading = false;
              this.toastService.warning('Credenciales erroneos');
            }, 1000);
          }
        });
      }
    } else {
      this.toastService.warning('Todos los campos son obligatorios');
    }
  }

  signUpEnvio() {
    this.router.navigateByUrl('/registrarse');
  }
}
