import {Injectable} from '@angular/core';
import {Headers , RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {JwtCredentials} from "../models/jwt-credentials";
import {Storage} from "@ionic/storage";
import {AuthHttp, JwtHelper} from "angular2-jwt";
import {Env} from "../models/env";

declare var ENV: Env;

@Injectable()
export class JwtCliente {

    private _token = null;

    private _payload = null;

    constructor(public authHttp: AuthHttp,
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

            this.storage.get(ENV.TOKEN_NAME).then((token) => {

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

        return this.authHttp
            .post(`${ENV.API_URL}/access_token`, jwtCredentials)
            .toPromise()
            .then((response: Response) => {

                let token = response.json().token;

                this._token = token;

                this.storage.set(ENV.TOKEN_NAME, token);

                return token;
            })
    }

    setToken(token:string):string{
        this._token = token;

        this.storage.set(ENV.TOKEN_NAME, this._token);

        return this._token;
    }

    revokeToken(): Promise<null> {

        return this.authHttp.post(`${ENV.API_URL}/logout`, {})
            .toPromise()
            .then((response: Response) => {
                this._token = null;

                this._payload = null;

                this.storage.clear();

                return null;
            })
    }



}

