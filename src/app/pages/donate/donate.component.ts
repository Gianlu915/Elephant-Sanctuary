import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  creditCardForm!: FormGroup;
  phoneForm!: FormGroup;
  showMobilePayment: boolean = false;
  showCreditCard: boolean = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // form credit card
    this.creditCardForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      amount: ['', [Validators.required]],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expiryDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^[0-9]{3,4}$/)]]
      });

    // form mobile payment
    this.phoneForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      amount: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{9,15}$/)]]
    });
  }


  mobilePayment() {
    this.showMobilePayment = true;
    this.showCreditCard = false;
  }


  showCreditPayment() {
    this.showCreditCard = true;
    this.showMobilePayment = false;
  }

  onSubmit() {
    // Controlla quale form è visibile e valido
    if (this.showCreditCard && this.creditCardForm.valid) {
      console.log('Dati per carta di credito:', this.creditCardForm.value);
    } else if (this.showMobilePayment && this.phoneForm.valid) {
      console.log('Dati per pagamento mobile:', this.phoneForm.value);
    } else {
      console.log('Il form non è valido', this.phoneForm.value);
    }
  }
}
