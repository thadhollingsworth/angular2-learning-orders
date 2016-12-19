import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ProductModel } from '../Models/ProductModel';
import { ProductDataService } from '../Services/product.data.service';
import { LoggerService } from '../Services/logger.service';

@Component({
    moduleId: module.id,
    selector: 'product-search',
    templateUrl: 'product-search.html'
})
export class ProductSearchComponent {
    searchResults: ProductModel[] = [];
    searchTerm: string;
    showSearchResults: boolean = false;
    errorMessage: string;

    constructor(private dataAccessService: ProductDataService,
        private loggerService: LoggerService,
        private router: Router) {
    }

    findProducts() {

        this.dataAccessService.findProducts(this.searchTerm)
            .subscribe(
            searchResults => {
                this.loggerService.logInfo(searchResults, 'Search Results');
                this.searchResults = searchResults
            },
            error => { this.loggerService.logError(error, "ProductSearch:ngOnInit"); }
            );
        this.showSearchResults = true;
    }

    onSelect(product: ProductModel): void {
        this.router.navigate(['/product', product.productIdentifier]); 
    }
}