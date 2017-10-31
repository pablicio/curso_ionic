import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Auth} from "../../decorators/auth.decorator";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


@Auth()

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
