import { inject, injectable } from 'tsyringe';
import { IArticle } from "../../domain/models/Article";
import { IArticleService } from './IArticleService';
import { CreateArticleDTO } from '../../domain/dtos/CreateArticleDTO';
import { IArticleRepository } from '../../infrastructure/repositories/IArticleRespository';

@injectable()
export class ArticleService implements IArticleService {
  constructor(
    @inject('IArticleRepository') private repository: IArticleRepository
  ) { }

  async createArticle(dto: CreateArticleDTO): Promise<IArticle> {
    return this.repository.create(dto);
  }
}