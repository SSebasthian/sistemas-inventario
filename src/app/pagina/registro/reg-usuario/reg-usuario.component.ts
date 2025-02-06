import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegistroOpcionesService } from '../../../arquitectura/servicio/registro-opciones.service';

@Component({
  selector: 'app-reg-usuario',
  standalone: true,
  imports: [
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './reg-usuario.component.html',
  styleUrl: './reg-usuario.component.css'
})
export class RegUsuarioComponent {
  formularioUsuario: FormGroup;


  constructor(private registroOpcionesService: RegistroOpcionesService){
    this.formularioUsuario = new FormGroup({
      cedula: new FormControl(),
      apellido: new FormControl(),
      nombre: new FormControl(),
      area: new FormControl(),
      cargo: new FormControl(),
      infCritica: new FormControl(),
      correo: new FormControl(),
      claveCorreo: new FormControl(),
      extenciontel: new FormControl(), 
      fechaIngreso: new FormControl(),
      estado: new FormControl(true) 
    });
  }

  async registrarUsuario() {
    console.log(this.formularioUsuario.value)
    const usuarioGuardado = await this.registroOpcionesService.agregarUsuario(this.formularioUsuario.value)
    console.log(usuarioGuardado);
  }
  
}
