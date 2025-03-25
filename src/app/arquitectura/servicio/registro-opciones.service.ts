import { Injectable } from '@angular/core';
import { Firestore, doc, getDoc, setDoc, } from '@angular/fire/firestore';
import { Storage, getDownloadURL, ref } from '@angular/fire/storage';

import Usuario from '../interface/usuario.interface';


@Injectable({
  providedIn: 'root'
})
export class RegistroOpcionesService {

  //se injecta firestore
  constructor(private firestore: Firestore, private storage: Storage) {  }


  /////////////////////////////////////////////////
  /////////////  AGREGAR USUARIO  /////////////////
  /////////////////////////////////////////////////

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


  /////////////////////////////////////////////////
  /////////////  AGREGAR EQUIPO  //////////////////
  /////////////////////////////////////////////////


  // Método para obtener la URL de la imagen desde Firebase Storage
  async obtenerImagenDesdeStorage(modelo: string): Promise<string | null> {
    try {
      console.log("Buscando imagen para el modelo:", modelo);  // Depuración: Ver qué modelo estás buscando
      // Referencia a la imagen en Firebase Storage
      const storageRef = ref(this.storage, `Equipos/${modelo}.png`); 
      // Obtener la URL de la imagen
      const imageUrl = await getDownloadURL(storageRef);
      return imageUrl;
    } catch (error) {
      console.error('Error obteniendo la imagen:', error);  // Si ocurre un error, lo mostramos
      return null;
    }
  }
}
