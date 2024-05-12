import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

export default [
    {
        path: 'signIn',
        component: LoginComponent,
    },
    { path: '**', pathMatch: 'full', redirectTo: 'signIn' },
] as Routes;
