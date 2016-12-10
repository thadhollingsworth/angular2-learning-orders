import { Component } from '@angular/core';

import { DataAccessService } from '../Services/dataaccess.service';

@Component({
    selector: 'product-detail',
    providers: [DataAccessService],
    templateUrl: 'product-detail.html'
})
export class ProductDetailComponent {

}