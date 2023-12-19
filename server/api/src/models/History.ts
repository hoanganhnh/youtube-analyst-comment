import { Schema, model, Document } from "mongoose";

export interface HistoryDocument extends Document {
  userId: string;
  videoId: string;
}

const HistorySchema = new Schema<HistoryDocument>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    videoId: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  },
  {
    timestamps: true,
  }
);

export const History = model<HistoryDocument>("History", HistorySchema);
