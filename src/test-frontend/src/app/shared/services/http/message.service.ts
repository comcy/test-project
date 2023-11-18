import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../../models/message';

const MESSAGE_BASE_URL = 'http://localhost:8080/v1/message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private http: HttpClient) {}

  public getAllMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(MESSAGE_BASE_URL);
  }

  public getMessageById(id: string): Observable<Message> {
    return this.http.get<Message>(`${MESSAGE_BASE_URL}/${id}`);
  }
}
