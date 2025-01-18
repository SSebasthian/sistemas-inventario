import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AutenticadorService, Credencial } from '../../../arquitectura/servicio/autenticador.service';


interface accesoForm{
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-acceso',
  standalone: true,
  imports: [
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './acceso.component.html',
  styleUrl: './acceso.component.css'
})
export class AccesoComponent {

  mostrarOcultarClave = true; // Mostrar - Ocultar Contraseña FORMULARIO
  formBuilder = inject(FormBuilder); // Formulario reactivo
  private AutenticadorService = inject(AutenticadorService); // FUNCION DE ENVIO DEL FORMULARIO
  private router = inject(Router); // Redireccion a pagina despues de iniciar sesion


  //******************* VALIDAR FORMULARIO *********************
  formularioAcceso: FormGroup<accesoForm> = this.formBuilder.group({
    // VALIDACION CORREO
    email: this.formBuilder.control('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    // VALIDACION CONTRASEÑA
    password: this.formBuilder.control('', {
      validators: Validators.required,
      nonNullable: true,
    }),
  });


  // FUNCION PARA OBTENER EL ERROR DEL FORMULARIO
  get validacionCorreo(): string | boolean {
    const control = this.formularioAcceso.get('email');
    const esValido = control?.invalid && control.touched;
    if (esValido) {
      return control.hasError('required')
        ? 'Campo Requerido'
        : 'Correo Invalido';
      }
      return false;
  }


  // FUNCION DE ENVIO DEL FORMULARIO
  async envioAcceso(): Promise<void>{
    if ( this.formularioAcceso.invalid) return;
  
    const credencial: Credencial = {
      email: this.formularioAcceso.value.email || '',
      password: this.formularioAcceso.value.password || '',
    };

    try {
      await this.AutenticadorService.accesoCorreoContrasena(credencial);
        alert("Inicio de Sesion Exitoso");
        this.router.navigateByUrl('/inicio')
      } catch (error: any) {
      // Firebase no distingue entre "correo no encontrado" y "contraseña incorrecta", por lo tanto, mostramos un mensaje genérico
      if (error.code === 'auth/invalid-credential') {
        alert('Correo o contraseña incorrectos.');
      } else {
        console.error('Error de sesión:', error.message);
      }
    }
  }
  
}
