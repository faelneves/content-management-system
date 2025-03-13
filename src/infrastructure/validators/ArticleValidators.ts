import { z } from "zod";
import { CreateArticleDTO } from "../../domain/dtos/CreateArticleDTO";
import { objectIdSchema } from "./CustomValidators";

export const CreateArticleSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  createdBy: objectIdSchema,
  categories: z.array(z.string()).optional(),
}) satisfies z.ZodType<CreateArticleDTO>;