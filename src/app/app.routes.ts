import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },  
  { path: 'login', component: LoginComponent },
  { path: 'user-registration', component: UserRegistrationComponent }
];
