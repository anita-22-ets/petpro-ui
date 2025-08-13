import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  resetForm: FormGroup;
  submitted = false;
  message = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.resetForm = this.fb.group({
      emailOrPhone: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.resetForm.valid) {
      const value = this.resetForm.value.emailOrPhone;
      this.http.post('http://localhost:8080/api/auth/forgot-password', { emailOrPhone: value })
        .subscribe({
          next: () => {
            this.message = 'If the account exists, a reset link/code has been sent.';
          },
          error: () => {
            this.message = 'Failed to send reset instructions. Please try again.';
          }
        });
    }
  }
}
