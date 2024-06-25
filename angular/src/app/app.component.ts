import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PrivadoComponent } from './components/privado/privado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    NavegacionComponent,
    InicioComponent,
    ProductosComponent,
    ExperienciasComponent,
    RegistrarseComponent,
    IniciarSesionComponent,
    PrivadoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
