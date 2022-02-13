import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EngineService } from '../engine/engine.service';
import { AuthService } from './authService';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private service: AuthService, private _router: Router, private engineService: EngineService) {}
 
  canActivate(): boolean {
    if (this.service.isloggedin()) {
      return true;
    } else {
      this._router.navigate(['/']);
      this.engineService.changeNotifyMessage({success : false, notifymessage : "Please login again to continue"});
      return false;
    }
  }
}
