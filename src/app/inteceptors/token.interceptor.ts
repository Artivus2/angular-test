import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const TokenInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService)

  const token = localStorage.getItem('token');
  req.clone({
    setHeaders: {
      Authorization: token ? `Token ${token}` : ''
    }
  })
  return next(req);
};
