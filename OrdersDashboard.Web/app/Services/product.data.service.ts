import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { ProductModel } from '../Models/ProductModel';

import { LoggerService } from '../Services/logger.service';

@Injectable()
export class ProductDataService {
    private actionUrl: string;

    constructor(private http: Http, private loggerService: LoggerService) {
        this.actionUrl = 'http://localhost:51435/api/products';
    }

    public findProducts = (searchTerm: string): Observable<ProductModel[]> => {
        return this.http.get(this.actionUrl + '/find/' + searchTerm)
            .map((response: Response) => <ProductModel[]>response.json())
            .catch((error) => {
                this.loggerService.logError(error,'ProductDataService.findProducts');
                return Observable.throw(error);
            });
    }

    public getProduct = (productIdentifier: string): Promise<ProductModel> => {
        return this.http.get(this.actionUrl + '/' + productIdentifier)
            .map((response) => {
                return <ProductModel>response.json()
            })
            .catch((error) => {
                this.loggerService.logError(error,'ProductDataService.getProduct');
                return Observable.throw(error);
            })
            .toPromise();
    }


}
