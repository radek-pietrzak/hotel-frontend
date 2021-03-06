import {Component, OnInit} from '@angular/core';
import {Reservation} from '../model/reservation.model';
import {DatePipe} from '@angular/common';
import {HotelBookingService} from '../services/hotel-booking.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../model/user.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  datePipeString: string;
  bookingForm: FormGroup;
  errorBoolean: boolean;


  constructor(private datePipe: DatePipe, private httpService: HotelBookingService) {
    this.datePipeString = datePipe.transform(Date.now(), 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.bookingForm = new FormGroup({
        startDate: new FormControl(null, Validators.required),
        endDate: new FormControl(null, Validators.required),
        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
        isPaid: new FormControl(null, Validators.required),
        room: new FormControl(null, Validators.required),
      }
    );
  }

  onSubmit(): void {
    const guestFromForm: User = {
      firstName: this.bookingForm.value.firstName,
      lastName: this.bookingForm.value.lastName
    };
    const reservation: Reservation = {
      startDate: this.bookingForm.value.startDate,
      endDate: this.bookingForm.value.endDate,
      guest: guestFromForm,
      isPaid: this.bookingForm.value.isPaid,
      room: this.bookingForm.value.room,
    };

    this.httpService.addReservation(reservation)
      .subscribe((response) => {
          this.errorBoolean = false;
          alert('Thank you for reservation! ' + response);
        },
        () => {
          this.errorBoolean = true;
          alert('Could make this reservation');
        });
  }
}
