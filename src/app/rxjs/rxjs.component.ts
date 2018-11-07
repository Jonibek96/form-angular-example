import {Component, OnInit} from '@angular/core';
import {
  combineLatest, concat,
  from,
  fromEvent, fromEventPattern,
  interval, merge, never, Observable,
  of, pipe,
  race,
  range,
  throwError,
  timer, zip
} from 'rxjs';
import {
  buffer,
  catchError,
  combineAll, concatAll, count, defaultIfEmpty, delay,
  delayWhen, every, filter, first,
  map,
  mapTo, max,
  mergeMap, min, pairwise,
  reduce, repeatWhen,
  retry,
  retryWhen, sample,
  scan, sequenceEqual, share, skipUntil, skipWhile,
  startWith, switchMap, switchMapTo,
  take, takeWhile,
  tap, withLatestFrom
} from 'rxjs/internal/operators';
import {ajax} from 'rxjs/internal/observable/dom/ajax';
import {promise} from 'selenium-webdriver';
import {empty} from 'rxjs/internal/Observer';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    this.getExsample()
  }

  // getUserId() {
  //   // const params = {
  //   //   access_token: 'ef20e9817a8b961cd58e33b77b7632afc65095b20245ce2a0ea00143e4f3b641469672',
  //   //   user_id: id,
  //   //   fields: 'photo_big'
  //   // };
  //   // const apiData = ajax('https://api.vk.com/method/users.get?user_id=6692188&')
  //   //   .subscribe(x => console.log(x));
  //
  // }

  // getTest(){
  //   fromEvent(document.querySelector('input'),'keyup').pipe(
  //     pluck('target', 'value'),
  //     distinct(),
  //     debounceTime(2000),
  //     mergeMap(v => fromPromise(this.getUserId(v))),
  //     catchError(err => of(err))
  //   )
  //     .subscribe(d => {
  //       console.log(d)
  //     });
  // }
  getSubscribe(name) {
    return {
      next(x) {
        console.log(name, ": ", x);
      },
      error(err) {
        console.log('Error: ', err);
      },
      complete() {
        console.log(name, 'Completed.')
      }
    }
  }

//   getRx() {
//     const requestOne = of('first').pipe(delay(200));
//     const requestTwo = of('second').pipe(delay(500));
//     const requestThree = of('third').pipe(delay(1000));
//     const requestFour = of('fourth').pipe(delay(1200));
//     const requestFive = of('fifth').pipe(delay(1500));
//
//     const loadButton = document.getElementById('load');
//     const progressBar = document.getElementById('progress');
//     const content = document.getElementById('data');
//
// // update progress bar as requests complete
//     const updateProgress = progressRatio => {
//       console.log('Progress Ratio: ', progressRatio);
//       progressBar.style.width = 100 * progressRatio + '%';
//       if (progressRatio === 1) {
//         progressBar.className += ' finished';
//       } else {
//         progressBar.className = progressBar.className.replace(' finished', '');
//       }
//     };
// // simple helper to log updates
//     const updateContent = newContent => {
//       content.innerHTML += newContent;
//     };
//
//     const displayData = data => {
//       updateContent(`<div class="content-item">${data}</div>`);
//     };
//
// // simulate 5 seperate requests that complete at variable length
//     const observables: Array<Observable<string>> = [
//       requestOne,
//       requestTwo,
//       requestThree,
//       requestFour,
//       requestFive
//     ];
//
//     const array$ = from(observables);
//     const requests$ = array$.pipe(concatAll());
//     const clicks$ = fromEvent(loadButton, 'click');
//
//     const progress$ = clicks$.pipe(
//       switchMapTo(requests$),
//       share()
//     );
//
//     const count$ = array$.pipe(count());
//
//     const ratio$ = progress$.pipe(
//       scan(current => current + 1, 0),
//       withLatestFrom(count$, (current, count) => current / count)
//     );
//
//     clicks$.pipe(switchMapTo(ratio$)).subscribe(updateProgress);
//
//     progress$.subscribe(displayData);
//   }
//   getPause(){
//     const countdownSeconds = 0;
//     const setHTML = id => val => (document.getElementById(id).innerHTML = val);
//     const pauseButton = document.getElementById('pause');
//     const resumeButton = document.getElementById('resume');
//     const interval$ = interval(500).pipe(mapTo(1),take(50));
//
//     const pause$ = fromEvent(pauseButton, 'click').pipe(mapTo(false));
//     const resume$ = fromEvent(resumeButton, 'click').pipe(mapTo(true));
//
//     const timer$ = merge(pause$, resume$)
//       .pipe(
//         startWith(true),
//         switchMap(val => (val ? interval$ : of())),
//         scan((acc, curr) => (curr ? curr + acc : acc), countdownSeconds),
//         takeWhile(v => v >= 0),
//       )
//       .subscribe(setHTML('remaining'));
//   }

  getExsample() {


    // allowDrop(event){
    //   event.preventDefault()
    // }
    // drag(event){
    //   event.dataTransfer.setData('text', event.target.id);
    // }
    // drop(event){
    //   event.preventDefault();
    //   let data = event.dataTransfer.getData("text");
    //   event.target.appendChild(document.getElementById(data));
    // }






  }
}
