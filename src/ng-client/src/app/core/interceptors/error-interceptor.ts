import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { ErrorHandler } from '../services/error-handler';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorHandler = inject(ErrorHandler);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 400) {
        // Handle bad request error
        errorHandler.handleBadRequest(error);
      } else if (error.status === 401) {
        // Handle unauthorized error

      } else if (error.status === 403) {
        // Handle forbidden error

      } else if (error.status === 404) {
        // Handle not found error

      } else {
        // Handle other errors
        errorHandler.handleError(error);
      }
      return throwError(() => error);
    })
  );
};
