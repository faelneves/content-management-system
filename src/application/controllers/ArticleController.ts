import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { IArticleService } from "../services/IArticleService";


@injectable()
export class ArticleController {
  constructor(
    @inject('IArticleService') private service: IArticleService
  ) { }

  async createArticle(req: Request, res: Response) {
    try {
      const result = await this.service.createArticle(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }

}