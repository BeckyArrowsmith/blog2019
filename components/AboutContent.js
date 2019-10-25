import data from "../data/about-page.json";
import Markdown from "markdown-to-jsx";

const AboutContent = () => {
    function dateFormat(date) {
      return new Date(date).toLocaleDateString();
    }

    const content = data.map(page => (
        <article key={page.id} id={page.fields.slug}>
            <section className="container">
                <h1>{page.fields.title}</h1>

                <Markdown className="page-content-markdown">
                    {page.fields.content}
                </Markdown>

                <p>Last edited: <time><strong>{dateFormat(page.fields.dateLastEdited)}</strong></time></p>
            </section>
        </article>
    ));
    return <div>{content}</div>;
};

export default AboutContent;
