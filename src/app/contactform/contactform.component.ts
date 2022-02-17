import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EngineService } from '../engine/engine.service';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'matt-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss'],
})
export class ContactformComponent implements OnInit {
  constructor(private fb: FormBuilder, private apiService: ApiserviceService, private engineService:EngineService) {}

  ngOnInit(): void {}

  contactForm = this.fb.group({
    name: [null , Validators.required],
    phone: [null, Validators.required],
    enquiry:[null,Validators.required]
  });

  message: any |undefined;

  submit(post: any) {
    this.apiService.post(post, 'User', 'ContactForm').subscribe((data) => {
      this.message = { success: data.success, notifymessage: data.message };
      this.engineService.changeNotifyMessage(this.message);
    });
  }
}

