import { ProductModel } from '../Models/ProductModel';

export class CartModel {
    public cartId: string;
    public createdOn: Date;
    public products:ProductModel[]
}