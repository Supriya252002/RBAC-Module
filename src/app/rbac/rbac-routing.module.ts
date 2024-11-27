import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { DashbooardComponent } from '../auth/dashbooard/dashbooard.component';

const routes: Routes = [
  {path:'',component:DashbooardComponent},
  { path: 'users', component: UserComponent },
  { path: 'roles', component: RoleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RbacRoutingModule { }
