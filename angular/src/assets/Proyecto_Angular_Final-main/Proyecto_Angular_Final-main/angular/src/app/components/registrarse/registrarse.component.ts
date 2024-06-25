import { Component, inject } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css',
})
export class RegistrarseComponent {
  router = inject(Router);
  loginEnviar() {
    this.router.navigateByUrl('/iniciar-sesion');
  }
}
