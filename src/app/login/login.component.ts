import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  showPasswordInstructions = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.log('Login successful:', { username, password });

      // Navigate to another page after successful login
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Form is invalid');
    }
  }

  togglePasswordInstructions() {
    this.showPasswordInstructions = !this.showPasswordInstructions;
  }

  forgotPassword() {
    alert('Redirecting to Forgot Password page...');
    // Navigate to a forgot password page (if implemented)
    this.router.navigate(['/forgot-password']);
  }
}