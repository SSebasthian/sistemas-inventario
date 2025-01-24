import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RegUsuarioComponent } from '../reg-usuario/reg-usuario.component';
import { RegEquipoComponent } from '../reg-equipo/reg-equipo.component';
import { RegTelefonoComponent } from '../reg-telefono/reg-telefono.component';
import { RegTabletComponent } from '../reg-tablet/reg-tablet.component';


@Component({
  selector: 'app-opciones',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    RegUsuarioComponent,
    RegEquipoComponent,
    RegTelefonoComponent,
    RegTabletComponent
  ],
  templateUrl: './opciones.component.html',
  styleUrl: './opciones.component.css'
})
export class OpcionesComponent {

  componenteActivo: string = ''; // Puede ser 'usuario', 'equipo', o vacío

 // Método para alternar la visibilidad del componente de registro
 mostrarComponenteRegistroUsuario() {
  this.componenteActivo = this.componenteActivo === 'usuario' ? '' : 'usuario';
 }

 // Método para alternar la visibilidad del componente de registro 
 mostrarComponenteRegistroEquipo() {
  this.componenteActivo = this.componenteActivo === 'equipo' ? '' : 'equipo';
 }

 // Método para alternar la visibilidad del componente de registro
 mostrarComponenteRegistroTelefono() {
  this.componenteActivo = this.componenteActivo === 'telefono' ? '' : 'telefono';
 }

 // Método para alternar la visibilidad del componente de registro
 mostrarComponenteRegistroTablet() {
  this.componenteActivo = this.componenteActivo === 'tablet' ? '' : 'tablet';
 }

}
