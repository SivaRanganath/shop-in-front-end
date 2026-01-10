import { Component, Injector } from "@angular/core";
import { environment } from "./environment";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { IgxIconService } from "igniteui-angular/icon";


@Component({
  template: ''
})

export class AppComponentBase {
    baseUrl = environment.apiBaseUrl;
    injector: Injector;
    spinnerService: NgxSpinnerService
    notify: ToastrService;

    constructor(injector: Injector) {
      this.injector = injector;
      this.spinnerService = injector.get(NgxSpinnerService);
      this.notify = injector.get(ToastrService);;
    }

    showSpinner() {
        this.spinnerService.show(undefined, {
       type: 'line-scale',
       size: 'medium'
    });
    }

    hideSpinner() {
      this.spinnerService.hide();
    }
}