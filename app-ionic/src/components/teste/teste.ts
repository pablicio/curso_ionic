import { Component } from '@angular/core';

/**
 * Generated class for the Teste component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */


@Component({
  selector: 'teste',
  templateUrl: 'teste.html'
})
export class Teste {

  text: string;

  constructor() {
    console.log('Hello Teste Component');
    this.text = 'Hello World';
  }

}
