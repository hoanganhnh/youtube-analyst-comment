import { Schema, model, Document } from "mongoose";

export interface CommentDocument extends Document {
  video_id: string;
  message_time_usec: number;
  message_dt: string;
  message_author_name: string;
  message_content: string;
  author_photo_url: string;
  author_channel_id: string;
  type_comment: string;
  timestamp: number;
  info_type: string;
}

const commentSchema = new Schema<CommentDocument>(
  {
    video_id: {
      type: "String",
    },
    message_time_usec: {
      type: "Number",
    },
    message_dt: {
      type: "String",
    },
    message_author_name: {
      type: "String",
    },
    message_content: {
      type: "String",
    },
    author_photo_url: {
      type: "String",
    },
    author_channel_id: {
      type: "String",
    },
    type_comment: {
      type: "String",
    },
    timestamp: {
      type: "Number",
    },
    info_type: {
      type: "String",
    },
  },
  {
    timestamps: true,
  }
);

export const commentModel = model<CommentDocument>("comment", commentSchema);
