import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ApiserviceService } from '../services/apiservice.service';
import * as moment from 'moment';

@Component({
  selector: 'matt-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  constructor(private fb: FormBuilder, private apiService: ApiserviceService) {}

  @Output() reloadCalender = new EventEmitter<boolean>();

  ngOnInit(): void {
  }


  bookingForm = this.fb.group({
    bookingDate: [null, Validators.required],
    slotId: [undefined, Validators.required],
  });

  timeSlots: timeSlot[] = [];

  bookingPost: bookingPost | undefined;

  submit(post: any) {
 
   let id = localStorage.getItem('id');
    const id2 = 'b60e41ee-5311-409a-9d96-87731e8f3645';
    //const id2 = 'C51141C9-5D18-4F3B-B22A-21216D76630F';

    this.bookingPost = {
      userId: id,
      bookingDate: moment(post.bookingDate).format('YYYY-MM-DD'),
      slotId: post.slotId,
    };

    this.apiService
      .post(this.bookingPost, 'Booking', 'AddBooking')
      .subscribe((data) => {
        Promise.resolve().then(() =>
          this.getTimeSlots(moment(post.bookingDate).format('YYYY-MM-DD'))
        );
      });

      this.reloadCalender.emit(true);
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.getTimeSlots(moment(event.value).format('YYYY-MM-DD'));
    //console.log(`${type}: ${event.value}`);
  }

  getTimeSlots(date?: string) {
    this.timeSlots = [];
    this.apiService
      .get('Booking', 'GetSlots', undefined, date)
      .subscribe((data) => {
        data.forEach((value: any) => {
          this.timeSlots.push({
            slotId: value.slotId,
            description: value.description,
          });
        });
      });
  }
}

interface timeSlot {
  slotId: number;
  description: string;
}

interface bookingPost {
  userId: string | null;
  bookingDate: string;
  slotId: number;
}
