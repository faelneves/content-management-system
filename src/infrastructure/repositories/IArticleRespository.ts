import { CreateArticleDTO } from "../../domain/dtos/CreateArticleDTO";
import { IArticle } from "../../domain/models/Article";

export interface IArticleRepository {
  create(data: CreateArticleDTO): Promise<IArticle>;
}