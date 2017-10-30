import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {JwtCredentials} from "../models/jwt-credentials";
import {Storage} from "@ionic/storage";

/*
  Generated class for the JwtCliente provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JwtCliente {

    private _token = null;

    constructor(public http: Http, public storage: Storage) {

        this.getToken().then((token) => {
            console.log(token)
        });

    }

    getToken(): Promise<string> {

        return new Promise((resolve) => {
            if (this._token) {

                resolve(this._token)

            }

            this.storage.get('token').then((token) => {

                this._token = token;

                resolve(this._token);

            })
        });
    }



    acessToken(jwtCredentials: JwtCredentials): Promise<string> {

        return this.http
            .post('http://localhost:8000/api/access_token', jwtCredentials)
            .toPromise()
            .then((response: Response) => {

                let token = response.json().token;

                this._token = token;

                this.storage.set('token', token);

                return token;
            })
    }

}

