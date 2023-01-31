import Category from '../Entities/Category';
import ICategoryRepPayload from '../Payloads/ICategoryRepPayload';

class ItemBuilder
{
    private _category: ICategoryRepPayload;
    private _payload: ICategoryRepPayload;

    constructor(payload?: ICategoryRepPayload)
    {
        this._payload = payload;
    }

    setCategory(category?: ICategoryRepPayload)
    {
        this._category = category ?? new Category();

        return this;
    }

    build()
    {
        this._category.title = this._payload.title;
        this._category.enable = this._payload.enable;

        return this._category;
    }
}

export default ItemBuilder;
