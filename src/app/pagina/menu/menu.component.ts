import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AutenticadorService } from '../../arquitectura/servicio/autenticador.service';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatIconModule,
    RouterLink, 
    RouterLinkActive, 
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',

})
export class MenuComponent {
  private _router = inject(Router);
  private autenticadorServicio = inject(AutenticadorService);

  

  //CERRA SESION TRAE METODO DE SERVICIO

 
 
  async cerrarSesion(): Promise<void> {
    try {
      await this.autenticadorServicio.cerrarSesion();
      this._router.navigateByUrl('/autenticacion/acceso');
    } catch (error) {
      console.log(error);
    }
  }

  
}
