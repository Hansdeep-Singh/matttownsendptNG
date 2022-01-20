import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { labelAnimation } from '../animations/animate';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'matt-login',
  templateUrl: './login.component.html',
  animations: [labelAnimation.labelTrigger],
})
export class LoginComponent implements OnInit {
@Output() close: EventEmitter<boolean> = new EventEmitter();
  animateUserName:boolean = false;
  animatePassword:boolean = false;
  constructor(private apiservice: ApiserviceService) {}
  ngOnInit(): void {}
  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl(''),
  });

  closeLogin(){
    this.close.emit(false);
  }

  animateUserNameFn(){
    this.animateUserName = true;
  }

  animatePasswordFn(){
    this.animatePassword = true;
  }

  submit() {
    console.log(this.loginForm.value);
    // this.apiservice
    //   .post(this.loginForm.value, 'Home', 'Login')
    //   .subscribe((data) => {
    //     alert(data);
    //   });
  }
}
