import Base from '../../../Shared/Domain/Entities/Base';
import ICategory from './ICategory';
import ICategoryFunction from './ICategoryFunctions';

class Category extends Base implements ICategory, ICategoryFunction
{
    title: string;
    enable: boolean;

    constructor()
    {
        super();
    }

    enableCategory(): void
    {
        this.enable = true;
    }

    disableCategory(): void
    {
        this.enable = false;
    }
}

export default Category;
