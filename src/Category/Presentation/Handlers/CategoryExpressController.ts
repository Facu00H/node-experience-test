import { NextFunction, Request, Response } from 'express';
import { controller, httpDelete, httpGet, httpPost, httpPut, next, request, response } from 'inversify-express-utils';
import StatusCode from '../../../Shared/Application/StatusCode';

import ExpressResponder from '../../../Shared/Application/Http/ExpressResponder';
import AuthorizeExpressMiddleware from '../../../Auth/Presentation/Middlewares/AuthorizeExpressMiddleware';
import Permissions from '../../../Config/Permissions';

import CategoryController from '../Controllers/CategoryController';
import ICategory from 'Category/Domain/Entities/ICategory';

import { AuthUser } from '../../../Auth/Presentation/Helpers/AuthUser';
import ResponseMessageEnum from '../../../Shared/Domain/Enum/ResponseMessageEnum';
import DefaultMessageTransformer from '../../../Shared/Presentation/Transformers/DefaultMessageTransformer';

@controller('/api/categories')
class CategoryExpressHandler
{
    private responder: ExpressResponder;
    private readonly controller: CategoryController;

    constructor()
    {
        this.responder = new ExpressResponder();
        this.controller = new CategoryController();
    }

    @httpPost('/', void AuthorizeExpressMiddleware(Permissions.CATEGORIES_SAVE))
    public async save(@request() req: Request, @response() res: Response, @next() nex: NextFunction)
    {
        const data = {
            authUser: AuthUser(req),
            ...req.body
        };

        const item: ICategory = await this.controller.save(data);

        void await this.responder.send(item, req, res, StatusCode.HTTP_CREATED, new DefaultMessageTransformer(ResponseMessageEnum.CREATED));
    }
}

export default CategoryExpressHandler;
