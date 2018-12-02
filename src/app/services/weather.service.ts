import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Forecast, ForecastPoint } from 'app/models/forecast.model';
import { WfConstants } from 'app/shared/wf-constants';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {
  }

  public getWeatherForecast(cityName: string, countryCode: string): Observable<Forecast> {
    const params = this.createRequestParams(cityName, countryCode);
    return this.httpClient.get<Forecast>(WfConstants.FORECAST_URL, { params })
      .pipe(
        tap(response => this.preProcessResponse(response)),
        retry(3),
        catchError(this.handleError)
      );
  }

  public preProcessResponse(forecast: Forecast): void {
    forecast.list.forEach(element => {
      this.addIconUrl(element);
      this.convertTime(element);
      this.defaultSnowIfMissing(element);
      this.defaultRainIfMissing(element);
    });
  }

  private convertTime(element: ForecastPoint): any {
    element.dt = element.dt * 1000; // form UNIX format (seconds) to milliseconds
  }

  private addIconUrl(element: ForecastPoint) {
    const iconUrl = WfConstants.ICONS_URL.replace(WfConstants.ICONS_ID_TOKEN, element.weather[0].icon);
    element.weather[0].iconUrl = iconUrl;
  }

  private defaultSnowIfMissing(element: ForecastPoint): any {
    if (!element.snow || element.snow['3h']) {
      element.snow = {
        '3h': 0
      };
    }
  }

  private defaultRainIfMissing(element: ForecastPoint): any {
    if (!element.rain || element.rain['3h']) {
      element.rain = {
        '3h': 0
      };
    }
  }

  private createRequestParams(cityName: string, countryCode: string): any {
    const params = {};
    params[WfConstants.LOCATION_PARAM] = [cityName, countryCode].join(',');
    params[WfConstants.UNITS_PARAM] = WfConstants.UNITS_VALUE;
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
