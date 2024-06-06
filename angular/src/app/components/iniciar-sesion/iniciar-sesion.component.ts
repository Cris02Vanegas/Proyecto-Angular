import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Interfaces } from '../../interfaces/interfaces';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css',
})
export class IniciarSesionComponent {
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
        console.log(credenciales);
      }
    } else {
      console.log('Sin datos');
    }
  }
}
