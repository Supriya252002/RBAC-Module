import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbooardComponent } from './dashbooard/dashbooard.component';

const routes: Routes = [
  {path:'',component:DashbooardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
