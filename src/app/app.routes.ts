import { Routes } from '@angular/router';
import { AccesoComponent } from './pagina/autenticacion/acceso/acceso.component';
import { InicioComponent } from './pagina/inicio/inicio.component';


export const routes: Routes = [
    {path: '',
        component: AccesoComponent
    },
    {path: 'inicio',
        component: InicioComponent
    },
];
