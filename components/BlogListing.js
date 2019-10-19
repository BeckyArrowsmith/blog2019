import data from "../data/contentful-data.json";
import Markdown from 'markdown-to-jsx';

function BlogListing() {
    const postData = data.map((post) =>        
        <article key={post.id} id={post.fields.slug}>
            <section class="headline-image">
                <img src={post.fields.headlineImage.fields.file.url} alt={post.fields.headlineImage.fields.description} />
            </section>

            <section class="container">
                <h2 ><a href={'http://localhost:3000/post?slug=' + post.fields.slug}>{post.fields.title}</a></h2>

                <p>Created at: <time>{post.sys.createdAt}</time></p>
                <p>Updated at: <time>{post.sys.updatedAt}</time></p>

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
    );
}

export default BlogListing