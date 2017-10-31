import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from "ionic-angular";
import 'rxjs/add/operator/toPromise'
import {Auth} from "../../providers/auth";


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

    user = {
        email: 'teste@gmail.com',
        password: '123456'
    }


    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private auth: Auth) {
    }

    login() {

        this.auth.login(this.user)
            .then(() => {
                //redirecionar
            });
        // let dataObj = {
        //     email: this.email,
        //     password: this.password
        // }

        // this.jwtCliente.acessToken(dataObj)
        //     .then((token) => {
        //         console.log(token)
        //     });

    }
}
