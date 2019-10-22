import data from "../data/contentful-data.json";
import Markdown from "markdown-to-jsx";

import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()

    function dateFormat(date) {
      return new Date(date).toLocaleDateString();
    }

    const postData = data.filter(post => post.fields.tags.includes(router.query.tag)).map((post) =>
        <article key={post.id} id={post.fields.slug}>
            <section className="container">
                <section id="post-meta">
                    <span id="date-created">
                        <time><strong>{dateFormat(post.fields.datePublished)}</strong></time>
                    </span>

                    <section id="tags">
                        <ul>
                            <li><em>Tags:</em></li>
                            
                            {post.fields.tags.map(tag => (
                            <li>
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
    );
    return (
        <div>
            <h1 className="tag-page-headline container">Showing articles with tag: <span>{router.query.tag}</span></h1>
            {postData}
        </div>
    )
}

export default Post