import { Document } from 'mongoose';
import ICategory from 'Category/Domain/Entities/ICategory';

type CategoryMongooseDocument = Document & ICategory

export default CategoryMongooseDocument;
