import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export const DivTrigger = trigger('DivTrigger', [
  //void => *
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(500, style({
      opacity: 1
    })),
  ]),
  //* => void
  transition(':leave', animate(500, style({
    opacity: 0
  })))
]);
export const  DivSizeTrigger = trigger('DivSize', [
  transition('* => *', [
    animate(500, style({
      width: '10px'
      // height: '10px'
    })),
    animate(500, style({
      width: '*'
      // height: '*'
    }))
  ])
]);
