const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    price: {
      type: "number",
      required: true,
    },
    category: {
      type: "string",
      required: true,
    },
    condition: {
      type: "string",
      required: true,
    },
    images: {
      type: "array",
      default: [],
      required: true,
    },
    billAvaiable: {
      type: "boolean",
      default: false,
      required: true,
    },
    warrantyAvailable: {
      type: "boolean",
      default: false,
      required: true,
    },
    ShowProductBids: {
      type: "boolean",
      default: true,
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    status: {
      type: String,
      default: "pending",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", productSchema);
