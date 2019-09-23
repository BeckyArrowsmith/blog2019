import data from "../data/contentful-data.json";

function BlogListing() {
    const postData = data.map((post) =>        
        <article key={post.fields.slug} id={post.fields.slug}>
            <h2><a href={'http://localhost:3000/post?slug=' + post.fields.slug}>{post.fields.title}</a></h2>
            <p>Created at: {post.sys.createdAt}</p>
            <p>Updated at: {post.sys.updatedAt}</p>

            <p>{post.fields.content}</p>

            <section id="tags">
                <h3>Tags:</h3>
                <ul>
                    {post.fields.tags.map((tag) => <li><a href={'http://localhost:3000/tags?tag=' + tag}>{tag}</a></li>)}
                </ul>
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