import data from "../data/contentful-data.json";
import Markdown from 'markdown-to-jsx';

import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()

    function dateFormat(date) {
        return new Date(date).toLocaleDateString();
    }

    const postData = data.filter(post => post.fields.slug === router.query.slug).map((post) =>
        <article key={post.id} id={post.fields.slug}>
            <section class="headline-image">
                <img src={post.fields.headlineImage.fields.file.url} alt={post.fields.headlineImage.fields.description} />
            </section>
            
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
                                <em><a href={"http://localhost:3000/tags?tag=" + tag}>{tag}</a></em>
                            </li>
                            ))}
                        </ul>
                    </section>
                </section>
                
                <h2 ><a href={'http://localhost:3000/post?slug=' + post.fields.slug}>{post.fields.title}</a></h2>

                <Markdown className="post-content-markdown">{post.fields.content}</Markdown>
            </section>
        </article>
    );
    return (
        <div>
            {postData}
        </div>
    )
}

export default Post