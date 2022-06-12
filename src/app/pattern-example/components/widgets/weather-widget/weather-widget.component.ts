import { Component } from '@angular/core';

import { Widget } from './../../../interfaces/widget.interface';
import { WIDGET } from './../../../interfaces/widget.token';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
  providers: [
    { provide: WIDGET, useExisting: WeatherWidgetComponent }
  ]
})
export class WeatherWidgetComponent implements Widget {
  isLoading = false;

  load() {
    console.log('Load data from API...');
  }

  refresh() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2500);
  }
}
