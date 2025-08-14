import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ExploreServiceComponent } from './explore-service/explore-service.component';

export const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },  
  { path: 'login', component: LoginComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'services', component: ExploreServiceComponent }
];
