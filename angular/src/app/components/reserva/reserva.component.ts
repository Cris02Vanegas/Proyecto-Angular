import { Component, Inject, inject } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';
import { ReservaService } from '../../services/reserva.service';
import { InformacionComponent } from '../informacion/informacion.component';
import { Update } from '../../interfaces/interfaces';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InformacionComponent,
    RouterLink,
    DatePipe,
  ],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css',
})
export class ReservaComponent {
  router = inject(Router);
  loginService = inject(LoginService);
  toastService = inject(ToastrService);
  reservaService = inject(ReservaService);

  reservas: any[] = [];
  datos: any[] = [];
  correo: string = '';

  reservaSelect: any = null;
  reservaUpdate: any = null;

  formularioUpdate = new FormGroup({
    nombre: new FormControl(''),
    documento: new FormControl(''),
    planViaje: new FormControl(''),
    numeroEmergencia: new FormControl(''),
    marca: new FormControl(''),
    modelo: new FormControl(''),
    anio: new FormControl(''),
    cilindraje: new FormControl(''),
  });

  enviarUpdate() {
    if (this.formularioUpdate.valid) {
      const nombre = this.formularioUpdate.value.nombre;
      const documento = this.formularioUpdate.value.documento;
      const planViaje = this.formularioUpdate.value.planViaje;
      const numeroEmergencia = this.formularioUpdate.value.numeroEmergencia;
      const marca = this.formularioUpdate.value.marca;
      const modelo = this.formularioUpdate.value.modelo;
      const anio = this.formularioUpdate.value.anio;
      const cilindraje = this.formularioUpdate.value.cilindraje;

      if (typeof nombre === 'string') {
        const id = this.reservaUpdate._id;
        const credenciales: Update = {
          nombre,
          documento,
          planViaje,
          numeroEmergencia,
          marca,
          modelo,
          anio,
          cilindraje,
        };
        this.reservaService
          .putReservasInfo(id, credenciales)
          .subscribe((respuesta: any) => {
            if (respuesta.resultado == 'Bien') {
              console.log(respuesta.datos.nombre);
              this.toastService.success('Actualizacion Exitosa');
              this.reservaService.getReservas().subscribe((response: any) => {
                if (response.resultado === 'Bien') {
                  this.reservas = response.datos;
                  const filtered = this.reservas.filter((reserva) => {
                    return reserva.email === this.correo;
                  });
                  if (filtered.length > 0) {
                    this.reservas = filtered;
                    console.log(this.reservas);
                  } else {
                    if (filtered.length === 0) {
                      this.reservas = [];
                    }
                  }
                } else {
                  this.toastService.error('An error ocurred');
                }
              });
            }
          });
      }
    } else {
      this.toastService.warning('Todos los campos son obligatorios');
    }
  }

  handleDelete(id: string) {
    this.reservaService.deleteReserva(id).subscribe((response: any) => {
      if (response.resultado === 'Bien') {
        this.toastService.success(response.mensaje);
        this.reservaService.getReservasInfo(id).subscribe((response: any) => {
          if (response.resultado === 'Bien') {
            this.reservas = response.datos;
          } else {
            this.toastService.error('An error ocurred');
          }
        });
      } else {
        this.toastService.error('An error ocurred');
      }
    });
  }

  handleUpdate(reserva: any) {
    this.reservaUpdate = { ...reserva };
    console.log(this.reservaUpdate);
  }

  handleInfo(reserva: any) {
    this.reservaSelect = { ...reserva };
  }

  /*  handleInfo(id: string) {
    this.reservaService.getReservasInfo(id).subscribe((response: any) => {
      if (response.resultado === 'Bien') {
        this.reservas = response.datos;
        localStorage.setItem('temporal', JSON.stringify(this.reservas));
        this.router.navigateByUrl('/informacion');
      } else {
        this.toastService.error('An error ocurred');
      }
    });
  }
 */
  ngOnInit() {
    const token: any = localStorage.getItem('token');
    if (token) {
      this.loginService.validarToken(token).subscribe((response: any) => {
        if (response.resultado === 'bien') {
          this.correo = response.datos.decodificado.email;
          this.reservaService.getReservas().subscribe((response: any) => {
            if (response.resultado === 'Bien') {
              this.reservas = response.datos;
              const filtered = this.reservas.filter((reserva) => {
                return reserva.email === this.correo;
              });
              if (filtered.length > 0) {
                this.reservas = filtered;
                console.log(this.reservas);
              } else {
                if (filtered.length === 0) {
                  this.reservas = [];
                }
              }
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
}
