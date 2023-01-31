import { Schema } from 'mongoose';
import { uuid } from '@deepkit/type';
import Product from 'Product/Domain/Entities/Product';

const ProductSchema: any = new Schema<Product>({
    _id: { type: String, default: uuid },
    title: { type: String, required: true },
    enable: { type: Boolean, required: true },
    price: { type: Number, required: true },
    category: { type: Schema.Types.String, ref: 'Category' }
}, { timestamps: true });

ProductSchema.loadClass(Product);

export default ProductSchema;
