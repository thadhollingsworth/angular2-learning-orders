import { ProductModel } from '../Models/ProductModel';
export class OrderModel {
    public orderNumber: string;
    public createdOn: Date;
    public products: ProductModel[];
}