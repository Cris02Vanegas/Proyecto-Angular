import { Component, inject } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  NgForm,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';
import { ReservaService } from '../../services/reserva.service';

@Component({
  selector: 'app-privado',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, NgIf],
  templateUrl: './privado.component.html',
  styleUrl: './privado.component.css',
})
export class PrivadoComponent {
  loginService = inject(LoginService);
  toastService = inject(ToastrService);
  reservaService = inject(ReservaService);

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  name: string = '';
  correo: string = '';

  nombre: string = '';
  tipoDocumento: string = '';
  documento: Number = 0;
  fechaNacimiento: any;
  planViaje: any;
  fechaViaje: any;
  email: string = '';
  numeroEmergencia: Number = 0;
  imagen: File | null = null;
  marca: string = '';
  modelo: string = '';
  anio: Number = 0;
  cilindraje: Number = 0;
  fechaRTM: any;
  fechaSoat: any;
  fechaTDR: any;

  selected: string = 'Seleccione...';

  reservas: any[] = [];

  inputFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.imagen = event.target.files[0];
    }
  }

  enviarReserva(heroForm: NgForm) {
    if (this.imagen) {
      this.reservaService
        .createReserva(
          this.nombre,
          this.tipoDocumento,
          this.documento,
          this.fechaNacimiento,
          this.planViaje,
          this.fechaViaje,
          this.email,
          this.numeroEmergencia,
          this.imagen,
          this.marca,
          this.modelo,
          this.anio,
          this.cilindraje,
          this.fechaRTM,
          this.fechaSoat,
          this.fechaTDR
        )
        .subscribe((respuesta: any) => {
          if (respuesta.resultado === 'Bien') {
            this.toastService.success(respuesta.mensaje);
            heroForm.reset();
          } else {
            this.toastService.error('An error ocurred');
          }
        });
    } else {
      this.toastService.warning('All fields are required');
    }
  }

  ngOnInit() {
    const token: any = localStorage.getItem('token');
    if (token) {
      this.loginService.validarToken(token).subscribe((response: any) => {
        if (response.resultado === 'bien') {
          this.name = response.datos.decodificado.name;
          this.reservaService.getReservas().subscribe((response: any) => {
            if (response.resultado === 'Bien') {
              this.reservas = response.datos;
            } else {
              this.toastService.error('An error ocurred');
            }
          });
        } else {
          this.loginService.logOut();
        }
      });
    } else {
      this.loginService.logOut();
    }
  }

  mostrar: Boolean = false;
  mensaje: String = 'Estas leyendo todo!!!';
  mensaje_enlace: String = 'Mostrar';

  mostrar2: Boolean = false;
  mensaje_enlace2: String = 'Mostrar';
  mensaje2: String = 'Estas leyendo todo 222!!!';

  mostrar3: Boolean = false;
  mensaje_enlace3: String = 'Mostrar';
  mensaje3: String = 'Estas leyendo todo 333!!!';

  mostrar4: Boolean = false;
  mensaje_enlace4: String = 'Mostrar';
  mensaje4: String = 'Estas leyendo todo 444!!!';

  mostrarOcultarInfo1() {
    if (this.mostrar) {
      this.mostrar = false;
      this.mensaje_enlace = 'Mostrar';
    } else {
      this.mostrar = true;
      this.mensaje_enlace = 'Ocultar';
    }
  }

  mostrarOcultarInfo2() {
    if (this.mostrar2) {
      this.mostrar2 = false;
      this.mensaje_enlace2 = 'Mostrar';
    } else {
      this.mostrar2 = true;
      this.mensaje_enlace2 = 'Ocultar';
    }
  }

  mostrarOcultarInfo3() {
    if (this.mostrar3) {
      this.mostrar3 = false;
      this.mensaje_enlace3 = 'Mostrar';
    } else {
      this.mostrar3 = true;
      this.mensaje_enlace3 = 'Ocultar';
    }
  }

  mostrarOcultarInfo4() {
    if (this.mostrar4) {
      this.mostrar4 = false;
      this.mensaje_enlace4 = 'Mostrar';
    } else {
      this.mostrar4 = true;
      this.mensaje_enlace4 = 'Ocultar';
    }
  }
}
