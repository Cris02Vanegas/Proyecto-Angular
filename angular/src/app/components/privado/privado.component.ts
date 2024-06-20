import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-privado',
  standalone: true,
  imports: [NgIf],
  templateUrl: './privado.component.html',
  styleUrl: './privado.component.css',
})
export class PrivadoComponent {
  loginService = inject(LoginService);
  toastService = inject(ToastrService);

  nombre: string = '';

  ngOnInit() {
    const token: any = localStorage.getItem('token');
    if (token) {
      this.loginService.validarToken(token).subscribe((response: any) => {
        if (response.resultado === 'bien') {
          this.nombre = response.datos.decodificado.name;
          this.toastService.success(`hello, ${this.nombre}`);
        } else {
          this.loginService.logOut();
        }
      });
    } else {
      this.loginService.logOut();
    }
  }

  mostrar: Boolean = false;
  mensaje: String = 'Estas leyendo todo!!!';
  mensaje_enlace: String = 'Mostrar';

  mostrar2: Boolean = false;
  mensaje_enlace2: String = 'Mostrar';
  mensaje2: String = 'Estas leyendo todo 222!!!';

  mostrar3: Boolean = false;
  mensaje_enlace3: String = 'Mostrar';
  mensaje3: String = 'Estas leyendo todo 333!!!';

  mostrar4: Boolean = false;
  mensaje_enlace4: String = 'Mostrar';
  mensaje4: String = 'Estas leyendo todo 444!!!';

  mostrarOcultarInfo1() {
    if (this.mostrar) {
      this.mostrar = false;
      this.mensaje_enlace = 'Mostrar';
    } else {
      this.mostrar = true;
      this.mensaje_enlace = 'Ocultar';
    }
  }

  mostrarOcultarInfo2() {
    if (this.mostrar2) {
      this.mostrar2 = false;
      this.mensaje_enlace2 = 'Mostrar';
    } else {
      this.mostrar2 = true;
      this.mensaje_enlace2 = 'Ocultar';
    }
  }

  mostrarOcultarInfo3() {
    if (this.mostrar3) {
      this.mostrar3 = false;
      this.mensaje_enlace3 = 'Mostrar';
    } else {
      this.mostrar3 = true;
      this.mensaje_enlace3 = 'Ocultar';
    }
  }

  mostrarOcultarInfo4() {
    if (this.mostrar4) {
      this.mostrar4 = false;
      this.mensaje_enlace4 = 'Mostrar';
    } else {
      this.mostrar4 = true;
      this.mensaje_enlace4 = 'Ocultar';
    }
  }
}
