import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { AuthService } from '../auth/authService';
import { LoadingService } from '../services/loading.service';

// import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService){}
  private totalRequests = 0;
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${AuthService.getToken()}`,
      },
    });
    this.totalRequests++;
    this.loadingService.setLoading(true);
    return next.handle(req).pipe(
      finalize(() => {
        this.loadingService.setLoading(false);
      })
    );
  }
}
