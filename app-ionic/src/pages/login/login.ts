import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise'
import {JwtCliente} from "../../providers/jwt-cliente";


/**
 * Generated class for the Login page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()


@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    email: string = 'root@gmail.com';
    password: string = '123456';

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private jwtCliente: JwtCliente) {
    }

    login() {

        let dataObj = {
            email: this.email,
            password: this.password
        }

        this.jwtCliente.acessToken(dataObj)
            .then((token) => {
                console.log(token)
            });


    }

}
