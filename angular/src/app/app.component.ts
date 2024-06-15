import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
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
    ServiciosComponent,
    ContactoComponent,
    RegistrarseComponent,
    IniciarSesionComponent,
    PrivadoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
