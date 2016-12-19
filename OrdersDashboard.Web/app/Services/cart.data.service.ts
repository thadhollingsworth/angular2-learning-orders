import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { CartModel } from '../Models/CartModel';

import { LoggerService } from '../Services/logger.service';

@Injectable()
export class CartDataService {
    private actionUrl: string;

    constructor(private http: Http, private loggerService: LoggerService) {
        this.actionUrl = 'http://localhost:51435/api/carts';
    }

    public getCart = (orderNumber: string): Promise<CartModel> => {
        return this.http.get(this.actionUrl)
            .map((response) => {
                return <CartModel>response.json()
            })
            .catch(this.handleError)
            .toPromise()
    }

    private handleError(error: Response) {
        this.loggerService.logError(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
