import ICategoryRepPayload from 'Category/Domain/Payloads/ICategoryRepPayload';
import SaveCategoryUseCase from 'Category/Domain/UsesCases/saveCategoryUseCase';
import ValidatorSchema from 'Shared/Presentation/Shared/ValidatorSchema';
import CategorySchemaSaveValidation from '../Validations/CategorySchemaValidation';

class CategoryController
{
    public async save(payload: ICategoryRepPayload): Promise<ICategoryRepPayload>
    {
        await ValidatorSchema.handle(CategorySchemaSaveValidation, payload);

        const useCase = new SaveCategoryUseCase();
        return useCase.handle(payload);
    }
}

export default CategoryController;
