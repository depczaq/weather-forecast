export class AppSettings {

    // OpenWeather API
    public static WEATHER_API_BASE_URL = 'http://api.openweathermap.org/';
    public static FORECAST_URL = AppSettings.WEATHER_API_BASE_URL + '/data/2.5/forecast';

    public static LOCATION_PARAM = 'q'; // value: {cityName},{countryCode}

    public static APPID_PARAM = 'APPID';
    public static APPID_VALUE = '5d5277fef08946ea3c1c31db8eacd17a';

}
