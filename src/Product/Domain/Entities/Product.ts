import Base from 'Shared/Domain/Entities/Base';
import IProduct from './IProduct';
import { float } from '@deepkit/type';
import Category from 'Category/Domain/Entities/Category';

class Product extends Base implements IProduct
{
    price: float;
    title: string;
    enable: boolean;
    category: Category;

    constructor()
    {
        super();
    }
}

export default Product;
