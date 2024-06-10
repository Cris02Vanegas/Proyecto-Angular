import { Component, inject } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Interfaces } from '../../interfaces/interfaces';
import { LoginService } from '../../services/login.service';

const jwtHelperService = new JwtHelperService();

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css',
})
export class IniciarSesionComponent {
  router = inject(Router);
  loginService: LoginService = inject(LoginService);

  formulariocredenciales = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  manejarEnvio() {
    if (this.formulariocredenciales.valid) {
      const usuario = this.formulariocredenciales.value.usuario;
      const password = this.formulariocredenciales.value.password;

      if (typeof usuario === 'string' && typeof password === 'string') {
        const credenciales: Interfaces = {
          usuario,
          password,
        };
        this.loginService.login(credenciales).subscribe((respuesta: any) => {
          /* console.log('Respuesta: ', respuesta); */
          const decoded = jwtHelperService.decodeToken(respuesta.datos.token);
          /* console.log('decode: ', decoded); */
          localStorage.setItem('token', respuesta.datos.token);
          this.router.navigateByUrl('/privado');
        });
      }
    } else {
      console.log('Sin datos');
    }
  }
}
