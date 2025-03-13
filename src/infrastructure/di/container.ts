import "reflect-metadata";
import { container } from "tsyringe";
import { IArticleRepository } from "../repositories/IArticleRespository";
import { ArticleRepository } from "../repositories/ArticleRespository";
import { IArticleService } from "../../application/services/IArticleService";
import { ArticleService } from "../../application/services/ArticleService";


container.register<IArticleRepository>("IArticleRepository", {
  useClass: ArticleRepository,
});

container.register<IArticleService>("IArticleService", {
  useClass: ArticleService,
});