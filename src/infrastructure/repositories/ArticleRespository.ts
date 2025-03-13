import { injectable } from "tsyringe";
import { CreateArticleDTO } from "../../domain/dtos/CreateArticleDTO";
import Article, { IArticle } from "../../domain/models/Article";
import { IArticleRepository } from "./IArticleRespository";

@injectable()
export class ArticleRepository implements IArticleRepository {

  async create(dto: CreateArticleDTO): Promise<IArticle> {
    return Article.create({
      ...dto,
      createdBy: dto.createdBy,
      versions: [{
        content: dto.content,
        version: 1,
        updatedBy: dto.createdBy,
        timestamp: new Date()
      }]
    });
  }
}