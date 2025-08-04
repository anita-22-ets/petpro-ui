import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { UserRegistrationComponent } from './user-registration/user-registration.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: UserRegistrationComponent },
  // Add other routes here
];
