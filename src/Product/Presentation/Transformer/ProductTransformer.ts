import Category from 'Category/Domain/Entities/Category';

interface IProductTransformer
{
    id: string;
    title: string;
    price: number;
    enable: boolean;
    category: Category,
    createdAt: number;
    updatedAt: number;
}

export default IProductTransformer;
