import { HttpInterceptorFn } from '@angular/common/http';

export const httpheaderInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('request is on its way ' + req.url);  
  const cloneRequest = req.clone({
    headers: req.headers.set('Authorization', 'Token Bearer'),
  })
  return next(cloneRequest);
};
