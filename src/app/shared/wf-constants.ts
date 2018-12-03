export class WfConstants {

    // OpenWeather API
    public static WEATHER_API_BASE_URL = 'https://api.openweathermap.org';
    public static FORECAST_URL = WfConstants.WEATHER_API_BASE_URL + '/data/2.5/forecast';

    public static LOCATION_PARAM = 'q'; // value: {cityName},{countryCode}

    public static APPID_PARAM = 'APPID';
    public static APPID_VALUE = '5d5277fef08946ea3c1c31db8eacd17a';

    public static UNITS_PARAM = 'units';
    public static UNITS_VALUE = 'metric';

    public static ICONS_ID_TOKEN = '{icondId}';
    public static ICONS_URL = 'https://openweathermap.org/img/w/' + WfConstants.ICONS_ID_TOKEN + '.png';
}
