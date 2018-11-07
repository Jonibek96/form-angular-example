import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {fromEvent, interval, merge, Observable, of, zip} from 'rxjs';
import {
  concatMap,
  concatMapTo, count, expand,
  filter, first, groupBy,
  map,
  flatMap, takeUntil, every, debounce
} from 'rxjs/operators';
import {mapTo, tap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.dragDiv();
  }

  dragDiv() {
    let karzina = document.getElementById('div2');
    let elementDrag: any = document.querySelectorAll('.box');
    let copy = elementDrag[0].style;
    let mouseup = fromEvent(elementDrag, 'mouseup').pipe(tap(() => {
      let div1: any = elementDrag[0].getBoundingClientRect();
      let div2: any = karzina.getBoundingClientRect();
      let w = ((div2.x + div2.width) - div2.left) + div2.height;
      let h = ((div2.y + div2.height) - div2.top) + div2.width;
       if ((div1.x >= div2.x && div1.y >= div2.y) && (div1.left <= w && div1.top <= h))
      {
        karzina.appendChild(elementDrag[0]);
        elementDrag[0].style.backgroundColor = 'blue';
        mousemove =null
      }else{
         elementDrag[0].style = copy;
       }
    }));
    let mousemove = fromEvent(document, 'mousemove');
    let mousedown = fromEvent(elementDrag, 'mousedown');
    let mousedrag = mousedown.pipe(
      map((md: any) => {
        return mousemove.pipe(
          map((mm: any) => {
            if (md.which != 1) {
              return;
            }
            mm.preventDefault();
            return {
              left: mm.clientX - md.offsetX,
              top: mm.clientY - md.offsetY
            };
          }),
        ).pipe(
          takeUntil(mouseup)
        );
      })
    ).subscribe(val => {
      val.forEach((x) => {
        elementDrag[0].style.top = x.top + 'px';
        elementDrag[0].style.left = x.left  + 'px';
      });
    });
  }
}
