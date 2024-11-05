import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  addMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(this.apiUrl + "messages", message);
  }

  addVolunteerMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(this.apiUrl + "volunteer", message)
  }



}
