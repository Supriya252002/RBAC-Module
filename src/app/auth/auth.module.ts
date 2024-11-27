import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { DashbooardComponent } from './dashbooard/dashbooard.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    DashbooardComponent
  ]
})
export class AuthModule { }
