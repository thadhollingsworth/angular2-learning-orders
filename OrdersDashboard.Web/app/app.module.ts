import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

//App Components
import { DashboardComponent } from './Dashboard/dashboard.component';

//TODO: break these out into modules ? [Order/Cart/Product]
import { OrderListComponent } from './Order/order-list.component';
import { OrderDetailComponent } from './Order/order-detail.component';

import { ProductLandingComponent } from './Product/product-landing.component';
import { ProductSearchComponent } from './Product/product-search.component'
import { ProductDetailComponent } from './Product/product-detail.component'


import { CartLandingComponent } from './Cart/cart-landing.component';
import { CartComponent } from './Cart/cart.component';



const appRoutes: Routes = [
    { path: 'orders', component: OrderListComponent },
    { path: 'order/:orderNumber', component: OrderDetailComponent },
    { path: 'cart', component: CartLandingComponent },
    { path: 'products', component: ProductLandingComponent },
    { path: 'order/:productIdentifier', component: ProductDetailComponent },
    { path: '', component: DashboardComponent }
    //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
    declarations: [
        AppComponent,
        DashboardComponent,
        OrderDetailComponent,
        OrderListComponent,
        ProductDetailComponent,
        ProductSearchComponent,
        ProductLandingComponent,
        CartComponent,
        CartLandingComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
