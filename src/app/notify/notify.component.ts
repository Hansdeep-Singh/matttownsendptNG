import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  ngOnInit(): void {
    this.engineService.currentNotifyMessage.subscribe((message) => {
      if (message.success == true) {
        this.message = message.notifymessage;
      }
    });
  }
}
