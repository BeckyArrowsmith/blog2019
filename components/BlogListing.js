import data from "../data/contentful-data.json";
import Markdown from 'markdown-to-jsx';

function BlogListing() {
    const postData = data.map((post) =>        
        <article key={post.id} id={post.fields.slug}>
            <h2><a href={'http://localhost:3000/post?slug=' + post.fields.slug}>{post.fields.title}</a></h2>

            <p>Created at: {post.sys.createdAt}</p>
            <p>Updated at: {post.sys.updatedAt}</p>

            <img src={post.fields.headlineImage.fields.file.url} alt={post.fields.headlineImage.fields.description} />

            <Markdown>{post.fields.content}</Markdown>

            <section id="tags">
                <h3>Tags:</h3>
                <ul>
                    {post.fields.tags.map((tag) => <li key={post.id}><a href={'http://localhost:3000/tags?tag=' + tag}>{tag}</a></li>)}
                </ul>
            </section>
        </article>
    );

    return (
        <div class="container">
            {postData}
        </div>
    );
}

export default BlogListing