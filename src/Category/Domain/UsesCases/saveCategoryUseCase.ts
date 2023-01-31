import { REPOSITORIES } from '../../../Config/Injects';
import { getRequestContext } from '../../../Shared/Presentation/Shared/RequestContext';
import ICategoryRepPayload from '../Payloads/ICategoryRepPayload';
import CategoryBuilder from '../Factories/CategoryBuilder';
import ICategoryRepository from 'Category/Infraestructure/Repositories/ICategoryRepository';

class SaveCategoryUseCase
{
    private repository: ICategoryRepository;

    constructor()
    {
        const { container } = getRequestContext();
        this.repository = container.resolve<ICategoryRepository>(REPOSITORIES.ICategoryRepository);
    }

    async handle(payload: ICategoryRepPayload): Promise<ICategoryRepPayload>
    {
        const item: ICategoryRepPayload = new CategoryBuilder(payload)
            .setCategory()
            .build();

        return await this.repository.save(item);
    }
}

export default SaveCategoryUseCase;
