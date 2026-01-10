import { NgModule } from "@angular/core";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';

@NgModule({
imports: [ToastrModule.forRoot({
    timeOut: 2500,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
}),NgxSpinnerModule],
  exports: [
    ToastrModule,
    NgxSpinnerModule
  ]

})


export class AppCommonModule { }