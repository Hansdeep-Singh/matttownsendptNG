import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  subscription: Subscription | undefined;
  ngOnInit(): void {
    this.showDiv();
    this.subscription = interval(9000).subscribe(() => {
      this.showDiv();
    });
  }

  tempNumber: number | undefined;

  showdivtwo(){
    const slidesFat = document.getElementsByClassName('image-fat');
  }

  showDiv() {
    const crousalFatSlides = document.getElementsByClassName('crousal-left');
    const crousalFitSlides = document.getElementsByClassName('crousal-right');
    const label = document.getElementsByClassName('crousal-link-pad');
    const noOfFatSlides = crousalFatSlides.length;
    const noOfFitSlides = crousalFitSlides.length;
    const noOfLabel = label.length;
    if ((noOfFatSlides !== noOfFitSlides) && (noOfFatSlides !== noOfLabel) ) {
      console.log('Number of slides miss matach');
    } else {
      let ranNumber = randomNumber(0, noOfFatSlides - 1);
      while (this.tempNumber == ranNumber) {
        ranNumber = randomNumber(0, noOfFatSlides - 1);
      }
      this.tempNumber = ranNumber;
      crousalFatSlides[ranNumber].classList.add('crousal-div-active');
      crousalFitSlides[ranNumber].classList.add('crousal-div-active');
      label[ranNumber].classList.add('crousal-div-label-active');
      for (let i = 0; i < noOfFatSlides; i++) {
        if (i != ranNumber) {
          crousalFatSlides[i].classList.remove('crousal-div-active');
          crousalFitSlides[i].classList.remove('crousal-div-active');
          label[i].classList.remove('crousal-div-label-active');
        }
      }
    }
  }
}

function randomNumber(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
