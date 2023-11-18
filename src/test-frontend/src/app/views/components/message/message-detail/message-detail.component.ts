import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { MessageDetailDialogComponent } from '../../../../shared/components/message/message-detail-dialog/message-detail-dialog.component';
import { Message } from '../../../../shared/models/message';
import { MessageService } from '../../../../shared/services/http/message.service';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrl: './message-detail.component.scss',
})
export class MessageDetailComponent {
  public message!: Message;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(take(1)).subscribe((params) => {
      const id = params['id'];

      this.messageService.getMessageById(id).subscribe((message) => {
        this.openDialog(message);
      });
    });
  }

  openDialog(message: Message): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      message,
    };

    const dialogRef = this.dialog.open(
      MessageDetailDialogComponent, // MessageDetailDialogComponent loaded by Angular Material DialogRef
      dialogConfig
    );

    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate([
        '../',
        { outlets: { popup: null }, relativeTo: this.activatedRoute },
      ]);
    });
  }
}
