import { Component } from '@angular/core';
import { NavegacionComponent } from '../navegacion/navegacion.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavegacionComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
