import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './pagina/menu/menu.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sistemas-inventario';

  menuMinimizado = false; // Estado inicial del menú

  menuMinMax() {
    this.menuMinimizado = !this.menuMinimizado; // Cambia el estado al hacer clic
  }

}
