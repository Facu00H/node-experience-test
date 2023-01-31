import { z } from 'zod';

const CategorySchemaSaveValidation = z.object({
    title: z.string().min(2).max(40),
    enable: z.boolean()
});

export default CategorySchemaSaveValidation;
