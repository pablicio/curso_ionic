import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {JwtCliente} from "./jwt-cliente";
import {JwtPayload} from "../models/jwt-payload";

/*
  Generated class for the Auth provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()

export class Auth {

    private _user = null;

    constructor(public jwtCliente: JwtCliente) {

        this.user().then((user) =>{
            console.log(user)
        })
    }

    user(): Promise <Object> {
        return new Promise((resolve) => {
            if (this._user) {
                resolve(this._user)
            }
            this.jwtCliente.getPayload().then((payload) => {

                if (payload){
                    this._user = payload;
                }

                resolve(this._user);
            });
        });
    }

    check(): Promise<boolean> {
        return this.user().then(user => {
            return user !== null;
        });
    }

    login({email, password}) : Promise<Object>{
        return this.jwtCliente.acessToken({email, password})
            .then(() => {
                return this.user()
                    .then(user => {
                        return user;
                    });
            });
    }

    logout():Promise<any>{
        return this.jwtCliente.revokeToken()
            .then(() => {
                this._user = null;
            })
    }

}
