import IBaseRepository from '../../../Shared/Infrastructure/Repositories/IBaseRepository';
import ICriteria from '../../../Shared/Presentation/Requests/ICriteria';
import IPaginator from '../../../Shared/Infrastructure/Orm/IPaginator';
import ICategory from 'Category/Domain/Entities/ICategory';

interface ICategoryRepository extends IBaseRepository<ICategory>
{
    list(criteria: ICriteria): Promise<IPaginator>
}

export default ICategoryRepository;
