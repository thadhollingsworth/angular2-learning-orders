import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


//App Feature Modules
import { ProductModule } from './Product/product.module';

//App Components
import { DashboardComponent } from './Dashboard/dashboard.component';

//TODO: break these out into modules ? [Order/Cart/Product]
import { OrderListComponent } from './Order/order-list.component';
import { OrderDetailComponent } from './Order/order-detail.component';

import { CartLandingComponent } from './Cart/cart-landing.component';
import { CartComponent } from './Cart/cart.component';

import { DataAccessService } from './Services/dataaccess.service';
import { LoggerService } from './Services/logger.service';

const appRoutes: Routes = [
    { path: 'orders', component: OrderListComponent },
    { path: 'order/:orderNumber', component: OrderDetailComponent },
    { path: 'cart', component: CartLandingComponent },
    { path: '', component: DashboardComponent }
    //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        ProductModule
    ],
    exports: [RouterModule],
    declarations: [
        AppComponent,
        DashboardComponent,
        OrderDetailComponent,
        OrderListComponent,
        CartComponent,
        CartLandingComponent
    ],
    providers: [
        LoggerService,
        DataAccessService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
