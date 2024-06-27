import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contactenos } from '../../interfaces/interfaces';
import { HeaderComponent } from '../header/header.component';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  router = inject(Router);
  toastService = inject(ToastrService);
  contactService: ContactService = inject(ContactService);

  formularioContacto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mensaje: new FormControl(''),
  });

  envioContacto() {
    if (this.formularioContacto.valid) {
      const nombre = this.formularioContacto.value.nombre;
      const email = this.formularioContacto.value.email;
      const mensaje = this.formularioContacto.value.mensaje;

      if (
        typeof nombre === 'string' &&
        typeof email === 'string' &&
        typeof mensaje === 'string'
      ) {
        const credenciales: Contactenos = {
          nombre,
          email,
          mensaje,
        };
        this.contactService.login(credenciales).subscribe((respuesta: any) => {
          if (respuesta.resultado == 'Bien') {
            this.toastService.success('Mensaje Enviado');
          }
        });
        this.formularioContacto.reset();
      }
    } else {
      this.toastService.warning('Todos los campos son obligatorios');
    }
  }
}
