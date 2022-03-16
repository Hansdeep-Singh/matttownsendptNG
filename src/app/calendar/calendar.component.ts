import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'matt-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  constructor(private apiService: ApiserviceService) {}

  ngOnInit(): void {
    //  console.log(this.Calendar);
    this.fillCalenderArray();
  }

  calData: any[] = [];

  recieveReload($event: boolean) {
    if ($event) {
      this.fillCalenderArray();
    }
  }

  monthIncrement: number = 0;

  previousMonth() {
    this.monthIncrement--;
    this.fillCalenderArray();
  }

  fillCalenderArray() {
    this.calData = [];
    this.Calendar.forEach((element) => {
      const dayEvents = [];
      dayEvents.push(element);
      dayEvents.forEach((element) => {
        this.calData?.push(element);
      });
    });
  }

  nextMonth() {
    this.monthIncrement++;
    this.fillCalenderArray();
  }

  // get currentMonth():string{
  //   return moment().add(this.monthIncrement,'month').format('MMMM');
  // }

  get currentMonthYear(): monthYearConfig {
    let month = moment().add(this.monthIncrement, 'month').format('MMMM');
    let year = moment().add(this.monthIncrement, 'month').format('YYYY');
    let currentMonthYear = { month: month, year: parseInt(year) };
    return currentMonthYear;
  }
  get Calendar(): any[] {
    const calendar = [];
    const today = moment();
    const startDay = today
      .clone()
      .startOf('month')
      .add(this.monthIncrement, 'month')
      .startOf('week');
    const endDay = today
      .clone()
      .endOf('month')
      .add(this.monthIncrement, 'month')
      .endOf('week');

    let date = startDay.clone().subtract(1, 'day');
    // this.currentMonth= moment(startDay).format("MMMM");
    while (date.isBefore(endDay, 'day')) {
      calendar.push({
        daysEvents: Array(7)
          .fill(0)
          .map(() => {
            const calendarData = [];
            var calendarDate = moment(date.add(1, 'day').clone()).format(
              'YYYY-MM-DD'
            );
            calendarData.push([
              moment(calendarDate).format('MM/DD/YYYY'),
              this.getEvents(calendarDate),
            ]);
            return calendarData;
          }),
      });
    }
    return calendar;
  }

  getEvents(date: string) {
    let events: string[] = [];
    this.apiService
      .get('Booking', 'GetEvents', undefined, date)
      .subscribe((data) => {
        Promise.resolve().then(() => events.push(data));
      });
    return events;
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

interface monthYearConfig {
  month: string;
  year: number;
}

interface calendar {
  days: string;
  events: string[];
}

interface timeSlot {
  slotId: number;
  description: string;
}
