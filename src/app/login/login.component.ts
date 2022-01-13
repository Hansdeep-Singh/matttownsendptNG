import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'matt-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
@Output() close: EventEmitter<boolean> = new EventEmitter();

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
  submit() {
    this.apiservice
      .post(this.loginForm.value, 'Home', 'Login')
      .subscribe((data) => {
        alert(data);
      });
  }
}
