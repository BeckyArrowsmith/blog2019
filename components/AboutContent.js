import data from "../data/about-page.json";
import Markdown from "markdown-to-jsx";

const AboutContent = () => {
    const content = data.map(page => (
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
