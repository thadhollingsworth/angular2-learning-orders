import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ProductModel } from '../Models/ProductModel';
import { DataAccessService } from '../Services/dataaccess.service';
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

    constructor(private dataAccessService: DataAccessService,
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
            error => this.errorMessage = error
            );
        this.showSearchResults = true;
    }

    onSelect(product: ProductModel): void {
        this.router.navigate(['/product', product.productIdentifier]); 
    }
}