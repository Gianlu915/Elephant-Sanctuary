import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  messageForm: FormGroup;

  constructor(private fb: FormBuilder, private messageService: MessageService) {
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


    this.messageService.addMessage(newMessage).subscribe(
      (res) => {
        alert('Message Sent');
        this.messageForm.reset();
      },
      (err) => {
        alert('Error sending message');
      }
    );
  }
}
