import { ProductModel } from '../Models/ProductModel';
export class OrderModel {
    public OrderNumber: string;
    public CreatedOn: Date;
    public Products: ProductModel[];
}