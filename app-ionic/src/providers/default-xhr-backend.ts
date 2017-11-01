import {Injectable} from '@angular/core';
import {
    BrowserXhr,
    Http,
    Request, Response,
    ResponseOptions,
    XHRBackend,
    XHRConnection,
    XSRFStrategy
} from '@angular/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import {appContainer} from "../app/app.container";
import {JwtCliente} from "./jwt-cliente";
import {Redirector} from "./redirector";


/*
  Generated class for the DefaultXhrBackend provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DefaultXHRBackend extends XHRBackend {


    constructor(browserXHR: BrowserXhr,
                baseResponseOptions: ResponseOptions,
                xsrfStrategy: XSRFStrategy) {
        super(browserXHR, baseResponseOptions, xsrfStrategy);
    }


    createConnection(request: Request): XHRConnection {
        let xhrConnection = super.createConnection(request);

        xhrConnection.response = xhrConnection
            .response
            .map((response) => {
                //Salva o token

                this.tokenSetter(response);
                return response;
            })
            .catch(responseError => {
                //retorna erro 401 e redireciona p/ login

                this.unathenticaded(responseError);
                return Observable.throw(responseError);
            })

        return xhrConnection;
    }

    tokenSetter(response: Response) {
        //Usando o serviço sem injeção de depêndencia

        let jwtCliente = appContainer().get(JwtCliente);

        if (response.headers.has('Authorization')) {
            let authorization = response.headers.get('Authorization');

            let token = authorization.replace('Bearer ', '');

            jwtCliente.setToken(token);
        }

    }

    unathenticaded(responseError: Response) {

        let redirector = appContainer().get(Redirector);

        if (responseError.status === 401) {
            redirector.redirector();
        }
    }

    // onResponseError(responseError: Response){
    //     let redirector = appContainer().get(Redirector);
    //     switch(responseError.status){
    //         case 401:
    //             redirector.redirector();
    //             break;
    //         case 403:
    //             let data = responseError.json();
    //             let toHomePage = data.hasOwnProperty('error') && data.error == 'subscription_valid_not_found';
    //             redirector.redirector(toHomePage ? 'HomePage' : 'LoginPage');
    //             break;
    //     }
    // }
}
