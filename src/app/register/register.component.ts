import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'matt-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder, private apiService: ApiserviceService) {}

  ngOnInit(): void {}

  registerForm = this.fb.group({
    emailAddress: [null, Validators.required],
    password: [null, Validators.required],
  });

  submit(post: any) {
    this.apiService.post(post,'User','Register').subscribe((data)=>{
      console.log(data);
    })
  }
}
