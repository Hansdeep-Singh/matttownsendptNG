import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'matt-preconsultform',
  templateUrl: './preconsultform.component.html',
  styleUrls: ['./preconsultform.component.scss'],
})
export class PreconsultformComponent implements OnInit {
  constructor(private fb: FormBuilder, private apiService: ApiserviceService) {}

  ngOnInit(): void {}

  days: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thrusday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  checks: boolean = true;

  preConsultForm = this.fb.group({
    name: [null, Validators.required],
    dob: [null, Validators.required],
    phone: [null, Validators.required],
    // name: [null],
    // dob: [null],
    // phone: [0],
    email: [null],
    fitnessGoals: this.fb.group({
      weightLoss: [false],
      strength: [false],
      bodyShape: [false],
      sports: [false],
      health: [false],
      injuryRecovery: [false],
    }),
    occupation: [null],
    activityLevel: [null],
    smoke: [false],
    drink: [false],

    injuries: [null],
    medical: [null],
    gymMember: [false],
    howLong: [null],
    personalTraining: [false],
    personalTrainingExperience: [null],
    trainingSession: [false],
    stress: [0],
    sleep: [0],
    energy: [0],
    motivation: [0],
    currentExercise: this.fb.group({
      monday: this.fb.group({ mondayActivities: [null], mondayEffort: [null] }),
      tuesday: this.fb.group({
        tuesdayActivities: [null],
        tuesdayEffort: [null],
      }),
      wednesday: this.fb.group({
        wednesdayActivities: [null],
        wednesdayEffort: [null],
      }),
      thursday: this.fb.group({
        thursdayActivities: [null],
        thursdayEffort: [null],
      }),
      friday: this.fb.group({ fridayActivities: [null], fridayEffort: [null] }),
      saturday: this.fb.group({
        saturdayActivities: [null],
        saturdayEffort: [null],
      }),
      sunday: this.fb.group({ sundayActivities: [null], sundayEffort: [null] }),
    }),
  });

  showMember: boolean | undefined;
  showExperience: boolean | undefined;

  toggleMember(e: MatSlideToggleChange) {
    this.showMember = e.checked;
  }

  togglePersonalTraining(e: MatSlideToggleChange) {
    this.showExperience = e.checked;
  }

  submit(post: any) {
    this.apiService.post(post, 'Home', 'PreConsultForm').subscribe((data) => {
      console.log(data);
    });
  }

  animateName: boolean | undefined;
}
