import IProduct from 'Product/Domain/Entities/IProduct';
import { Document } from 'mongoose';

type ProductMongooseDocument = Document & IProduct

export default ProductMongooseDocument;
