import nextra from "nextra";

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false,
  },
  contentDirBasePath: "/",
});

export default withNextra({
  reactStrictMode: true,
  turbopack: {
    root: process.cwd(),
    resolveAlias: {
      "next-mdx-import-source-file": "./next-mdx-import-source-file.ts",
    },
  },
});
