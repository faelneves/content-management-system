export interface CreateArticleDTO {
  title: string;
  content: string;
  createdBy: string;
  categories?: string[];
}