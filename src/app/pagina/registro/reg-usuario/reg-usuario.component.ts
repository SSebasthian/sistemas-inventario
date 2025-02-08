import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistroOpcionesService } from '../../../arquitectura/servicio/registro-opciones.service';


@Component({
  selector: 'app-reg-usuario',
  standalone: true,
  imports: [
    MatIconModule,
    ReactiveFormsModule,
    CommonModule,
    MatTooltipModule
  ],
  templateUrl: './reg-usuario.component.html',
  styleUrl: './reg-usuario.component.css'
})
export class RegUsuarioComponent {
  formularioUsuario: FormGroup;
  mostrarOcultarClave = true;


  constructor(private registroOpcionesService: RegistroOpcionesService){
    this.formularioUsuario = new FormGroup({
      cedula: new FormControl('', [Validators.required]) ,
      apellido: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      cargo: new FormControl('', [Validators.required]),
      infCritica: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      claveCorreo: new FormControl('', [Validators.required]),
      extenciontel: new FormControl('', [Validators.required]), 
      fechaIngreso: new FormControl('', [Validators.required]),
      estado: new FormControl(true) 
    });
  }

  // Función para verificar si un campo es inválido y ha sido tocado
  validacionFormRegUsuario(campoDescrip: string): boolean | undefined {
    const campo = this.formularioUsuario.get(campoDescrip);
    return campo?.invalid && campo?.touched;
  }


  async registrarUsuario() {
    if (this.formularioUsuario.invalid){
      alert("Formulario inválido. Por favor, llena todos los campos requeridos.");
      return;
    }
    console.log(this.formularioUsuario.value)
    const usuarioGuardado = await this.registroOpcionesService.agregarUsuario(this.formularioUsuario.value)
    console.log(usuarioGuardado);
  }

  
  
}
