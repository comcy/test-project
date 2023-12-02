import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'src/app/shared/services/http/message.service';
import { Message } from 'src/app/shared/models/message';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Subject, takeUntil } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MessageDetailDialogComponent } from 'src/app/shared/components/message/message-detail-dialog/message-detail-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.scss',
})
export class MessageListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public displayedColumns: string[] = ['id', 'message', 'action'];

  public resultsLength = 0;
  public isLoadingResults = true;
  public isRateLimitReached = false;

  public messages: Message[] = [];

  private toDestroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private messageService: MessageService // private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.messageService
      .getAllMessages()
      .pipe(takeUntil(this.toDestroy$))
      .subscribe((messages) => {
        this.messages = messages;
        this.resultsLength = messages.length;
      });
  }

  ngOnDestroy(): void {
    this.toDestroy$.next();
    this.toDestroy$.complete();
  }

  openDialog(id: string): void {
    this.router.navigate([{ outlets: { popup: ['detail', id] } }]);
  }
}
