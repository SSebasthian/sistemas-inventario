import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, doc, getDoc, setDoc} from '@angular/fire/firestore';
import Usuario from '../interface/usuario.interface';


@Injectable({
  providedIn: 'root'
})
export class RegistroOpcionesService {

  //se injecta firestore
  constructor(private firestore: Firestore) {  }

  async agregarUsuario(usuario: Usuario) {
    // Primero verificamos si ya existe un documento con la cédula
    const usuarioReferencia = doc(this.firestore, 'usuario', usuario.cedula.toString());
    const revisaCedula = await getDoc(usuarioReferencia);

    if (revisaCedula.exists()) {
      console.log("El usuario ya existe");
      alert("El usuario ya existe");
      return null; // O puedes devolver algún mensaje de error si el usuario ya está registrado
    } else {
      // Si no existe, guardamos el nuevo usuario
      alert("Agregado con Exito");
      return setDoc(usuarioReferencia, usuario);
    }
  }

  nuevaArea(usuario: Usuario){
    //se guarda coleccion del formulario en base de datos
    const areaReferencia = collection(this.firestore, 'area');
    return addDoc(areaReferencia, usuario);
  }
}
