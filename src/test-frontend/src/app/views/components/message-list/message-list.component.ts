import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/shared/services/http/message.service';
import { Message } from 'src/app/shared/models/message';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.scss',
})
export class MessageListComponent implements OnInit {
  public messages: Message[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getAllMessages().subscribe((messages) => {
      console.log(messages);
      this.messages = messages;
    });
  }
}
