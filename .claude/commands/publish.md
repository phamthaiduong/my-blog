---
description: Publish bài viết — đổi draft thành false và commit
---
1. Tìm file bài viết có draft: true gần nhất
2. Đổi draft: false
3. Kiểm tra frontmatter đầy đủ chưa (title, date, tags, summary)
4. Chạy: npm run build để verify không có lỗi
5. Commit với message: "content: publish [tên bài]"
6. Push lên GitHub
