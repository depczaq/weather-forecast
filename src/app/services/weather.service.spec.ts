import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { WeatherService } from 'app/services/weather.service';
import { Observable } from 'rxjs';



const httpResponse = JSON.parse('{"cod":"200","message":0.0044,'
  + '"cnt":38,"list":[], "city": { "id": 7531002, "name":'
  + ' "Gdańsk", "coord": { "lat": 54.3476, "lon": 18.6452 },'
  + ' "country": "PL" }}');

describe('WeatherService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let weatherService: WeatherService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpy.get.and.returnValue(Observable.create((observer) => {
      observer.next(JSON.parse(httpResponse));
    }));
    weatherService = new WeatherService(<any>httpClientSpy);
  });

  it('should be created', () => {
    expect(weatherService).toBeTruthy();
  });

  it('getWeatherForecast response should be truthy', () => {
    expect(weatherService.getWeatherForecast('a', 'b')).toBeTruthy();
  });

});
