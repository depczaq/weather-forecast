import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'app/app.component';
import { ForecastCardComponent } from 'app/components/weather/forecast-card/forecast-card.component';
import { ForecastComponent } from 'app/components/weather/forecast/forecast.component';
import { AuthorizationInterceptor } from 'app/interceptors/authorization-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    ForecastCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
