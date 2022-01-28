import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './authService';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private service: AuthService, private _router: Router) {}

  canActivate(): boolean {
    if (this.service.isloggedin()) {
      return true;
    } else {
      return false;
    }
  }
}
