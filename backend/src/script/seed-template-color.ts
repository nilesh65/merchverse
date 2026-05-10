import "dotenv/config";
import { connectDatabase } from "../config/database.config";
import ProductColor from "../models/product-color.model";

const HOODIE_TEMPLATE_ID = "69ff22bd52d8aef2fde29a37";
const TSHIRT_TEMPLATE_ID = "69ff22bd52d8aef2fde29a36";

const colors = [
  // T-Shirt Colors
  {
    templateId: TSHIRT_TEMPLATE_ID,
    name: "White",
    color: "rgb(255, 255, 255)",
    mockupUrl: "https://res.cloudinary.com/dncizqyqq/image/upload/v1778327987/tshirt-white-mockup_y8hjtx.png", // White tshirt mockup
  },
  {
    templateId: TSHIRT_TEMPLATE_ID,
    name: "Very Dark Gray",
    color: "rgb(26, 26, 26)",
    mockupUrl: "https://res.cloudinary.com/dncizqyqq/image/upload/v1778327986/tshirt-dark-grey-mockup_ybockn.png", // Very dark grey tshirt mockup
  },
  {
    templateId: TSHIRT_TEMPLATE_ID,
    name: "Medium Blue",
    color: "rgb(58, 75, 152)",
    mockupUrl: "https://res.cloudinary.com/dncizqyqq/image/upload/v1778327985/tshirt-medium-blue-mockup_qnn9z2.png", // Medium blue tshirt mockup
  },
  {
    templateId: TSHIRT_TEMPLATE_ID,
    name: "Light Pink",
    color: "rgb(244, 144, 182)",
    mockupUrl: "https://res.cloudinary.com/dncizqyqq/image/upload/v1778327986/tshirt-pink-mockup_slwvlx.png", // Light pink tshirt mockup
  },
  {
    templateId: TSHIRT_TEMPLATE_ID,
    name: "Dark Green",
    color: "rgb(19, 69, 34)",
    mockupUrl: "https://res.cloudinary.com/dncizqyqq/image/upload/v1778327986/tshirt-dark-green-mockup_rojfle.png", // Dark green tshirt mockup
  },

  // Hoodie Colors
  {
    templateId: HOODIE_TEMPLATE_ID,
    name: "White",
    color: "rgb(255, 255, 255)",
    mockupUrl: "https://res.cloudinary.com/dncizqyqq/image/upload/v1778327986/hoodie-white-mockup_rm0oso.png", // White hoodie mockup
  },
  {
    templateId: HOODIE_TEMPLATE_ID,
    name: "Very Dark Gray",
    color: "rgb(15, 15, 15)",
    mockupUrl: "https://res.cloudinary.com/dncizqyqq/image/upload/v1778327985/hoodie-dark-grey-mockup_trvvrs.png", // Very dark gray hoodie mockup
  },
  {
    templateId: HOODIE_TEMPLATE_ID,
    name: "Medium Blue",
    color: "rgb(0, 53, 148)",
    mockupUrl: "https://res.cloudinary.com/dncizqyqq/image/upload/v1778327985/hoodie-medium-blue-mockup_u3eav5.png", // Medium blue hoodie mockup
  },
  {
    templateId: HOODIE_TEMPLATE_ID,
    name: "Red",
    color: "rgb(186, 12, 47)",
    mockupUrl: "https://res.cloudinary.com/dncizqyqq/image/upload/v1778327985/hoodie-red-mockup_tprbpw.png", // Red hoodie mockup
  },
  {
    templateId: HOODIE_TEMPLATE_ID,
    name: "Dark Purple",
    color: "rgb(71, 10, 104)",
    mockupUrl: "https://res.cloudinary.com/dncizqyqq/image/upload/v1778327984/hoodie-dark-purple-mockup_aob5gs.png", // Dark purple hoodie mockup
  },
];

const seedColors = async () => {
  try {
    await connectDatabase();
    const deleted = await ProductColor.deleteMany({})

    const created = await ProductColor.insertMany(colors);
    console.log(`Added the colors ${created.length}`)
  } catch (error) {
    console.log("Error occurred seeding colors", error)
    process.exit(1)
  }
}

seedColors()