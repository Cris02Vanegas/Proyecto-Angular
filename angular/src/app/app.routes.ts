import { Routes } from '@angular/router';
import { InicioComponent } from "./components/inicio/inicio.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { ServiciosComponent } from "./components/servicios/servicios.component";
import { NosotrosComponent } from "./components/nosotros/nosotros.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { RegistrarseComponent } from "./components/registrarse/registrarse.component";
import { IniciarSesionComponent } from "./components/iniciar-sesion/iniciar-sesion.component";
import { PrivadoComponent } from "./components/privado/privado.component";
import { NoEncontradoComponent } from "./components/no-encontrado/no-encontrado.component";


export const routes: Routes = [
    {
        path: "inicio", component: InicioComponent, title: "Inicio" 
    },

    {
        path: "productos", component: ProductosComponent
    },

    {
        path: "servicios", component: ServiciosComponent
    }
    ,

    {
        path: "nosotros", component: NosotrosComponent
    }
    ,

    {
        path: "contacto", component: ContactoComponent
    }
    ,

    {
        path: "registrarse", component: RegistrarseComponent
    }
    ,

    {
        path: "iniciar-sesion", component: IniciarSesionComponent
    }
    ,

    {
        path: "privado", component: PrivadoComponent
    },

    {
        path: "", redirectTo: "inicio", pathMatch: "full",
    },

    {
        path: "**", component: NoEncontradoComponent, title: "404"
    }
];
