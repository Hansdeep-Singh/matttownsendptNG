import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'matt-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {
  constructor(private service: ApiserviceService) {}

  getAuthorise() {
    this.service.get('User', 'Test').subscribe((data) => {
      alert(data);
    });
  }
  ngOnInit(): void {}
}
