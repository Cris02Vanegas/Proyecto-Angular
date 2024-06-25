import { Routes } from '@angular/router';
import { activateGuard } from './guards/activate.guard';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PrivadoComponent } from './components/privado/privado.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { InformacionComponent } from './components/informacion/informacion.component';

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
    path: 'experiencias',
    component: ExperienciasComponent,
    title: 'Experiencias',
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
    path: 'informacion',
    component: InformacionComponent,
    title: 'Informacion',
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
