import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';


import { ProductLandingComponent } from './product-landing.component';
import { ProductSearchComponent } from './product-search.component';
import { ProductDetailComponent } from './product-detail.component';

import { ProductDataService } from '../Services/product.data.service';

const productRoutes: Routes = [
    { path: 'products', component: ProductLandingComponent },
    { path: 'product/:productIdentifier', component: ProductDetailComponent }
];


//Note: could create separate .ts for route module as the docs are showing, but this is an exploration no actual implementaiton - i know it can be done :-)
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(productRoutes)
    ],
    declarations: [
        ProductDetailComponent,
        ProductSearchComponent,
        ProductLandingComponent
    ],
    exports: [RouterModule],
    providers: [ProductDataService]
})
export class ProductModule { }