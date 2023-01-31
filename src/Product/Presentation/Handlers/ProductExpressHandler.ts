import { NextFunction, Request, Response } from 'express';
import { controller, httpDelete, httpGet, httpPost, httpPut, next, request, response } from 'inversify-express-utils';
import StatusCode from '../../../Shared/Application/StatusCode';

import ExpressResponder from '../../../Shared/Application/Http/ExpressResponder';
import AuthorizeExpressMiddleware from '../../../Auth/Presentation/Middlewares/AuthorizeExpressMiddleware';
import Permissions from '../../../Config/Permissions';

import ProductController from '../Controllers/ProductController';
import IProduct from 'Product/Domain/Entities/IProduct';


import { AuthUser } from '../../../Auth/Presentation/Helpers/AuthUser';
import ResponseMessageEnum from '../../../Shared/Domain/Enum/ResponseMessageEnum';
import DefaultMessageTransformer from '../../../Shared/Presentation/Transformers/DefaultMessageTransformer';
import ListProductsUseCase from 'Product/Domain/UseCases/ListProductsUseCases';

@controller('/api/products')
class CategoryExpressHandler
{
    private responder: ExpressResponder;
    private readonly controller: ProductController;

    constructor()
    {
        this.responder = new ExpressResponder();
        this.controller = new ProductController();
    }

    @httpPost('/', void AuthorizeExpressMiddleware(Permissions.PRODUCTS_SAVE))
    public async save(@request() req: Request, @response() res: Response, @next() nex: NextFunction)
    {
        const data = {
            authUser: AuthUser(req),
            ...req.body
        };

        const item: IProduct = await this.controller.save(data);

        void await this.responder.send(item, req, res, StatusCode.HTTP_CREATED, new DefaultMessageTransformer(ResponseMessageEnum.CREATED));
    }

    public async list(): Promise<IProduct[]>
    {
        const useCase = new ListProductsUseCase();
        return await useCase.handle();
    }
}

export default CategoryExpressHandler;
