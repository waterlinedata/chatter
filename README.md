# Chatter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

To wire up to a Firebase account, access the [Firebase console](https://console.firebase.google.com) and create
a new project with a Realtime Database. In the Rules tab of your database, post the following:
 
` {
   "rules": 
   {
     ".read": "auth != null",
     ".write": "auth != null",
       "chat_messages": 
       	{
           ".read": true,
           ".write": true,
   		}
   }
 }`
 
 Add your Firebase credentials to app.config.ts and launch the development server to view your app.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
