import { Component, OnInit } from '@angular/core';
import { ApiErrorResult } from '../../../core/models/error.model';
import { ErrorHandler } from '../../../core/services/error-handler';

@Component({
  selector: 'form-errors',
  imports: [],
  templateUrl: './form-errors.html',
  styleUrl: './form-errors.scss'
})
export class FormErrors implements OnInit {
  errors?: ApiErrorResult;

  constructor(private errorHandler: ErrorHandler) {
  }
  ngOnInit(): void {
    this.errorHandler.apiError$.subscribe({
      next: (error) => {
        this.errors = error;
      },
      error: (err) => {
        console.error('Error while handling API error:', err);
      }
    });
  }
}
