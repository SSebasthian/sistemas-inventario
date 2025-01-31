import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RegUsuarioComponent } from '../reg-usuario/reg-usuario.component';
import { RegEquipoComponent } from '../reg-equipo/reg-equipo.component';
import { RegTelefonoComponent } from '../reg-telefono/reg-telefono.component';
import { RegTabletComponent } from '../reg-tablet/reg-tablet.component';
import { RegImpresoraComponent } from '../reg-impresora/reg-impresora.component';
import { Location } from '@angular/common'; // Importar Location


@Component({
  selector: 'app-opciones',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    RegUsuarioComponent,
    RegEquipoComponent,
    RegTelefonoComponent,
    RegTabletComponent,
    RegImpresoraComponent
  ],
  templateUrl: './opciones.component.html',
  styleUrl: './opciones.component.css'
})
export class OpcionesComponent {

  componenteActivo: string = ''; // Puede ser 'usuario', 'equipo', o vacío

  constructor(private location: Location) {}


 // Método para alternar la visibilidad del componente de registro
 mostrarComponenteRegistroUsuario() {
  if (this.componenteActivo === 'usuario') {
    this.componenteActivo = '';  // Desactiva el componente
    this.location.replaceState('/registro/opciones'); // Vuelve a la ruta base
  } else {
    this.componenteActivo = 'usuario';  // Activa el componente
    this.location.replaceState('/registro/opciones/usuario'); // Cambia la URL
  }
}

 // Método para alternar la visibilidad del componente de registro 
 mostrarComponenteRegistroEquipo() {
    if (this.componenteActivo === 'equipo') {
      this.componenteActivo = '';  // Desactiva el componente
      this.location.replaceState('/registro/opciones'); // Vuelve a la ruta base
    } else {
      this.componenteActivo = 'equipo';  // Activa el componente
      this.location.replaceState('/registro/opciones/equipo'); // Cambia la URL
    }
  }

 // Método para alternar la visibilidad del componente de registro
  mostrarComponenteRegistroTelefono() {
    if (this.componenteActivo === 'telefono') {
        this.componenteActivo = '';  // Desactiva el componente
        this.location.replaceState('/registro/opciones'); // Vuelve a la ruta base
    } else {
      this.componenteActivo = 'telefono';  // Activa el componente
      this.location.replaceState('/registro/opciones/telefono'); // Cambia la URL
    }
  }

 // Método para alternar la visibilidad del componente de registro
  mostrarComponenteRegistroTablet() {
    if (this.componenteActivo === 'tablet') {
      this.componenteActivo = '';  // Desactiva el componente
      this.location.replaceState('/registro/opciones'); // Vuelve a la ruta base
    } else {
      this.componenteActivo = 'tablet';  // Activa el componente
      this.location.replaceState('/registro/opciones/tablet'); // Cambia la URL
    }
  }

 // Método para alternar la visibilidad del componente de registro
  mostrarComponenteRegistroImpresora() {
    if (this.componenteActivo === 'impresora') {
      this.componenteActivo = '';  // Desactiva el componente
      this.location.replaceState('/registro/opciones'); // Vuelve a la ruta base
    } else {
      this.componenteActivo = 'impresora';  // Activa el componente
      this.location.replaceState('/registro/opciones/impresora'); // Cambia la URL
    }
  }
}
