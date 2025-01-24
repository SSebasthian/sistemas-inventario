import { Routes } from '@angular/router';
import { AccesoComponent } from './pagina/autenticacion/acceso/acceso.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { OpcionesComponent } from './pagina/registro/opciones/opciones.component';
import { RegUsuarioComponent } from './pagina/registro/reg-usuario/reg-usuario.component';
import { RegEquipoComponent } from './pagina/registro/reg-equipo/reg-equipo.component';

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
    {path: 'registro',
        children:[
            {path: 'opciones',
                component: OpcionesComponent,
                canActivate: [estadoPrivado],
            },
            {path: 'opciones',
                component: RegUsuarioComponent,
                canActivate: [estadoPrivado],
            },
            {path: 'opciones',
                component: RegEquipoComponent,
                canActivate: [estadoPrivado],
            },
        ],
    },
];