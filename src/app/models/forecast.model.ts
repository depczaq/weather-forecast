export interface Forecast {
    city: City;
    list: List;
}

interface City {
    id: number;
    name: string;
    country: string;
}

interface List {

    dt: number; // Time of data forecasted, unix, UTC
    dt_txt: string; // Data/time of calculation, UTC
    main: Main;
    weather: Weather;
    clouds: Clouds;
    wind: Wind;
    rain: Rain;
    snow: Snow;
}

interface Main {
    temp: number; // Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    temp_min: number; // Minimum temperature at the moment of calculation.
    temp_max: number; // Maximum temperature at the moment of calculation.
    pressure: number; // Atmospheric pressure on the sea level by default, hPa
    sea_level: number; // Atmospheric pressure on the sea level, hPa
    grnd_level: number; // Atmospheric pressure on the ground level, hPa
    humidity: number; // Humidity, %
}

interface Weather {
    id: number; // Weather condition id
    main: string; // Group of weather parameters (Rain, Snow, Extreme etc.)
    description: string; // Weather condition within the group
    icon: string; // Weather icon id
}

interface Clouds {
    all: number; // Cloudiness, %
}

interface Wind {
    speed: number; // Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
    deg: number; // Wind direction, degrees (meteorological)
}

interface Rain {
    '3h': number; // Rain volume for last 3 hours, mm
}

interface Snow {
    '3h': number; // Snow volume for last 3 hours
}
