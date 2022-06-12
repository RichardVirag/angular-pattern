import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { WidgetWrapperComponent } from './components/widget-wrapper/widget-wrapper.component';
import { WeatherWidgetComponent } from './components/widgets/weather-widget/weather-widget.component';
import { VelocityWidgetComponent } from './components/widgets/velocity-widget/velocity-widget.component';

@NgModule({
  declarations: [
    WidgetWrapperComponent,
    WeatherWidgetComponent,
    VelocityWidgetComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: [
    WidgetWrapperComponent,
    WeatherWidgetComponent,
    VelocityWidgetComponent
  ]
})
export class PatternExampleModule { }
