import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Contactenos } from '../../interfaces/interfaces';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  router = inject(Router);

  formularioContacto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mensaje: new FormControl(''),
  });

  envioContacto() {
    this.router.navigateByUrl('/contacto');
  }
}
