// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "public/static/images/uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Posts",
        path: "data/blog",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Ti\xEAu \u0111\u1EC1 (VI)",
            required: true,
            isTitle: true
          },
          {
            type: "string",
            name: "title_en",
            label: "Title (EN)"
          },
          {
            type: "datetime",
            name: "date",
            label: "Ng\xE0y \u0111\u0103ng",
            required: true
          },
          {
            type: "string",
            name: "language",
            label: "Ng\xF4n ng\u1EEF",
            options: [
              { value: "vi", label: "Ti\u1EBFng Vi\u1EC7t" },
              { value: "en", label: "English" },
              { value: "both", label: "Song ng\u1EEF" }
            ]
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true
          },
          {
            type: "string",
            name: "summary",
            label: "T\xF3m t\u1EAFt",
            ui: { component: "textarea" }
          },
          {
            type: "image",
            name: "images",
            label: "\u1EA2nh \u0111\u1EA1i di\u1EC7n"
          },
          {
            type: "boolean",
            name: "draft",
            label: "B\u1EA3n nh\xE1p"
          },
          {
            type: "rich-text",
            name: "body",
            label: "N\u1ED9i dung",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
