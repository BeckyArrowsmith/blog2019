import data from "../data/contentful-posts.json";
import Markdown from "markdown-to-jsx";

function BlogListing() {    
    function dateFormat(date) {
        return new Date(date).toLocaleDateString()
    }

    const postData = data.map(post => (
        <article key={post.fields.slug} id={post.fields.slug}>
            <section className="container">
                <section id="post-meta">
                    <span id="date-created">
                        <time><strong>{dateFormat(post.fields.datePublished)}</strong></time>
                    </span>

                    <section id="tags">
                        <ul>
                            <li key="Tags"><em>Tags:</em></li>

                            {post.fields.tags.map(tag => (
                                <li key={tag}>
                                    <em><a href={"/tags?tag=" + tag}>{tag}</a></em>
                                </li>
                            ))}
                        </ul>
                    </section>
                </section>

                <h1>
                    <a href={"/post?slug=" + post.fields.slug}>
                        {post.fields.title}
                    </a>
                </h1>

                <Markdown className="post-content-markdown">
                    {post.fields.content.substring(0, 400) + "..."}
                </Markdown>

                <a id="read-more" href={"/post?slug=" + post.fields.slug}>Read more</a>
            </section>

            <hr/>
        </article>
    ));

    return (
        <div>
            {postData}
        </div>
    );
}

export default BlogListing