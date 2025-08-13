import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {
  registrationForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private http: HttpClient) { // <-- Inject HttpClient
    this.registrationForm = this.fb.group({
      username: ['', Validators.required], // <-- Use 'username' to match API
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registrationForm.valid) {
      const { username, email, password } = this.registrationForm.value;
      this.http.post('http://localhost:8080/api/auth/register', { username, email, password })
        .subscribe({
          next: (response) => {
            console.log('Registration successful:', response);
            alert('Registration successful!');
            // Optionally, redirect to login or another page
          },
          error: (err) => {
            console.error('Registration failed:', err);
            alert('Registration failed. Please try again.');
          }
        });
    }
  }
}
