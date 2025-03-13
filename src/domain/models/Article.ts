import { Schema, model, Document, Types } from "mongoose";

export enum ArticleStatus {
  DRAFT = "Draft",
  UNDER_REVIEW = "Under Review",
  PUBLISHED = "Published",
  ARCHIVED = "Archived",
}

interface IVersion extends Document {
  content: string;
  version: number;
  updatedBy: Types.ObjectId;
  timestamp: Date;
}

interface IArticle extends Document {
  title: string;
  content: string;
  status: ArticleStatus;
  createdBy: Types.ObjectId;
  collaborators: Types.ObjectId[];
  tags: string[];
  categories: string[];
  versions: IVersion[];
  publishedAt?: Date;
}

const versionSchema = new Schema<IVersion>({
  content: { type: String, required: true },
  version: { type: Number, default: 1 },
  updatedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  timestamp: { type: Date, default: Date.now },
});

const articleSchema = new Schema<IArticle>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    status: {
      type: String,
      enum: Object.values(ArticleStatus),
      default: ArticleStatus.DRAFT,
    },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    collaborators: [{ type: Schema.Types.ObjectId, ref: "User" }],
    tags: [{ type: String }],
    categories: [{ type: String }],
    versions: [versionSchema],
    publishedAt: { type: Date },
  },
  { timestamps: true }
);

articleSchema.index({ tags: 1, categories: 1, status: 1 });

export default model<IArticle>("Article", articleSchema);