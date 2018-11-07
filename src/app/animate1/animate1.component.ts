import { Component, OnInit } from '@angular/core';
import {DivSizeTrigger, DivTrigger} from '../app-animate';

@Component({
  selector: 'app-animate1',
  templateUrl: './animate1.component.html',
  styleUrls: ['./animate1.component.css'],
  animations:[DivTrigger, DivSizeTrigger]
})
export class Animate1Component implements OnInit {
  isVisible = false;
  constructor() { }

  ngOnInit() {
  }

}
