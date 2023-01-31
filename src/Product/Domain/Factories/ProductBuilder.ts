import Product from '../Entities/Product';
import IProductRepPayload from '../Payloads/IProductRepPayload';
import IProduct from '../Entities/IProduct';

// price - title - enable - category

class ProductBuilder
{
    private _product: IProductRepPayload;
    private _payload: IProductRepPayload;

    constructor(payload?: IProductRepPayload)
    {
        this._payload = payload;
    }

    setProduct(product?: IProduct)
    {
        this._product = product ?? new Product();

        return this;
    }

    build()
    {
        this._product.price = this._payload.price;
        this._product.title = this._payload.title;
        this._product.enable = this._payload.enable;
        this._product.category = this._payload.category;

        return this._product;
    }
}

export default ProductBuilder;
