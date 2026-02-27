const mongoose = require("mongoose");
const { Schema } = mongoose;

const classifiedEmailSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    emailId: { type: Schema.Types.ObjectId, ref: "RawEmail", required: true },

    // AI output
    mainCategory: {
      type: String,
      enum: ["important", "job", "event", "spam", "promotion"],
      required: true,
    },
    subCategory: String,          // e.g., "internship", "meeting", "offer"
    spamScore: Number,            // 0 to 1 from model
    priorityLevel: {              // how urgent for UI
      type: String,
      enum: ["high", "medium", "low"],
    },

    modelVersion: String,         // e.g., "bert-v1"
    needsReview: { type: Boolean, default: false },
    userOverrideCategory: String, // if user changes category in UI
    overrideAt: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("ClassifiedEmail", classifiedEmailSchema);
