import data from "../data/contentful-posts.json";
import Markdown from 'markdown-to-jsx';
import Prism from "prismjs";
import marksy from "marksy";
import Commento from "../components/Commento";

import { createElement } from "react";

import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()

    function dateFormat(date) {
        return new Date(date).toLocaleDateString();
    }

    const compile = marksy({
      createElement,
      highlight(language, code) {
        return Prism.highlight(
          code,
          Prism.languages.javascript,
          Prism.languages.python,
          language
        );
      }
    });

    const postData = data.filter(post => post.fields.slug === router.query.slug).map((post) =>
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
                
                <h1>{post.fields.title}</h1>

                <Markdown className="post-content-markdown">{post.fields.content}</Markdown>
                
                <Commento />
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