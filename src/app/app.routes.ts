import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./rbac/rbac-routing.module').then(m => m.RbacRoutingModule) }
];
