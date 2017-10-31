import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {JwtCredentials} from "../models/jwt-credentials";
import {Storage} from "@ionic/storage";
import {JwtHelper} from "angular2-jwt";

/*
  Generated class for the JwtCliente provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JwtCliente {

    private _token = null;
    private _payload = null;

    constructor(public http: Http,
                public storage: Storage,
                public jwtHelper: JwtHelper) {

        this.getToken();

        this.getPayload().then((payload) => {

            console.log(payload)

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


    getPayload(): Promise<Object> {

        return new Promise((resolve) => {

            if (this._payload) {

                resolve(this._payload)

            }

            this.getToken().then((token) => {

                if(token){

                    this._payload = this.jwtHelper.decodeToken(token);

                }

                resolve(this._payload);
            })
        })
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

    revokeToken(): Promise<null> {

        let headers = new Headers();

        headers.set('Authorization', `Bearer ${this._token}`);

        let requestOptions = new RequestOptions({headers});

        return this.http.post(`http://localhost:8000/api/logout`, {}, requestOptions)
            .toPromise()
            .then((response: Response) => {
                this._token = null;

                this._payload = null;

                this.storage.clear();

                return null;
            })
    }



}

