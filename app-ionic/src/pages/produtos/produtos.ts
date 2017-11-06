import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ProdutoResource} from "../../providers/resources/produto.resource";
import {Auth} from "../../decorators/auth.decorator";

/**
 * Generated class for the ProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Auth()

@Component({
    selector: 'page-produtos',
    templateUrl: 'produtos.html',
})

export class ProdutosPage {

    produtos = [];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public produtosResourse: ProdutoResource) {
    }

    ionViewDidLoad() {

        this.produtosResourse.all().then(produtos => this.produtos = produtos)
    }

}
