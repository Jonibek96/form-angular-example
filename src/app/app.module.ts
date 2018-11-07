import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AnimateComponent } from './animate/animate.component';
import { Animate1Component } from './animate1/animate1.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { ExsampComponent } from './exsamp/exsamp.component';
import { DrahndropComponent } from './drahndrop/drahndrop.component';
import { DirectDirective } from './direct.directive';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    AnimateComponent,
    Animate1Component,
    RxjsComponent,
    DragDropComponent,
    ExsampComponent,
    DrahndropComponent,
    DirectDirective,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
