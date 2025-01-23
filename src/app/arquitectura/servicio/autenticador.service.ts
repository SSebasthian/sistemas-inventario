import { Injectable, inject} from '@angular/core';
import { Auth, signInWithEmailAndPassword, authState} from '@angular/fire/auth';
import { Router } from '@angular/router';



export interface Credencial {  
  email: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class AutenticadorService {
  private autenticador : Auth = inject(Auth);
  private router: Router = inject(Router); // Inyección del Router


  // SE VALIDA SI EL USUARIO ESTA LOGUEADO O NO
  readonly estadoIngresoSistema$ = authState(this.autenticador);

  // VALIDA SI EXISTE LOS DATOS Y SI TODO ESTA BIEN PERMITE EL INGRESO
  accesoCorreoContrasena(credencial: Credencial) {
    return signInWithEmailAndPassword(
      this.autenticador,
      credencial.email,
      credencial.password
    );
  }

   //DESLOGUEO
   cerrarSesion(): Promise<void>{
    return this.autenticador.signOut()
  }
}