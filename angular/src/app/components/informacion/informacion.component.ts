import { Component, Output, EventEmitter, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ReservaService } from '../../services/reserva.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ReservaComponent } from '../reserva/reserva.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css',
})
export class InformacionComponent {
  reserva: any[] = [];

  ngOnInit() {
    const datos = JSON.parse(localStorage.getItem('temporal') || '{}');
    this.reserva.push(datos);
  }
}
