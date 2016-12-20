import { Component, OnInit } from '@angular/core';

import { CartDataService } from '../Services/cart.data.service';
import { LoggerService } from '../Services/logger.service';

import { CartModel } from '../Models/CartModel';
import { ProductModel } from '../Models/ProductModel';

import { Subscription } from 'rxjs/Subscription';

@Component({
    moduleId: module.id,
    selector: 'my-cart',
    templateUrl: 'cart.html'
})

export class CartComponent implements OnInit {
    cart: CartModel = new CartModel();
    addedProduct: ProductModel;
    subscription: Subscription;

    constructor(private dataAccessService: CartDataService,
        private loggerService: LoggerService) {
    }

    ngOnInit() {
        this.dataAccessService.getCart()
            .subscribe(
                cart => {
                    this.loggerService.logInfo(cart, 'Getting Cart');
                    this.cart = cart;
                }
            );
    }

}