import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {

  feedbackForm: FormGroup;
  submitted = false;

  categories = ['Service', 'App', 'Other'];

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      rating: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
      message: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.feedbackForm.valid) {
      // Here you would send the feedback to your backend API
      console.log('Feedback Submitted', this.feedbackForm.value);
    }
  }
}
