import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { EngineService } from '../engine/engine.service';

@Component({
  selector: 'matt-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss'],
})
export class NotifyComponent implements OnInit {
  @Output() close: EventEmitter<boolean> = new EventEmitter();
  message: string | undefined;
  constructor(private engineService: EngineService) {}
  subscription: Subscription | undefined;
  counter: number = 6;
  ngOnInit(): void {
    this.engineService.currentNotifyMessage.subscribe((message) => {
      if (message && !message?.success) {
        this.message = message.notifymessage;
        this.subscription = interval(1000).subscribe(() => {
          this.counter--;
          if (this.counter === 0) {
            this.close.emit(false);
            if (this.subscription) this.subscription?.unsubscribe();
          }
        });
      }
      this.counter=6;
    });
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription?.unsubscribe();
  }

  closeNotify() {
    this.close.emit(false);
  }
}
