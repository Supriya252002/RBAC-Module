import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RbacRoutingModule } from './rbac-routing.module';
import { DashbooardComponent } from '../auth/dashbooard/dashbooard.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RbacRoutingModule,
    DashbooardComponent,
  ]
})
export class RbacModule { }
