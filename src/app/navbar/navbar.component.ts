import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { loginAnimation } from '../animations/animate';

@Component({
  selector: 'matt-navbar',
  templateUrl: './navbar.component.html',
  animations: [loginAnimation.animateTrigger],
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  flagShowHide: boolean = false;
  ngOnInit(): void {}
  toggleLogin() {
    this.flagShowHide = !this.flagShowHide;
  }
  closeLogin($event:boolean){
    this.flagShowHide = $event;
  }
}
