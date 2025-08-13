import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true, // Mark as standalone
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {}
  features = [
    { text: 'Easy scheduling for family and pets', icon: 'fa fa-calendar' },
    { text: 'Secure online payments', icon: 'fa fa-lock' },
    { text: 'Real-time notifications', icon: 'fa fa-bell' },
    { text: 'Comprehensive dashboard for users and admins', icon: 'fa fa-chart-line' },
    { text: '24/7 support', icon: 'fa fa-headset' }
  ];

  navigateToLogin() {
    this.router.navigate(['/login']); // Navigate to the login route
  }

  navigateToRegistration() {
    this.router.navigate(['/user-registration']); // Navigate to the registration route
  }
}
