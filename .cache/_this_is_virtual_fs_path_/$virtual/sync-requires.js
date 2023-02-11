
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/clairemanthey/design_blog/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/clairemanthey/design_blog/src/pages/404.js")),
  "component---src-pages-blog-index-js": preferDefault(require("/Users/clairemanthey/design_blog/src/pages/blog/index.js")),
  "component---src-pages-contact-index-js": preferDefault(require("/Users/clairemanthey/design_blog/src/pages/contact/index.js")),
  "component---src-pages-tags-index-js": preferDefault(require("/Users/clairemanthey/design_blog/src/pages/tags/index.js")),
  "component---src-templates-about-page-js": preferDefault(require("/Users/clairemanthey/design_blog/src/templates/about-page.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/clairemanthey/design_blog/src/templates/blog-post.js")),
  "component---src-templates-index-page-js": preferDefault(require("/Users/clairemanthey/design_blog/src/templates/index-page.js")),
  "component---src-templates-tags-js": preferDefault(require("/Users/clairemanthey/design_blog/src/templates/tags.js"))
}

