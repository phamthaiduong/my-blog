/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'My Blog',
  author: 'Dương Phạm',
  headerTitle: 'My Blog',
  description: 'Blog cá nhân — viết về công nghệ, sản phẩm và cuộc sống.',
  language: 'vi-vn',
  theme: 'system',
  siteUrl: 'https://my-blog.vercel.app',
  siteRepo: 'https://github.com/phamthaiduong/my-blog',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'your@email.com',
  github: 'https://github.com/phamthaiduong',
  locale: 'vi-VN',
  analytics: {},
  newsletter: { provider: '' },
  comments: {},
  search: { provider: 'kbar', kbarConfig: { searchDocumentsPath: 'search.json' } },
}

module.exports = siteMetadata
