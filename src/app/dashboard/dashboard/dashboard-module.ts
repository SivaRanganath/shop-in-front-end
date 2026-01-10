import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../../common-module';
import { Dashboard } from './dashboard';



@NgModule({
  declarations: [
    Dashboard,
    Dashboard
  ],
  imports: [
    CommonModule,
    AppCommonModule
  ]
})
export class DashboardModule { }
