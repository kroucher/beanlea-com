function PortfolioPreview({ project }) {
  const { frontmatter } = project;
  return (
    <div>
      <div>
        <h1>{frontmatter.title}</h1>
      </div>
      <div>
        <p>{frontmatter.description}</p>
        <div>
          Tagged:
          {frontmatter.tags.map((t) => (
            <div data-tag={t}>{t}</div>
          ))}
        </div>
        <a href={project.url}>
          <span>View</span>
        </a>
      </div>
    </div>
  );
}

export default PortfolioPreview;
