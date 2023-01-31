import { REPOSITORIES } from '../../../Config/Injects';
import { getRequestContext } from '../../../Shared/Presentation/Shared/RequestContext';
import IProduct from '../Entities/IProduct';
import IIProductRepository from '../../Infraestructure/Repositories/IProductRepository';

class ListProductsUseCase
{
    private repository: IIProductRepository;

    constructor()
    {
        const { container } = getRequestContext();
        this.repository = container.resolve<IIProductRepository>(REPOSITORIES.IProductRepository);
    }

    async handle(): Promise<IProduct[]>
    {
        const response = await this.repository.getAll({ populate: 'category' });
        return response.filter(e => e.category.enable === true);
    }
}

export default ListProductsUseCase;
