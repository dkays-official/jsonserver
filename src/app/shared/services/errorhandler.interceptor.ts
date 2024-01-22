import { HttpInterceptorFn } from '@angular/common/http';

export const errorhandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
