import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth/signIn',
  },
  {
    path: 'auth',
    loadChildren: () => import('../app/modules/auth/auth.routes'),
  },
  {
    path: 'admin',
    loadChildren: () => import('../app/modules/admin-panel/admin.routes'),
  },
  { path: '**', pathMatch: 'full', redirectTo: 'admin' },
];
