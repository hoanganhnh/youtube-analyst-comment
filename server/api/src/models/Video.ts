import { Schema, model, Document } from "mongoose";

export interface VideoDocument extends Document {
  channel_name: string;
  channel_url: string;
  channel_category: string;
  video_id: string;
  video_title: string;
  video_url: string;
  video_thumbnail_url: string;
  is_live: boolean;
  info_type: string;
  timestamp: number;
}

const VideoSchema = new Schema<VideoDocument>(
  {
    channel_name: {
      type: Schema.Types.String,
    },
    channel_url: {
      type: Schema.Types.String,
    },
    channel_category: {
      type: Schema.Types.String,
    },
    video_id: {
      type: Schema.Types.String,
    },
    video_title: {
      type: Schema.Types.String,
    },
    video_url: {
      type: Schema.Types.String,
    },
    video_thumbnail_url: {
      type: Schema.Types.String,
    },
    is_live: {
      type: Schema.Types.Boolean,
    },
    info_type: {
      type: Schema.Types.String,
    },
    timestamp: {
      type: Schema.Types.Number,
    },
  },
  {
    timestamps: true,
  }
);

export const videoModel = model<VideoDocument>("Video", VideoSchema);
