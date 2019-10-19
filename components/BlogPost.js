import data from "../data/contentful-data.json";
import Markdown from 'markdown-to-jsx';

import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()

    const postData = data.filter(post => post.fields.slug === router.query.slug).map((post) =>
        <article key={post.id} id={post.fields.slug}>
            <section class="headline-image">
                <img src={post.fields.headlineImage.fields.file.url} alt={post.fields.headlineImage.fields.description} />
            </section>
            
            <section class="container">
                <h2 ><a href={'http://localhost:3000/post?slug=' + post.fields.slug}>{post.fields.title}</a></h2>
                <p>Created at: {post.sys.createdAt}</p>
                <p>Updated at: {post.sys.updatedAt}</p>

                <Markdown>{post.fields.content}</Markdown>

                <section id="tags">
                    <h3>Tags:</h3>
                    <ul>
                        {post.fields.tags.map((tag) => <li><a href={'http://localhost:3000/tags?tag=' + tag}>{tag}</a></li>)}
                    </ul>
                </section>
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