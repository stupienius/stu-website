const modules = import.meta.glob("/src/content/blog/**/*.md", { eager: true });

export const blogIndex = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = path.split("/").pop()?.replace(".md", "");

    return {
      slug,
      ...mod.frontmatter,
    };
  })
  .sort((a, b) => new Date(b.time) - new Date(a.time));
