import { HttpInterceptorFn } from '@angular/common/http';

export const httpheaderInterceptor: HttpInterceptorFn = (req, next) => {
  const cloneRequest = req.clone({
    headers: req.headers.set('Authorization', 'Token Bearer'),
  });
  return next(cloneRequest);
};
