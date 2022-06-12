import {
  Component,
  ContentChild,
  OnInit
} from '@angular/core';

import { WIDGET } from './../../interfaces/widget.token';
import { Widget } from './../../interfaces/widget.interface';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss']
})
export class WidgetWrapperComponent implements OnInit {
  @ContentChild(WIDGET, { static: true }) widget!: Widget;

  ngOnInit(): void {
    this.widget.load();
  }

  onRefresh() {
    this.widget.refresh();
  }
}
