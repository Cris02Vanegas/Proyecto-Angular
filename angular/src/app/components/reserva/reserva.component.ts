import { Component, Inject, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';
import { ReservaService } from '../../services/reserva.service';
import { InformacionComponent } from '../informacion/informacion.component';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [InformacionComponent, RouterLink],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css',
})
export class ReservaComponent {
  router = inject(Router);
  loginService = inject(LoginService);
  toastService = inject(ToastrService);
  reservaService = inject(ReservaService);

  reservas: any[] = [];

  handleDelete(id: string) {
    this.reservaService.deleteReserva(id).subscribe((response: any) => {
      if (response.resultado === 'Bien') {
        this.toastService.success(response.mensaje);
        this.reservaService.getReservas().subscribe((response: any) => {
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

  handleUpdate() {
    console.log('Update');
  }

  handleInfo(id: string) {
    this.reservaService.getReservasInfo(id).subscribe((response: any) => {
      if (response.resultado === 'Bien') {
        this.reservas = response.datos;
        this.router.navigateByUrl('/informacion');
        console.log(this.reservas);
      } else {
        this.toastService.error('An error ocurred');
      }
    });
  }

  ngOnInit() {
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
  }
}
