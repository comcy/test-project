import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Message } from 'src/app/shared/models/message';

@Component({
  selector: 'app-message-detail-form',
  standalone: true,
  imports: [
    CommonModule,
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './message-detail-form.component.html',
  styleUrl: './message-detail-form.component.scss',
})
export class MessageDetailFormComponent {
  @Input() message?: Message;

  public meassageForm!: FormGroup;
  public readonly = true;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (this.message) {
      this.meassageForm = this.formBuilder.group({
        id: [this.message.id],
        message: [this.message.message],
      });
    } else {
      this.meassageForm = this.formBuilder.group({
        id: ['', Validators.required],
        message: ['', Validators.required],
      });
    }
  }
}
