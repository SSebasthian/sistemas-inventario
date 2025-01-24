import { Routes } from '@angular/router';
import { AccesoComponent } from './pagina/autenticacion/acceso/acceso.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { OpcionesComponent } from './pagina/registro/opciones/opciones.component';
import { RegUsuarioComponent } from './pagina/registro/reg-usuario/reg-usuario.component';
import { RegEquipoComponent } from './pagina/registro/reg-equipo/reg-equipo.component';
import { RegTelefonoComponent } from './pagina/registro/reg-telefono/reg-telefono.component';
import { RegTabletComponent } from './pagina/registro/reg-tablet/reg-tablet.component';
import { RegImpresoraComponent } from './pagina/registro/reg-impresora/reg-impresora.component';

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
            },
            {path: 'opciones',
                component: RegUsuarioComponent,
            },
            {path: 'opciones',
                component: RegEquipoComponent,
            },
            {path: 'opciones',
                component: RegTelefonoComponent,
            },
            {path: 'opciones',
                component: RegTabletComponent,
            },
            {path: 'opciones',
                component: RegImpresoraComponent,
            },
        ],
       canActivate: [estadoPrivado],
    },
];