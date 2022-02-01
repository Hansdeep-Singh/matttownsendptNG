import { Component, OnInit } from '@angular/core';
import { notifyAnimation } from './animations/animate';
import { EngineService } from './engine/engine.service';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [notifyAnimation.notifyTrigger],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit  {
  title = 'matttownsendNG';
  constructor(private engineService: EngineService, public loadingService : LoadingService) {}
  ngOnInit(): void {
    this.engineService.currentNotifyMessage.subscribe((message) => {
      if (message.success == true) {
        this.flagShowHide = message.success;
      }
    });}
  flagShowHide: boolean = false;
  closeNotification($event:boolean):void{
    this.flagShowHide = $event;
  }
}
 
