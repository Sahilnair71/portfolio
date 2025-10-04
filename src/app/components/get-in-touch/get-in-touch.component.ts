// src/app/components/get-in-touch/get-in-touch.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Needed for ngFor, ngIf
import { MatIconModule } from '@angular/material/icon'; // For Material Icons

@Component({
  selector: 'app-get-in-touch',
  standalone: true,
  imports: [CommonModule, MatIconModule], // Import MatIconModule
  templateUrl: './get-in-touch.component.html',
  styleUrl: './get-in-touch.component.scss'
})
export class GetInTouchComponent {
  // Your contact details
  contactInfo = [
    { 
      icon: 'email', 
      label: 'Email', 
      value: 'sahilnair71@gmail.com', // Replace with your actual email
      link: 'mailto:sahilnair71@gmail.com' 
    },
    { 
      icon: 'location_on', 
      label: 'Location', 
      value: 'Paderborn, Deutschland', // Replace with your actual location
       // Optional map link
    }
  ];

  // Your social/connect links
  connectLinks = [
    { 
      icon: 'linkedin', 
      label: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/sahilnair/',
      // Unified gradient for all buttons
      bgColor: 'bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 hover:brightness-110 dark:from-cyan-500 dark:via-sky-500 dark:to-emerald-500'
    },
    { 
      icon: 'github', 
      label: 'GitHub', 
      url: 'https://github.com/SahilNair71',
      // Unified gradient for all buttons
      bgColor: 'bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 hover:brightness-110 dark:from-cyan-500 dark:via-sky-500 dark:to-emerald-500'
    },
    { 
      icon: 'mail', 
      label: 'Email', 
      url: 'mailto:sahilnair@gmail.com', 
      // Unified gradient for all buttons
      bgColor: 'bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 hover:brightness-110 dark:from-cyan-500 dark:via-sky-500 dark:to-emerald-500' 
    }
  ];

  constructor() { }
}