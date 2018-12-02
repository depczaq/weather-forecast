import { Component, Input, OnInit } from '@angular/core';
import { ForecastPoint } from 'app/models/forecast.model';

@Component({
  selector: 'wf-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.scss']
})
export class ForecastCardComponent implements OnInit {

  @Input()
  public forecastPoint: ForecastPoint;

  constructor() { }

  ngOnInit() {
  }

}
