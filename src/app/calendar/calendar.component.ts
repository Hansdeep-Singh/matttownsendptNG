import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'matt-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    //this.fnCalendar();
  }
  
  
  monthIncrement:number = 0;

  previousMonth() {
    this.monthIncrement--;
  }

  nextMonth() {
    this.monthIncrement++;
  }

  // get currentMonth():string{
  //   return moment().add(this.monthIncrement,'month').format('MMMM');
  // }

  get currentMonthYear(): monthYearConfig {
    let month = moment().add(this.monthIncrement,'month').format('MMMM');
    let year = moment().add(this.monthIncrement,'month').format('YYYY');
    let currentMonthYear = { month: month, year: parseInt(year) };
    return currentMonthYear;
  }
  get Calendar(): any[] {
    const calendar = [];
    const today = moment();
    const startDay = today.clone().startOf('month').add(this.monthIncrement,'month').startOf('week');
    const endDay = today.clone().endOf('month').add(this.monthIncrement,'month').endOf('week');
    
    let date = startDay.clone().subtract(1, 'day');
    //this.currentMonth= moment(startDay).format("MMMM");
    while (date.isBefore(endDay, 'day'))
      calendar.push({
        days: Array(7)
          .fill(0)
          .map(() => moment(date.add(1, 'day').clone()).format('DD')),
      });
    return calendar;
  }


  days: string[] | undefined = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thr',
    'Fri',
    'Sat',
  ];
  dates: string[] | undefined;
}

interface monthYearConfig{
  month:string;
  year:number;
}