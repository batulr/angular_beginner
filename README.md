# NewProj

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Description

Once the project runs on the port 4200, go to the parent component by attaching /parent in the url, where using @Input() and @Output(), fruit names can be added from the parent to the child component.
Next, in the validate component which can be reached by adding/validate to the url, the value of the selected radio button is displayed.
The app folder contains another module named todo, which has the view component wherein the ng-directives are used by displaying an example. To navigate there, type '/todo/view' in the URL.

ng-directives:
![image](https://user-images.githubusercontent.com/73705377/144343849-0c4f419d-1409-4596-98bf-2cf3f1b0b02c.png)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
