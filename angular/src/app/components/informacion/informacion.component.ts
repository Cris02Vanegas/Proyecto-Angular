import { Component, Output, EventEmitter, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ReservaService } from '../../services/reserva.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ReservaComponent } from '../reserva/reserva.component';

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css',
})
export class InformacionComponent {
  reservas: any[] = [];
  @Output() reservaSeleccionada: EventEmitter<any>;

  constructor(private router: Router) {
    this.reservaSeleccionada = new EventEmitter();
  }

  verReserva() {
    this.reservaSeleccionada.emit(this.reservas);
  }

  ngOnInit() {
    const datos = localStorage.getItem('temporal');
    console.log(datos);
  }
  /*  toastService = inject(ToastrService);
  loginService = inject(LoginService);
  reservaService = inject(ReservaService);

  reservas: any[] = [];

  verinfo() {
    this.reservaService.getReservas().subscribe((response: any) => {
      if (response.resultado === 'Bien') {
        this.reservas = response.datos;
      } else {
        this.toastService.error('Erro al leer la informacion');
      }
    });
  }

  /*ngOnInit() {
    const token: any = localStorage.getItem('token');
    if (token) {
      this.loginService.validarToken(token).subscribe((response: any) => {
        if (response.resultado === 'bien') {
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
  } */
}
