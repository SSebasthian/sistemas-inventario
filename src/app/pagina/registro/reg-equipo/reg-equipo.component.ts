import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms'; 


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
  
  constructor (){ }

 

  


  
}

