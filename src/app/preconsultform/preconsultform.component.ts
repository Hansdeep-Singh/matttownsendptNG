import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'matt-preconsultform',
  templateUrl: './preconsultform.component.html',
  styleUrls: ['./preconsultform.component.scss'],
})
export class PreconsultformComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.preConsultForm.controls['howLong'].value.name);

    //console.log(this.preConsultForm.value);
  }

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
    dob: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    fitnessGoals: this.fb.group({
      weightLoss: [''],
      strength: [''],
      bodyShape: [''],
      sports: [''],
      health: [''],
      injuryRecovery: [''],
    }),
    occupation: ['', Validators.required],
    activityLevel: ['', Validators.required],
    smoke: ['', Validators.required],
    drink: ['', Validators.required],

    injuries: [''],
    medical: [''],
    exercise: ['', Validators.required],
    howLong: [''],
    personalTraining: [''],
    personalTrainingExperience: [''],
    trainingSession: [''],
    stress: [''],
    sleep: [''],
    energy: [''],
    motivation: [''],
    currentExercise: this.fb.group({
      monday: this.fb.group({ mondayActivities: [''], mondayEffort: [''] }),
      tuesday: this.fb.group({ tuesdayActivities: [''], tuesdayEffort: [''] }),
      wednesday: this.fb.group({
        wednesdayActivities: [''],
        wednesdayEffort: [''],
      }),
      thursday: this.fb.group({
        thursdayActivities: [''],
        thursdayEffort: [''],
      }),
      friday: this.fb.group({ fridayActivities: [''], fridayEffort: [''] }),
      saturday: this.fb.group({
        saturdayActivities: [''],
        saturdayEffort: [''],
      }),
      sunday: this.fb.group({ sundayActivities: [''], sundayEffort: [''] }),
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
    alert(JSON.stringify(post));
  }

  animateName: boolean | undefined;
}
