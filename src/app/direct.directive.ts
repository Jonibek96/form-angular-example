import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';
import {map, takeUntil} from 'rxjs/operators';
import {fromEvent} from 'rxjs';
import {tap} from 'rxjs/internal/operators';
import {DragDropComponent} from './drag-drop/drag-drop.component';

@Directive({
  selector: '[appDirect]'
})
export class DirectDirective implements OnInit{

  constructor() { }
 ngOnInit(){

   }




}
