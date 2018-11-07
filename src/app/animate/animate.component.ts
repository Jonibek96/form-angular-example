import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  animations: [
    trigger('clickDiv', [
      state('start', style({
        backgroundColor: 'red',
        width: '150px',
        height: '150px',
        borderRadius: '150px'
      })),
      state('end', style({
        backgroundColor: 'blue',
        width: '400px',
        height: '400px',
        borderRadius: '350px'
      })),
      state('active', style({
        backgroundColor: 'black',
        width: '180px',
        height: '180px'
      })),
      transition('start<=>end', animate('800ms ease-in')),
      transition('start => active', animate(400)),
      transition('active => end', animate(400))
    ]),
    trigger('multi', [
      state('start', style({
        width: '150px',
        height: '150px',
        borderRadius: '150px',
        border: '5px solid black'
      })),
      state('end', style({
        width: '160px',
        height: '160px',
        backgroundColor: 'blue',
        borderRadius: '150px',
      })),
      transition('start <=> end', [
        style({
          backgroundColor: 'pink',
        }),
        animate(1000)
      ])
    ])
  ],

})
export class AnimateComponent implements OnInit {
   stateDiv = 'start';
   multiState = 'start';
  constructor() { }

  ngOnInit() {
  }

  changeDiv(){
    this.stateDiv = 'end';
    setTimeout(() =>{
      this.stateDiv = 'start';
    },2000);
  }
}
