import { Component, OnDestroy, OnInit } from '@angular/core';
import { Forecast } from 'app/models/forecast.model';
import { WeatherService } from 'app/services/weather.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'wf-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit, OnDestroy {

  public forecast: Forecast;

  private subscription: Subscription;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.subscription = this.weatherService.getWeatherForecast('Gdańsk', 'PL')
      .subscribe(
        next => this.forecast = next
      );
  }

  getCity() {
    return this.forecast.city.name + ' (' + this.forecast.city.country + ')';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
