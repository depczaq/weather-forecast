# Weather Forecast

## Design notes and assumptions:
* design principles: present good coding practices, layout could be simple, but has to display correctly on all devices - attractive look would be a nice addition, but it's not a priority given the time constraints 
* I've chosen Angular, because it offers such features as SCSS pre-processor, HTTP connectivity, RxJS, unit testing framework practically out of the box
* it also ensures that JS code will be compatible with every popular browser (thanks to polyfills), as well as offers good performance (AOT compilation, prod mode)
* bootstrap will provide reasonably nice UI and user experience with a small amount of effort, as well as support for mobiles (media queries, breakpoints)
* page should be responsive to different screen sizes 
* page should display the nearest forecast in more visible way, forecast for next days should be less visible/smaller or less detailed
* some graphic features (i.e. weather icons) would be nice
* page should allow to change units (i.e. *C / *F)

## Implementation plan: 
1. Create repository and project
2. Retrieve data from the Open Weather API
3. Design UI / display weather data
4. Prepare deployment package (README, minify, prod mode) and deploy

## Trade-offs

* no possibility to chose units
* simple, not so attractive, layout

## Improvement ideas
* graphic data representation (i.e. charts, diagrams etc)
* page should allow to search for location or use current location using [Geolocation WebAPI](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
* location search textfield with suggestions (from city.json data file) - backend support required
* more detailed data displayed
* internationalization, units
* combination with other endpoints (current weather, 16 day forecast, maps?)

## Deployed version



## Running

1. Run **npm start** to start the application.
2. Page should automatically open in the browser. If not, navigate to `http://localhost:4200/`. 
3. The app will automatically reload if you change any of the source files.

## Building

* Development build: **npm run-script build**
* Production build: **npm run-script build-prod**

The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run **npm test** to execute the unit tests via Karma.




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0.
