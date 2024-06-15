import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-privado',
  standalone: true,
  imports: [],
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
}
