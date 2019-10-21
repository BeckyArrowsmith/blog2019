import data from "../data/contentful-data.json";
import Markdown from 'markdown-to-jsx';

function BlogListing() {    
    function dateFormat(date) {
        return new Date(date).toLocaleDateString()
    }

    const postData = data.map(post => (
        <article key={post.id} id={post.fields.slug}>
            <section class="container">
                <section id="post-meta">
                    <span id="date-created">
                        <time><strong>{dateFormat(post.sys.createdAt)}</strong></time>
                    </span>

                    <section id="tags">
                        <ul>
                            <li><em>Tags:</em></li>
                            
                            {post.fields.tags.map(tag => (
                            <li>
                                <em><a href={process.env.BASE_URL + "/tags?tag=" + tag}>{tag}</a></em>
                            </li>
                            ))}
                        </ul>
                    </section>
                </section>

                <h2>
                    <a href={process.env.BASE_URL + "/post?slug=" + post.fields.slug}>
                        {post.fields.title}
                    </a>
                </h2>

                <Markdown className="post-content-markdown">
                    {post.fields.content.substring(0, 400) + "..."}
                </Markdown>

                <a id="read-more" href={process.env.BASE_URL + "/post?slug=" + post.fields.slug}>Read more</a>
            </section>
        </article>
    ));

    return (
        <div>
            {postData}
        </div>
    );
}

export default BlogListing