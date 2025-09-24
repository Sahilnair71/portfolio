import { Component, effect, HostBinding, inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { ThemeStore } from './store/themestore';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutCardComponent } from './about-card/about-card.component';
import { isPlatformBrowser } from '@angular/common';
import { AboutSectionComponent } from './about-section/about-section.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, AboutCardComponent, AboutSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  private readonly themeStore = inject(ThemeStore);
  private readonly platformId = inject(PLATFORM_ID);
  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      effect(() => {
        const isDarkMode = this.themeStore.isDarkMode();
        document.body.classList.toggle('dark', isDarkMode);
      });
    }
  }
}
