import { Schema, model, Document } from "mongoose";

export interface HistoryDocument extends Document {
  userId: string;
  video_id: string;
}

const HistorySchema = new Schema<HistoryDocument>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    video_id: {
      type: Schema.Types.String,
    },
  },
  {
    timestamps: true,
  }
);

export const historyModel = model<HistoryDocument>("History", HistorySchema);
