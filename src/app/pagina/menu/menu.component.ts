import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AutenticadorService } from '../../arquitectura/servicio/autenticador.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatIconModule,
    RouterLink, 
    RouterLinkActive, 
    CommonModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',

})
export class MenuComponent {
  private _router = inject(Router);
  private autenticadorServicio = inject(AutenticadorService);
  mostrarModal: boolean = false;

  

  //CERRA SESION TRAE METODO DE SERVICIO

  // Abrir el modal
  confirmarCierreSesion(): void {
    this.mostrarModal = true;
  }

  // Cerrar el modal
  cancelarCierreSesion(): void {
    this.mostrarModal = false;
  }
 
  async cerrarSesion(): Promise<void> {
    try {
      await this.autenticadorServicio.cerrarSesion();
      this.mostrarModal = false;
      this._router.navigateByUrl('/autenticacion/acceso');
    } catch (error) {
      console.log(error);
    }
  }

  
}
