import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent {

  donationForm: FormGroup;
  showError: boolean = false;
  showMobilePayment: boolean = false;
  showCreditCard: boolean = true;

  constructor(private fb: FormBuilder) {

    this.donationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], // Validatore per email
      amount: ['', [Validators.required, Validators.min(10)]]
    })
  }

  mobilePayment() {
    this.showMobilePayment = true;
    this.showCreditCard = false;
  }

  showCreditPayment() {
    this.showCreditCard = true;
    this.showMobilePayment = false;
  }
}
