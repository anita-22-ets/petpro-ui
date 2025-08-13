import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
 
@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private router: Router, private cookieService: CookieService) {}
 
  canActivate(): boolean {
    const jwt = this.cookieService.get('authToken');
    console.log('AuthGuard: JWT:', jwt);
    if (jwt) {
      console.log('AuthGuard: JWT present');
      return true; // Allow access if JWT is present
    } else {
      this.router.navigate(['/login']); // Redirect to login if JWT is missing
      return false;
    }
  }
}
 