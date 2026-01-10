import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../../common-module';
import { Dashboard } from './dashboard';
import { NavbarComponent } from './navbar-component/navbar-component';
import { DashboardRoutingModule } from './dashboard-routing-module';



@NgModule({
  declarations: [
    Dashboard,
    Dashboard,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
