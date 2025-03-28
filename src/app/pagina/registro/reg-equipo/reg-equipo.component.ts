import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistroOpcionesService } from '../../../arquitectura/servicio/registro-opciones.service';



@Component({
  selector: 'app-reg-equipo',
  standalone: true,
  imports: [
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatTooltipModule
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
  formularioEquipo: FormGroup;
  
  constructor (private registroOpcionesService: RegistroOpcionesService){ 
    this.formularioEquipo = new FormGroup({
      serial: new FormControl('', [Validators.required]),
      tipoEquipo: new FormControl('', [Validators.required]),
      marca: new FormControl('', [Validators.required]),
      modelo: new FormControl('', [Validators.required]),
      sistemaOperativo: new FormControl('', [Validators.required]),
      versionSistemaOperativo: new FormControl('', [Validators.required]),
      bits: new FormControl('', [Validators.required]),
      ram: new FormControl('', [Validators.required]),
      tipoRam: new FormControl('', [Validators.required]),
      procesador: new FormControl('', [Validators.required]),
      disco: new FormControl('', [Validators.required]),
      tipoDisco: new FormControl('', [Validators.required]),
      plaqueta: new FormControl('', [Validators.required]),
      ordenCompra: new FormControl('', [Validators.required]),
      fechaCompra: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
      descripcion: new FormControl(''),
      imgEquipo: new FormControl('')  //almacenar la URL de la imagen

    });
    
  }

 

  // Método que se llama cuando se selecciona un modelo
  async ModeloSeleccionadoBuscarImg(modelo: string) {
    // Llama al servicio para obtener la URL de la imagen
    this.imagenUrl = await this.registroOpcionesService.obtenerImagenDesdeStorage(modelo);
    // Muestra la URL de la imagen si fue obtenida correctamente
    if (this.imagenUrl) {
      this.formularioEquipo.get('imgEquipo')?.setValue(this.imagenUrl);  // Asigna la URL al campo imgEquipo
      console.log("Imagen URL recibida:", this.imagenUrl);  // Verifica que la URL se recibió correctamente
    } else {
      console.log("No se pudo obtener la URL de la imagen.");  // Si no se pudo obtener la URL
    }
  }
  

  // Función para verificar si un campo es inválido y ha sido tocado
  validacionFormRegEquipo(campoDescrip: string): boolean | undefined {
    const campo = this.formularioEquipo.get(campoDescrip);
    return campo?.invalid && campo?.touched;
  }

  async registrarEquipo() {
    if (this.formularioEquipo.invalid){
      alert("Formulario inválido. Por favor, llena todos los campos requeridos.");
      return;
    }
    console.log(this.formularioEquipo.value)
    const equipooGuardado = await this.registroOpcionesService.agregarEquipo(this.formularioEquipo.value)
    console.log(equipooGuardado);
  }



  
  
}

