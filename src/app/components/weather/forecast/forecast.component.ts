import { Component, OnInit } from '@angular/core';
import { Forecast } from 'app/models/forecast.model';
import { WeatherService } from 'app/services/weather.service';

@Component({
  selector: 'wf-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeatherForecast('Gdańsk', 'PL').subscribe(
      (response) => console.log(response)
    );

  }

}
