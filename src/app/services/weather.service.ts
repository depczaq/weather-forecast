import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from 'app/common/app-settings';
import { Forecast } from 'app/models/forecast.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {
  }

  public getWeatherForecast(cityName: string, countryCode: string): Observable<Forecast> {
    const params = this.createRequestParams(cityName, countryCode);
    return this.httpClient.get<Forecast>(AppSettings.FORECAST_URL, { params })
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  private createRequestParams(cityName: string, countryCode: string): any {
    const params = {};
    params[AppSettings.APPID_PARAM] = AppSettings.APPID_VALUE;
    params[AppSettings.LOCATION_PARAM] = [cityName, countryCode].join(',');
    return params;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // client side or newort error
      console.error('An error occurred:', error.error.message);
    } else {
      // backend error
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened. Please try again later.');
  }
}
