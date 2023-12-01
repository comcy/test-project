import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// This component is used to display a 404 error page.
// It is used in the app-routing.module.ts.
// It is a standalone component.
@Component({
  selector: 'app-four-zero-four',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './four-zero-four.component.html',
  styleUrl: './four-zero-four.component.scss',
})
export class FourZeroFourComponent {}
