import data from "../data/contentful-pages.json";
import Markdown from "markdown-to-jsx";

import { useRouter } from "next/router";

const AboutContent = () => {
  const router = useRouter();

  const content = data
    .filter(page => page.fields.slug === router.query.slug)
    .map(page => (
      <article key={page.id} id={page.fields.slug}>
        <section class="container">
          <h1>{page.fields.title}</h1>

          <Markdown className="page-content-markdown">
            {page.fields.content}
          </Markdown>
        </section>
      </article>
    ));
  return <div>{content}</div>;
};

export default AboutContent;
