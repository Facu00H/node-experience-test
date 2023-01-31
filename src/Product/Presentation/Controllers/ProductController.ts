import ValidatorSchema from '../../../Shared/Presentation/Shared/ValidatorSchema';
import CriteriaPayload from '../../../Shared/Presentation/Validations/CriteriaPayload';
import ProductSchemaSaveValidation from '../Validations/ProductSchemaValidations';
import ListProductsUseCase from 'Product/Domain/UseCases/ListProductsUseCases';
import IProduct from 'Product/Domain/Entities/IProduct';
import IProductRepPayload from 'Product/Domain/Payloads/IProductRepPayload';
import SaveProductUseCase from 'Product/Domain/UseCases/SaveProductCase';

class ProductController
{
    public async save(payload: IProductRepPayload): Promise<IProduct>
    {
        await ValidatorSchema.handle(ProductSchemaSaveValidation, payload);

        const useCase = new SaveProductUseCase();
        return await useCase.handle(payload);
    }

    public async list(payload: CriteriaPayload): Promise<IProduct[]>
    {
        const useCase = new ListProductsUseCase();
        return await useCase.handle();
    }
}

export default ProductController;
