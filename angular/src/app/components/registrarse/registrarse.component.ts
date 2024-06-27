import { Component, inject } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Registro } from '../../interfaces/interfaces';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css',
})
export class RegistrarseComponent {
  router = inject(Router);
  toastService = inject(ToastrService);
  registertService: RegisterService = inject(RegisterService);

  formularioRegistro = new FormGroup({
    nombre: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.required),
    contrasenia: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
  });

  enviarRegistro() {
    if (this.formularioRegistro.valid) {
      const nombre = this.formularioRegistro.value.nombre;
      const correo = this.formularioRegistro.value.correo;
      const contrasenia = this.formularioRegistro.value.contrasenia;
      const telefono = this.formularioRegistro.value.telefono;

      if (
        typeof nombre === 'string' &&
        typeof correo === 'string' &&
        typeof contrasenia === 'string' &&
        typeof telefono === 'string'
      ) {
        const credenciales: Registro = {
          nombre,
          correo,
          contrasenia,
          telefono,
        };
        this.registertService
          .login(credenciales)
          .subscribe((respuesta: any) => {
            if (respuesta.resultado == 'Bien') {
              this.toastService.success('Registro Exitoso');
            }
          });
      }
      this.formularioRegistro.reset();
    } else {
      this.toastService.warning('Todos los campos son obligatorios');
    }
  }

  loginEnviar() {
    this.router.navigateByUrl('/iniciar-sesion');
  }
}
