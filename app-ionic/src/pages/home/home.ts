import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Auth} from "../../decorators/auth.decorator";
import {AuthHttp} from "angular2-jwt";

import 'rxjs/add/operator/toPromise'
import {Http} from "@angular/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


@Auth()

export class HomePage {

  constructor(public navCtrl: NavController, public authHttp: AuthHttp) {

  }

  ionViewDidLoad(){

      this.authHttp.get(  'http://localhost:8000/api/teste')
          .toPromise()
          .then(()=>{
              console.log('primeira')
          })


    // setInterval(() => {
    //
    //
    //     this.authHttp.get(  'http://localhost:8000/api/teste')
    //         .toPromise()
    //         .then(()=>{
    //             console.log('primeira')
    //         })
    //
    //     this.authHttp.get(  'http://localhost:8000/api/teste')
    //         .toPromise()
    //         .then(()=>{
    //             console.log('segunda')
    //         })
    //
    //     this.authHttp.get(  'http://localhost:8000/api/teste')
    //         .toPromise()
    //         .then(()=>{
    //             console.log('terceira')
    //         })
    //
    //
    // },60*1000+1);



  }

}
