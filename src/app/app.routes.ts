import { Routes } from '@angular/router';
import { TesteComponent } from './teste/teste.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'flights',
        pathMatch: 'full'
    },
    {
        path: 'teste',
        component: TesteComponent,
        pathMatch: 'full',
      },
];
