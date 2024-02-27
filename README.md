# ProjetCertification

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

<!-- pour faire les test unitaires -->
## 1. Installer les dépendances de test:

Run 'npm install --save-dev @angular/cli jasmine karma'.

## 2. Créer un fichier de configuration de test:

Créez un fichier karma.conf.js avec la configuration de votre testeur Karma.

## Exemple de configuration Karma
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
      'src/**/*.spec.ts'
    ],
    preprocessors: {
      '**/*.spec.ts': ['karma-typescript']
    },
    reporters: ['progress', 'karma-coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  });
};

## 3. Créer des fichiers de test unitaires:

Pour chaque composant que vous souhaitez tester, créez un fichier *.spec.ts dans le même dossier que le composant.

Exemple de fichier de test unitaire:

TypeScript:
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should have a title', () => {
    expect(component.title).toBe('My Angular App');
  });

  it('should render the title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toBe('My Angular App');
  });
});

## 4. Exécuter les tests:

Lancez la commande 'ng test' pour exécuter vos tests unitaires. Vous pouvez également utiliser Karma pour exécuter les tests dans un navigateur.

Conseils:

Utilisez des noms descriptifs pour vos cas de test.
Divisez les tests complexes en plusieurs cas de test plus petits.
Utilisez des assertions pour valider les résultats de vos tests.
Tirez parti des outils de test disponibles, tels que Karma et Jasmine.
Consultez la documentation Angular pour plus d'informations sur les tests unitaires.

## ressources utilies

https://angular.io/guide/testing
https://jasmine.github.io/api/3.8/global.html
https://karma-runner.github.io/latest/index.html

## cors

npm install cors --save