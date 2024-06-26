import { Component, Output, EventEmitter, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [RouterLink, DatePipe],
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
