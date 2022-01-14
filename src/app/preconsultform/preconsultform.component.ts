import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'matt-preconsultform',
  templateUrl: './preconsultform.component.html',
  styleUrls: ['./preconsultform.component.scss'],
})
export class PreconsultformComponent implements OnInit {
  constructor(private fb: FormBuilder) {
    // this.preConsultForm = fb.group({
    //   weightLoss: false,
    //   strength: false,
    //   bodyShape: false,
    //   sports: false,
    //   health: false,
    //   injuryRecovery: false,
    // });
  }

  ngOnInit(): void {}

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
    activityLevel: this.fb.group({
      sedentary: [''],
      moderate: [''],
      active: [''],
      hightlyActive: [''],
    }),

    smoke: this.fb.group({
      smokeYes: [''],
      smokeNo: [''],
    }),

    drink: this.fb.group({
      drinkYes: [''],
      drinkNo: [''],
    }),
    injuries:[''],
    medical:[''],
    exercise: this.fb.group({
      exerciseYes: [''],
      exerciseNo: [''],
    }),
    howLong:[''],
    personalTraining: this.fb.group({
      personalTrainingYes: [''],
      personalTrainingNo: [''],
    }),
    ptExperienceOnYes:[''],
    ptExperienceOnNo: this.fb.group({
      anyThoughtsYes: [''],
      anyThoughtsNo: [''],
    }),
  });
  

  getErrorEmail() {
    
  }
  submit(post:any){
    alert(post);
  }

  animateName: boolean | undefined;
}
