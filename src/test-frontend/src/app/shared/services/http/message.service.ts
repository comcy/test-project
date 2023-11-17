import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../../models/message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private http: HttpClient) {}

  public getAllMessages(): Observable<Message[]> {
    return this.http.get<Message[]>('http://localhost:8080/v1/message');
  }
}
