import { Component, effect, HostBinding, inject, OnInit, Renderer2 } from '@angular/core';
import { ThemeStore } from './store/themestore';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  private readonly themeStore = inject(ThemeStore);
  private readonly renderer = inject(Renderer2);

  constructor() {
    effect(() => {
      // Accessing the signal directly to get its value
      const isDarkMode = this.themeStore.isDarkMode();
      document.body.classList.toggle('dark', isDarkMode);
    });
  }
}
