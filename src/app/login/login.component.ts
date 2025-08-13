import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  showPasswordInstructions = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient // <-- Inject HttpClient
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.http.post('http://localhost:8080/api/auth/login', { username, password })
        .subscribe({
          next: (response) => {
            console.log('Login successful:', response);
            this.router.navigate(['/dashboard']);
          },
          error: (err) => {
            console.error('Login failed:', err);
            alert('Login failed. Please check your credentials.');
          }
        });
    } else {
      console.log('Form is invalid');
    }
  }

  togglePasswordInstructions() {
    this.showPasswordInstructions = !this.showPasswordInstructions;
  }

  forgotPassword() {
    alert('Redirecting to Forgot Password page...');
    this.router.navigate(['/forgot-password']);
  }
}