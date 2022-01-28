import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { labelAnimation } from '../animations/animate';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'matt-login',
  templateUrl: './login.component.html',
  animations: [labelAnimation.labelTrigger],
})
export class LoginComponent implements OnInit {
  @Output() close: EventEmitter<boolean> = new EventEmitter();
  animateEmailAddress: boolean = false;
  animatePassword: boolean = false;
  constructor(private _router:Router,private apiservice: ApiserviceService) {}
  ngOnInit(): void {}
  loginForm = new FormGroup({
    emailAddress: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl(''),
  });

  closeLogin() {
    this.close.emit(false);
  }

  animateEmailAddressFn() {
    this.animateEmailAddress = true;
  }

  animatePasswordFn() {
    this.animatePassword = true;
  }

  submit() {
    this.apiservice
      .post(this.loginForm.value, 'User', 'Login')
      .subscribe((data) => {
        if(data.success){
          this.close.emit(false);
          this._router.navigate(["./member"]);
        }
        const obj = JSON.parse(data.message);
        localStorage.setItem("token", obj.AccessToken);
      });
  }
}
