import IBaseRepository from '../../../Shared/Infrastructure/Repositories/IBaseRepository';
import ICriteria from '../../../Shared/Presentation/Requests/ICriteria';
import IPaginator from '../../../Shared/Infrastructure/Orm/IPaginator';
import IProduct from 'Product/Domain/Entities/IProduct';

interface IProductRepository extends IBaseRepository<IProduct>
{
    list(criteria: ICriteria): Promise<IPaginator>
}

export default IProductRepository;
