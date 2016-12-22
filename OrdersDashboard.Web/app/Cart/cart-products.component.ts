import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ProductModel } from '../Models/ProductModel';

@Component({
    moduleId: module.id,
    selector: 'cart-products',
    templateUrl: 'cart-products.html'
})


export class CartProductsComponent {
    @Input()
    products: ProductModel[];

    @Output() onRemoveProduct = new EventEmitter<string>();


    removeProduct(productIdentifier: string): void {
        this.onRemoveProduct.emit(productIdentifier);
    } 
}