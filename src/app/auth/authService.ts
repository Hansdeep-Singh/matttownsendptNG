import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiserviceService } from '../services/apiservice.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  static getToken() {
    return localStorage.getItem('token');
  }
  constructor(private apiService: ApiserviceService) {}
  ngOnInit() {}

  isloggedin(): boolean {
    return !!localStorage.getItem('token');
  }
  logout(): Observable<any> {
    localStorage.clear();
    return of(void 0);
    // this.apiService.post(null, 'User', 'Logout').subscribe((data) => {
    //   alert(data);
    // });
  }
}
