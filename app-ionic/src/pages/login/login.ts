import {Component} from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams, ToastController} from "ionic-angular";
import 'rxjs/add/operator/toPromise'
import {Auth} from "../../providers/auth";
import {HomePage} from "../home/home";
import {Teste} from "../../components/teste/teste";


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
                public menuCtrl: MenuController,
                public navParams: NavParams,
                public toast: ToastController,
                private auth: Auth) {

        this.menuCtrl.enable(false);
    }

    login() {
        this.auth.login(this.user)
            .then(() => {

                this.afterLogin()

            })
            .catch(() => {
                let toast = this.toast.create({
                    message: 'Credenciais inválidas!',
                    duration: 2000,
                    position: 'top',
                    cssClass: '.toast-reverse'
                })

                toast.present();
            });
    }

    irHome(){
        this.navCtrl.push("Teste",{
            id: 10,
            name: "Thiago Pablício"
        });
    }


    loginFacebook() {
        this.auth.loginFacebook()
            .then(() => {
                this.afterLogin();
            })
            .catch(() => {
                let toast = this.toast.create({
                    message: 'Erro ao realizar login no facebook',
                    duration: 3000,
                    position: 'top',
                    cssClass: '.toast-reverse'
                });
                toast.present();
            });
    }


    // loginFacebook(){
    //     this.auth.loginFacebook();
    // }

    afterLogin() {
        this.menuCtrl.enable(true);
        this.navCtrl.push(HomePage);
    }
}
