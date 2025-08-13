import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {

  paymentForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.paymentForm.valid) {
      // Here you would integrate with a payment gateway
      console.log('Payment Submitted', this.paymentForm.value);
    }
  }
}
}
