import {
  animation,
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query,
  state,
} from '@angular/animations';

export const loginAnimation = {
  animateTrigger: trigger('animateTrigger', [
    state(
      'hide',
      style({
        top: '40px',
        right: '22px',
        opacity: 0,
        display:'none'
      })
    ),
    state(
      'show',
      style({
        opacity: 1,
      })
    ),
    transition('hide => show', [animate('1s')]),
    transition('show => hide', [animate('0.5s')]),
  ]),
};

export const labelAnimation = {
  labelTrigger: trigger('labelTrigger', [
    state(
      'right',
      style({
        top: "3px",
        right: "5px",
      })
    ),
    state(
      'left',
      style({
        opacity: 0.5,
      })
    ),
    transition('left => right', [animate('0.5s')]),
  ]),
};
