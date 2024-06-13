import { Component, inject } from '@angular/core';
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

  nombre: string = '';

  ngOnInit() {
    const token: any = localStorage.getItem('token');
    if (token) {
      console.log('Validar token');
      this.loginService.validarToken(token).subscribe((response: any) => {
        console.log('response', response);
        if (response.resultado === 'bien') {
          this.nombre = response.datos.decodificado.name;
        } else {
          console.log('El token no es válido');
        }
      });
    } else {
      console.log('no existe token');
    }
  }
}
