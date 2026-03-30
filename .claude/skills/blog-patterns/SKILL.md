---
name: blog-patterns
description: Patterns cho Next.js blog với Tina CMS. Dùng khi tạo component mới, xử lý MDX, hoặc làm việc với Tina schema.
allowed-tools: Read, Grep, Glob
---

# Blog Patterns

## Đọc frontmatter từ MDX
```typescript
import { allBlogs } from 'contentlayer/generated'

// Lấy tất cả bài đã publish, sort theo date
const posts = allBlogs
  .filter(post => !post.draft)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
```

## Component bài viết mẫu
```typescript
interface PostCardProps {
  title: string
  title_en?: string
  date: string
  summary: string
  tags: string[]
  slug: string
  language: 'vi' | 'en' | 'both'
}

export function PostCard({ title, date, summary, tags, slug }: PostCardProps) {
  return (
    <article className="py-6 border-b border-gray-200 dark:border-gray-700">
      <time className="text-sm text-gray-500">{date}</time>
      <h2 className="text-xl font-serif font-bold mt-1">
        <a href={`/blog/${slug}`} className="hover:text-gray-600">
          {title}
        </a>
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2">{summary}</p>
    </article>
  )
}
```

## Tina field types thường dùng
- `string` — text ngắn
- `rich-text` — markdown editor (dùng cho body)
- `datetime` — date picker
- `boolean` — toggle (draft)
- `string` với `list: true` — tags array
- `image` — upload ảnh
