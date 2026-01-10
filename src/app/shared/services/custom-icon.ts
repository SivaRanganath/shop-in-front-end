import { Injectable } from '@angular/core';
import { IgxIconService } from "igniteui-angular/icon";
import { CUSTOM_ICONS } from './icons';

@Injectable({
  providedIn: 'root',
})
export class CustomIcon {
  homeIcon = '';
  constructor(private iconService: IgxIconService) {

  }

  addIgxicons() {
    this.iconService.addSvgIconFromText('home-icon', CUSTOM_ICONS.home, 'weather');
    //     this.iconService.addSvgIcon('sunny', 'https://www.infragistics.com/angular-demos-lob/assets/images/icons/sunny.svg', 'weather');
    //     this.iconService.addSvgIcon('thunderstorms', 'https://www.infragistics.com/angular-demos-lob/assets/images/icons/thunderstorms.svg', 'weather');
  }
}
