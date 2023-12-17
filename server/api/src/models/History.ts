import { Schema, model, Document } from "mongoose";

const { String } = Schema.Types;

export interface HistoryDocument extends Document {
  userId: string;
  videoId: string;
  titleVideo: string;
  authorVideo: string;
  authorChannelId: string;
}

const HistorySchema = new Schema<HistoryDocument>(
  {
    userId: Schema.Types.ObjectId,
    videoId: String,
    titleVideo: String,
    authorVideo: String,
    authorChannelId: String,
  },
  {
    timestamps: true,
  }
);

export const historyModel = model<HistoryDocument>("History", HistorySchema);
