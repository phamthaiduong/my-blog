# my-blog

Blog cá nhân song ngữ VI/EN. Tối giản, trắng/đen.

## Stack
- Next.js 14 (App Router) + TypeScript
- Tina CMS — soạn thảo trực tiếp trên web tại /admin
- Tailwind CSS — tối giản, chỉ dùng gray/neutral palette
- Vercel — deploy tự động khi push lên GitHub

## Commands
- `npm run dev` — chạy local tại localhost:3000
- `npm run build` — build production
- `npm run lint` — ESLint
- `npx tinacms dev` — chạy Tina CMS local

## Cấu trúc quan trọng
- `data/blog/` — file .mdx của từng bài viết
- `data/siteMetadata.js` — thông tin site (title, author, URL)
- `tina/config.ts` — schema CMS (fields của bài viết)
- `tailwind.config.js` — màu sắc, font
- `layouts/` — layout templates
- `components/` — UI components dùng chung

## Frontmatter của bài viết
```yaml
title: 'Tiêu đề tiếng Việt'
title_en: 'English title'
date: '2026-03-30'
language: 'vi' | 'en' | 'both'
tags: ['tag1', 'tag2']
summary: 'Tóm tắt ngắn'
draft: false
```

## Conventions
- File bài viết đặt tên dạng slug: `ten-bai-viet.mdx`
- Ngày theo format ISO: YYYY-MM-DD
- Ảnh đặt trong `public/static/images/`
- Không thay đổi palette màu — giữ tối giản gray/neutral
- Component mới đặt trong `components/`, không inline vào page

## Deploy flow
Push lên GitHub → Vercel tự build → live sau ~1 phút
CMS: vào /admin → soạn bài → Tina commit .mdx lên GitHub → auto deploy
