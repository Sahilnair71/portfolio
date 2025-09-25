import { Component, inject, signal } from '@angular/core';
import { ThemeStore } from '../../store/themestore';
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-navbar',
  imports: [ MatIconModule, MatButtonModule],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    isMobileMenuOpen = signal(false);

    public readonly themeStore = inject(ThemeStore);

    toggleMobileMenu() {
        this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
    }
}


