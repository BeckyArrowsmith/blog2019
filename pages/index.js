import data from "../data/contentful-data.json";

function Home() {
    // return JSON.stringify(data[0].fields.title + data[0].fields.content);
    const postData = data.map((post) => 
        <article id={post.fields.slug}>
            <h2>{post.fields.title}</h2>
            <p>{post.fields.content}</p>
        </article>);

    return (
        <div>
            {postData}
        </div>
    );

    // const data = [{ "name": "test1", "content": "content" }, { "name": "test2", "content": "content" }];
    // const listItems = data.map((d) => <section>{d.name} {d.content}</section>);

    // return (
    //     <div>
    //         {listItems}
    //     </div>
    // );
}   

export default Home