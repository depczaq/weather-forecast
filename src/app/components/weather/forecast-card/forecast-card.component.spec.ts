import { ForecastCardComponent } from './forecast-card.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ForecastPoint } from 'app/models/forecast.model';


describe('ForecastCardComponent', () => {
  let component: ForecastCardComponent;
  let fixture: ComponentFixture<ForecastCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastCardComponent);
    component = fixture.componentInstance;

    const forecastPoint = {
      dt: 122,
      dt_txt: 'dt_txt',
      main: {
        temp: 111,
        temp_min: 222,
        temp_max: 333,
        pressure: 444,
        sea_level: 555,
        grnd_level: 666,
        humidity: 777
      },
      weather: [{
        id: 1,
        main: 'main',
        description: 'bbb',
        icon: 'ccc',
        iconUrl: 'ddd'
      }],
      clouds: { all: 11 },
      wind: {
        speed: 32,
        deg: 234
      },
      rain: { '3h': 3 },
      snow: { '3h': 3 }
    };
    component.forecastPoint = forecastPoint;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
