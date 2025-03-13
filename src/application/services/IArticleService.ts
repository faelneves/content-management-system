import { CreateArticleDTO } from "../../domain/dtos/CreateArticleDTO";
import { IArticle } from "../../domain/models/Article";

export interface IArticleService {
  createArticle(data: CreateArticleDTO): Promise<IArticle>;
}