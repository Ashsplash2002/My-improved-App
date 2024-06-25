const mongoose = require("mongoose");

const disorderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  dateDiagnosed: {
    type: Date,
    required: true,
  },
  intensityLogs: [
    {
      date: {
        type: Date,
        required: true,
      },
      intensity: {
        type: Number,
        default: 0,
      },
    },
  ],
});

const Disorder = mongoose.model("Disorder", disorderSchema);

module.exports = Disorder;
