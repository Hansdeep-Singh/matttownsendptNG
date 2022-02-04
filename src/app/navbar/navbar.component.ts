import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { loginAnimation } from '../animations/animate';
import { AuthService } from '../auth/authService';
import { EngineService } from '../engine/engine.service';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'matt-navbar',
  templateUrl: './navbar.component.html',
  animations: [loginAnimation.animateTrigger],
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private apiService: ApiserviceService,
    private engineService: EngineService
  ) {}
  flagShowHide: boolean = false;
  message: any | undefined;
  ngOnInit(): void {
  }
  toggleLogin() {
    this.flagShowHide = !this.flagShowHide;
  }
  closeLogin($event: boolean): void {
    this.flagShowHide = $event;
  }

  get isLoggedIn(): boolean {
    return this.authService.isloggedin();
  }
  logout(): void {
    this.router.navigate(['/']);
    this.apiService.post(null, 'User', 'LogOut').subscribe((data) => {
      this.message = { success: false, notifymessage: data.message };
      this.engineService.changeNotifyMessage(this.message);
    });
    this.authService.logout().subscribe();
  }
}

