import { REPOSITORIES } from '../../../Config/Injects';
import { getRequestContext } from '../../../Shared/Presentation/Shared/RequestContext';
import IProductRepPayload from '../Payloads/IProductRepPayload';
import ProductBuilder from '../Factories/ProductBuilder';
import IProductRepository from 'Product/Infraestructure/Repositories/IProductRepository';

class SaveProductUseCase
{
    private repository: IProductRepository;

    constructor()
    {
        const { container } = getRequestContext();
        this.repository = container.resolve<IProductRepository>(REPOSITORIES.IProductRepository);
    }

    async handle(payload: IProductRepPayload): Promise<IProductRepPayload>
    {
        const product: IProductRepPayload = new ProductBuilder(payload)
            .setProduct()
            .build();

        return await this.repository.save(product);
    }
}

export default SaveProductUseCase;
