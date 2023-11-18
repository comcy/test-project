import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { DialogData } from './message-detail-dialog.interfaces';
import { MessageDetailFormComponent } from '../message-detail-form/message-detail-form.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-message-detail-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MessageDetailFormComponent,
  ],
  templateUrl: './message-detail-dialog.component.html',
  styleUrl: './message-detail-dialog.component.scss',
})
export class MessageDetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
