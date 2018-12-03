import { ForecastComponent } from './forecast.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Forecast } from 'app/models/forecast.model';
import { WeatherService } from 'app/services/weather.service';
import { Observable, of } from 'rxjs';

const weatherServiceMock = {
  getWeatherForecast() {
    return of({
      cod: 200,
      message: .4679,
      cnt: 39,
      list: [],
      city:
      {
        id: 7531002,
        name: 'Gdańsk',
        coord: {
          lat: 54.3476,
          lon: 18.6452
        },
        country: 'PL'
      }
    });
  }
};

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: WeatherService, useValue: weatherServiceMock }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
