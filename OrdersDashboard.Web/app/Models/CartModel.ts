import { ProductModel } from '../Models/ProductModel';

export class CartModel {
    public CartId: string;
    public CreatedOn: Date;
    public Items:ProductModel[]
}