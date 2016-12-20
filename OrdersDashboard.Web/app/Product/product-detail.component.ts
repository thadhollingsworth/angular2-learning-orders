import { Component } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ProductModel } from '../Models/ProductModel';

import { ProductDataService } from '../Services/product.data.service';
import { CartDataService } from '../Services/cart.data.service';

@Component({
    moduleId: module.id,
    selector: 'product-detail',
    templateUrl: 'product-detail.html'
})
export class ProductDetailComponent {
    /* 
        assume the search results only have some of the product data
        and you need to get the single product details from the server when navigating
        this is really all about me wanting to explore dynamic routing which is the jump off
        from the product list page
    */
    product: ProductModel = new ProductModel();

    constructor(private dataAccessService: ProductDataService,
        private router: ActivatedRoute,
        private location: Location,
        private cartDataService: CartDataService) {
    }

    ngOnInit(): void {
        this.router.params
            .switchMap((params: Params) => this.dataAccessService.getProduct(params['productIdentifier']))
            .subscribe(product => {
                this.product = product;
            });
    }

    goBack(): void {
        this.location.back();
    }

    addToCart(): void {
        this.cartDataService.addProduct(this.product).subscribe(); //TODO: refinement around error feedback
    }
}