import { Component } from '@angular/core';
import {DatepickerOptions} from '../ng-datepicker/component/ng-datepicker.component';
//import * as frLocale from 'date-fns/locale/fr';
import locale from 'date-fns/locale/en-US';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date: Date;
  options: DatepickerOptions = {
    locale: locale
  };
  constructor() {
    this.date = new Date();
  }
}
