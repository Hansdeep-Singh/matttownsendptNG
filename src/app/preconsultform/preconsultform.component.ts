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
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.preConsultForm.value);
  }

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
    personalTraining: this.fb.group({
      personalTrainingYes: [''],
      personalTrainingNo: [''],
    }),
    ptExperienceOnYes: [''],
    ptExperienceOnNo: this.fb.group({
      anyThoughtsYes: [''],
      anyThoughtsNo: [''],
    }),
  });

  getErrorEmail() {}
  submit(post: any) {
    alert(post);
  }

  animateName: boolean | undefined;
}

function checkboxse(formGroup: FormGroup) {
  Object.keys(formGroup.controls).forEach((key) => {
    console.log(key);
  });
}
