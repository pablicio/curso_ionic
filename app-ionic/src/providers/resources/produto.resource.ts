import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {AuthHttp} from "angular2-jwt";
import {Env} from "../../models/env";

declare var ENV: Env;

/*
  Generated class for the ProdutoResourceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutoResource {

    constructor(public authHttp: AuthHttp) {
        console.log('Hello ProdutoResourceProvider Provider');
    }

    all() {
        return this.authHttp.get(`${ENV.API_URL}/produtos`)
            .toPromise()
            .then(response => response.json().produtos);
    }

}
