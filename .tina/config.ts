import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "haohao.jiang@strikingly.com", // Get this from tina.io
  token: "a41e0c1c214a6bed546c442879d0532ac9dbd229", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        label: "home",
        name: "home",
        path: "home",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "demo_001",
            label: "demo 001",
          },
          {
            type: "image",
            name: "image_001",
            label: "image 001",
          },
        ],
      },
    ],
  },
});
