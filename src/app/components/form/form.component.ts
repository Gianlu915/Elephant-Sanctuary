import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/message.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  messageForm: FormGroup;
  showSuccessMessage = false;

  constructor(private fb: FormBuilder, private messageService: MessageService,private router: Router ) {
    this.messageForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required,  Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {

      const newMessage: Message = {
      id: 0,
      name: this.messageForm.get('name')?.value,
      surname: this.messageForm.get('surname')?.value,
      email: this.messageForm.get('email')?.value,
      message: this.messageForm.get('message')?.value
    };


    if (this.router.url.includes('volunteer')) {
      this.messageService.addVolunteerMessage(newMessage).subscribe(
        (res) => {
          this.messageForm.reset();
          this.showSuccessMessage = true;
          setTimeout(() => (this.showSuccessMessage = false), 5000);
        },
        (err) => {
          alert('Error sending volunteer message');
        }
      );
    } else {
      this.messageService.addMessage(newMessage).subscribe(
        (res) => {
          this.messageForm.reset();
          this.showSuccessMessage = true;
          setTimeout(() => (this.showSuccessMessage = false), 5000);
        },
        (err) => {
          alert('Error sending general message');
        }
      );
    }
  }
}




  