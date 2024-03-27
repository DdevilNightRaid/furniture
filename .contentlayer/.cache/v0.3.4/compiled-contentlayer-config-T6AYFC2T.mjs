// contentlayer.config.js
import { defineDocumentType } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
var computedFields = {
  slug: {
    type: "slug",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath.split("/").slice(1).join("/")}`
  }
};
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `complete-nextjs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    published: {
      type: "boolean",
      default: true
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/content",
  documentType: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypePlugins,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-T6AYFC2T.mjs.map