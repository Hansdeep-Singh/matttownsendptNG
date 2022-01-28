import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { loginAnimation } from '../animations/animate';
import { AuthService } from '../auth/authService';

@Component({
  selector: 'matt-navbar',
  templateUrl: './navbar.component.html',
  animations: [loginAnimation.animateTrigger],
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  flagShowHide: boolean = false;

  ngOnInit(): void {
    console.log(this.isLoggedIn);
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
    this.authService.logout().subscribe();
  }
}
