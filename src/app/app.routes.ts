import { Routes } from '@angular/router';
import { AccesoComponent } from './pagina/autenticacion/acceso/acceso.component';
import { InicioComponent } from './pagina/inicio/inicio.component';

import { estadoPrivado, estadoPublico } from './arquitectura/guardia/enrutamiento.guard';


export const routes: Routes = [
    {path: '',
        component: AccesoComponent,
        canActivate: [estadoPublico],
    },
    {path: 'autenticacion',
        children:[
            {path: 'acceso',
            component: AccesoComponent,
            canActivate: [estadoPublico],
            },
        ],
    },
    {path: 'inicio',
        component: InicioComponent,
        canActivate: [estadoPrivado],
    },
];