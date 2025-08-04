import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
  scheduleForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.scheduleForm = this.fb.group({
      type: ['family', Validators.required],
      pickupTime: ['', Validators.required],
      dropoffTime: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.scheduleForm.valid) {
      // Here you would send the form data to your backend API
      console.log('Schedule Submitted', this.scheduleForm.value);
    }
  }
}
