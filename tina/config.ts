import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "public/static/images/uploads",
      publicFolder: "public",
    },
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
            label: "Tiêu đề (VI)",
            required: true,
            isTitle: true,
          },
          {
            type: "string",
            name: "title_en",
            label: "Title (EN)",
          },
          {
            type: "datetime",
            name: "date",
            label: "Ngày đăng",
            required: true,
          },
          {
            type: "string",
            name: "language",
            label: "Ngôn ngữ",
            options: [
              { value: "vi", label: "Tiếng Việt" },
              { value: "en", label: "English" },
              { value: "both", label: "Song ngữ" },
            ],
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "string",
            name: "summary",
            label: "Tóm tắt",
            ui: { component: "textarea" },
          },
          {
            type: "image",
            name: "images",
            label: "Ảnh đại diện",
          },
          {
            type: "boolean",
            name: "draft",
            label: "Bản nháp",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Nội dung",
            isBody: true,
          },
        ],
      },
    ],
  },
});
