const mongoose = require("mongoose");
const { Schema } = mongoose;

const rawEmailSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    messageId: { type: String, required: true },
    threadId: String,
    from: String,
    to: [String],
    subject: String,
    snippet: String,
    bodyText: String,
    receivedAt: Date,
    isRead: Boolean,
    labels: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("RawEmail", rawEmailSchema);
