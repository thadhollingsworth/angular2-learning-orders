import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { CartModel } from '../Models/CartModel';
import { ProductModel } from '../Models/ProductModel';

import { LoggerService } from '../Services/logger.service';
import { BaseDataService } from '../Services/base.data.service';

@Injectable()
export class CartDataService extends BaseDataService {

    constructor(protected http: Http, protected loggerService: LoggerService) {
        super(http, loggerService);
        this.actionUrl = this.actionUrl + 'carts';
    }

    public getCart = (): Observable<CartModel> => {
        return this.http.get(this.actionUrl)
            .map((response: Response) => <CartModel>response.json())
            .catch((error) => {
                this.loggerService.logError(error,'CartDataService.getCart');
                return Observable.throw(error);
            });
    }

    public addProduct = (product: ProductModel) => {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.actionUrl + '/addproduct', JSON.stringify(product), options)
            .catch((error) => {
                this.loggerService.logError(error,'CartDataService.addProduct');
                return Observable.throw(error);
            });
    }

    public removeProduct = (productIdentifier: string): Observable<CartModel> => {
        return this.http.get(this.actionUrl + '/removeproduct/' + productIdentifier)
            .map((response: Response) => <CartModel>response.json())
            .catch((error) => {
                this.loggerService.logError(error, 'CartDataService.removeProduct');
                return Observable.throw(error);
            });
    }

    public clearCart = (): Observable<CartModel> => {
        return this.http.get(this.actionUrl + '/clear/')
            .map((response: Response) => <CartModel>response.json())
            .catch((error) => {
                this.loggerService.logError(error, 'CartDataService.clearCart');
                return Observable.throw(error);
            });
    }

}
