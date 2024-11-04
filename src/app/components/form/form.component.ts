import { Component } from '@angular/core';
import { Message } from '../../models/message.model';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  newMessage: Message = {
    id: 0,            // Puoi inizializzare `id` come 0, oppure lasciarlo non definito se opzionale
    name: '',
    surname: '',
    email: '',
    message: ''
  };

  constructor(private messageService: MessageService) {
  }

  onSubmit(){

    this.messageService.addMessage(this.newMessage).subscribe(
      (res) => {
        alert('Message Sent');
      },
      (err) => {
        alert('Error sending message');
      }
    )

  }
}
