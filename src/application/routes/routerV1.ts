import { Router } from "express";
import { validateRequest } from "../middlewares/validationMiddleware";
import { CreateArticleSchema } from "../../infrastructure/validators/ArticleValidators";
import { ArticleController } from "../controllers/ArticleController";
import { container } from "tsyringe";

const articleController = container.resolve(ArticleController);

const router = Router();

router.get('/ping', (req, res) => {
  res.send('pong');
});

router.post(
  "/articles",
  validateRequest(CreateArticleSchema),
  articleController.createArticle
);

export default router;