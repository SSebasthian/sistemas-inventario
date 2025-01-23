import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './pagina/menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { AutenticadorService } from './arquitectura/servicio/autenticador.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sistemas-inventario';
  menuMinimizado = false; // Estado inicial del menú
  isSesionIniciada$!: Observable<boolean>; // Observable para verificar la sesión
  

  constructor(private autenticadorServicio: AutenticadorService) {}

  ngOnInit() {
    // Transformar el estado de autenticación en un booleano
    this.isSesionIniciada$ = this.autenticadorServicio.estadoIngresoSistema$.pipe(
      map((usuario) => !!usuario) // `true` si el usuario existe, `false` de lo contrario
    );
  }

  menuMinMax() {
    this.menuMinimizado = !this.menuMinimizado; // Cambia el estado al hacer clic
  }

}
