import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exsamp',
  templateUrl: './exsamp.component.html',
  styleUrls: ['./exsamp.component.css']
})
export class ExsampComponent{
month = 0;
year = 0;
 createCalendar() {
    let elem = document.getElementById('calendar');
    let mon = this.month - 1;
    let d = new Date(this.year, mon);
    let table =
      `<table>
        <tr>
        <th>пн</th>
        <th>вт</th>
        <th>ср</th>
        <th>чт</th>
        <th>пт</th>
        <th>сб</th>
        <th>вс</th>
        </tr><tr>`;
    for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
      }
    while (d.getMonth() == mon) {
      table += '<td>' + d.getDate() + '</td>';

      if (getDay(d) % 7 == 6) {
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<td></td>';
      }
    }

    table += '</tr></table>';

    elem.innerHTML = table;

   function getDay(date) {
     let day = date.getDay();
     if (day == 0) day = 7;
     return day - 1;
   }
  }


}
