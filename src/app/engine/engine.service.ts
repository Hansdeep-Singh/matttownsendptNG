import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EngineService {
  private notifyMessageSource = new BehaviorSubject<any>('fffffffffffffffffffffffffffff');
  currentNotifyMessage = this.notifyMessageSource.asObservable();
  constructor() {}
  changeNotifyMessage(notify: any) {
    this.notifyMessageSource.next(notify);
  }
}
