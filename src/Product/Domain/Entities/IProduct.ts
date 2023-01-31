import { float } from '@deepkit/type';
import Category from 'Category/Domain/Entities/Category';

interface IProduct {
    price: float;
    title: string;
    enable: boolean;
    category: Category;
}

export default IProduct;
