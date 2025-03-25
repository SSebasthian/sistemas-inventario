import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms'; 
import { RegistroOpcionesService } from '../../../arquitectura/servicio/registro-opciones.service';



@Component({
  selector: 'app-reg-equipo',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './reg-equipo.component.html',
  styleUrl: './reg-equipo.component.css'
})
export class RegEquipoComponent {
  seleccionTipoEquipo: string = '';
  seleccionMarca: string = '';
  seleccionModelo: string = '';
  seleccionSistemaOperativo : string = '';
  seleccionSistemaOperativoVersion: string = '';
  imagenUrl: string | null = null;
  
  constructor (private registroOpcionesService: RegistroOpcionesService){ }

 

  // Método que se llama cuando se selecciona un modelo
  async ModeloSeleccionadoBuscarImg(modelo: string) {
    // Llama al servicio para obtener la URL de la imagen
    this.imagenUrl = await this.registroOpcionesService.obtenerImagenDesdeStorage(modelo);
    // Muestra la URL de la imagen si fue obtenida correctamente
    if (this.imagenUrl) {
      console.log("Imagen URL recibida:", this.imagenUrl);  // Verifica que la URL se recibió correctamente
    } else {
      console.log("No se pudo obtener la URL de la imagen.");  // Si no se pudo obtener la URL
    }
  }


  
}

