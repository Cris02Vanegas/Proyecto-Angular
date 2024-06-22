import { Routes } from '@angular/router';
import { activateGuard } from './guards/activate.guard';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PrivadoComponent } from './components/privado/privado.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';

export const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
    title: 'Moto Travels Colombia',
  },

  {
    path: 'productos',
    component: ProductosComponent,
    title: 'Productos',
  },

  {
    path: 'servicios',
    component: ServiciosComponent,
    title: 'Servicios',
  },
  {
    path: 'contacto',
    component: ContactoComponent,
    title: 'Contacto',
  },
  {
    path: 'registrarse',
    component: RegistrarseComponent,
    title: 'Sign Up',
  },
  {
    path: 'iniciar-sesion',
    component: IniciarSesionComponent,
    title: 'Log In',
  },
  {
    path: 'privado',
    component: PrivadoComponent,
    canActivate: [activateGuard],
    title: 'Moto Travels Colombia',
  },

  {
    path: 'reserva',
    component: ReservaComponent,
    title: 'Reserva',
  },

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },

  {
    path: '**',
    component: NoEncontradoComponent,
    title: '404',
  },
];
