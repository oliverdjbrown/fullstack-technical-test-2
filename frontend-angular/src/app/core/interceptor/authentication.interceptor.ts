import { HttpInterceptorFn } from '@angular/common/http';

export const authenticationInterceptor: HttpInterceptorFn = (req, next) => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${user?.token}`,
    },
  });

  return next(authReq);
};
