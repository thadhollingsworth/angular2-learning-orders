import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { CartModel } from '../Models/CartModel';
import { ProductModel } from '../Models/ProductModel';

import { LoggerService } from '../Services/logger.service';

@Injectable()
export class CartDataService {
    private actionUrl: string;

    constructor(private http: Http, private loggerService: LoggerService) {
        this.actionUrl = 'http://localhost:51435/api/carts';
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
            .map(res => res.json())
            .catch((error) => {
                this.loggerService.logError(error,'CartDataService.addProduct');
                return Observable.throw(error);
            });
    }

}
