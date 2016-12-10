import { Component } from '@angular/core';

import { ProductModel } from '../Models/ProductModel';
import { DataAccessService } from '../Services/dataaccess.service';

@Component({
    moduleId: module.id,
    selector: 'product-search',
    providers: [DataAccessService],
    templateUrl: 'product-search.html'
})
export class ProductSearchComponent {
    searchResults: ProductModel[] = [];
    searchTerm: string;


    //TODO: bind to the input where user types search term
    findProducts() {
        console.log(this.searchTerm);
    }

}