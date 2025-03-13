import { Schema, model, Document, Types } from "mongoose";

interface IComment extends Document {
  content: string;
  article: Types.ObjectId;
  user: Types.ObjectId;
  parentComment?: Types.ObjectId;
  replies: Types.ObjectId[];
  createdAt: Date;
}

const commentSchema = new Schema<IComment>(
  {
    content: { type: String, required: true },
    article: { type: Schema.Types.ObjectId, ref: "Article", required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    parentComment: { type: Schema.Types.ObjectId, ref: "Comment" },
    replies: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

export default model<IComment>("Comment", commentSchema);