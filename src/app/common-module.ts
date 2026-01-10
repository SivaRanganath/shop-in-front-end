import { NgModule } from "@angular/core";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { IgxIconComponent, IgxIconModule } from 'igniteui-angular/icon';
import { IgxNavbarComponent, IgxNavbarModule } from 'igniteui-angular/navbar';

@NgModule({
imports: [ToastrModule.forRoot({
    timeOut: 2500,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
}),
NgxSpinnerModule,
IgxIconComponent,
IgxNavbarComponent,
IgxNavbarModule,
IgxIconModule,
],
  exports: [
    ToastrModule,
    NgxSpinnerModule,
    IgxIconComponent,
    IgxNavbarComponent,
    IgxNavbarModule,
    IgxIconModule,
  ]

})


export class AppCommonModule { }