import { Component, inject } from '@angular/core';
import { ThemeStore } from '../store/themestore';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    public readonly themeStore = inject(ThemeStore);
}


