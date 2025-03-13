import { Schema, model, Document } from "mongoose";

export enum UserRole {
  ADMIN = "Admin",
  EDITOR = "Editor",
  AUTHOR = "Author",
  VIEWER = "Viewer",
}

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  oauthId?: string;
  provider?: "google" | "github";
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: function () { return !this.oauthId; } },
    role: { type: String, enum: Object.values(UserRole), default: UserRole.VIEWER },
    oauthId: { type: String },
    provider: { type: String, enum: ["google", "github"] },
  },
  { timestamps: true }
);

export default model<IUser>("User", userSchema);