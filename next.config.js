/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  compiler: {
    styledComponents: true,
  },
};

module.exports = withMDX(nextConfig);
