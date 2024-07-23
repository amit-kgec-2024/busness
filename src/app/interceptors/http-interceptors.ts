import { HttpInterceptorFn } from '@angular/common/http';

// Example interceptor function to add an authorization header
export const exampleInterceptor: HttpInterceptorFn = (req, next) => {
  // Clone the request and add an Authorization header
  const modifiedReq = req.clone({
    headers: req.headers.set('Authorization', 'Bearer YOUR_TOKEN_HERE')
  });

  // Pass the modified request to the next interceptor or HTTP handler
  return next(modifiedReq);
};

// Another example interceptor function to log requests
export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Intercepted request:', req);

  // Continue with the request
  return next(req);
};
