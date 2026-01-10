import { AfterViewInit, Component, Renderer2, signal } from '@angular/core';
import { CustomIcon } from './shared/services/custom-icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  protected readonly title = signal('shop-in');

  constructor(private customIcon: CustomIcon,
    private renderer: Renderer2
  ) {
   this.setTheme('light');
  }

  setTheme(theme: 'dark' | 'light') {
    const body = document.body;

    this.renderer.removeClass(body, 'dark-theme');
    this.renderer.removeClass(body, 'light-theme');

    this.renderer.addClass(body, `${theme}-theme`);
  }

  ngAfterViewInit() {
    this.customIcon.addIgxicons();
  }
}
