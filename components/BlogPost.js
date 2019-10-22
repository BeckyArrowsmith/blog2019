import data from "../data/contentful-data.json";
import Markdown from 'markdown-to-jsx';

import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()

    function dateFormat(date) {
        return new Date(date).toLocaleDateString();
    }

    function isPost404(postData) {
        if(postData === undefined || postData.length == 0) {
            return "404: This post does not exist. Ḑ̸̨̢̨̧̡̨̧̛̻͚̰͈̣͚̘̗͙̤͖̼̺̖̬̥̫̼͉͉̯͎͙̗̰͇̭̯̲̖̠̥͈̼̬̙̥̥̼̭̪͖͓̫̝͖̱̘̜͈͍͚̻͍̣͍̣̙̦̘̹̼͍̤̰̲̺̰̙̮̪̟̟̗̱͇̞̱̬͔̲̥͕̣̝͉̰̫̳̻͓̬͎̦̙͔̬͛̾̀̑͌͐̇́͌́̒̂͐̈́͑̎̈̅̌͂̍̑͛̄̊̿̏̌̀̒͋̊̿͆͛͛͆̏̍̀̾̇̅͌͆̃̈́̑̄̇̓̓͗͂̒̀͛̓̏̈́͋͑̎̈́̌̑̔̈͗͋̀̚̚̕͘͜͝͝͝͠͝͝ͅƠ̴̢̢̢̯͕͖͙͕̦̬̱̹̼̭͕̮͕͖̻̹̹̝̙̼͙̰̟̪̯̍́̍̇̄̈́̊̈́͋́̾̍͗̐̉͊̌̾̽͑͋́̈͌̿̎̿̂͊̕̕͝ͅͅ ̶̢̨̢̨̢̧̨̡̧̧̧̨̡̧̧̡̧̨̨̛̛̟̙̘̜̦̤̮̪̣͉͓͔̫̼̹̭͇̤̞̜̬̰̲̻̺̳̟̰͕̺̙̗̻͉̣̩̳͚̲͚̝̠̟͍̙͇͚͖̤̖̻̥̳͎̠̮̖͉̩̬̹̳͉̱̩̟͖̳͍̻͔̝̼̖̼̰̠̞̣̝̞̯̗̣̟̼̳̻̠̠̭̥̤̳̹͈̯̻̝̫̲͔͕͓̮̺̫̙̱̣͙̥̦͚͇͍̪͚̲̭̯̭̘̦̳̩̦͉̻͈̝̣͎̙̫̳͔̻͖̞̣͈̬̬̥̳̫͔͓͎̳̪̖̜̼̻͓̹̺̤̦͉̇̓̏̐͑͛̅͊̈̆̐̀͒̈́̋̎͆̍̈́̑͑͛̒̾̃̑̈́̏̇́͗͒͂̂̚͜͜͜͜͜͝͝͝ͅͅͅͅͅͅY̶̧̢̡̛̛̛͎̻͕̲̟̘̫̙̖̫͖͚͔̪̗̘͎̤̼͉̫̟͙͚̙̮̰̝̦̝͚̙̭͎͎͚̻̫̤̗̖̣̱̹̰̺͙͐̄̈́̈́̒̈́͂̈́͒̑̄́̈́̔̊̃̃̾̉̈́͛͂̑͋̽́͂̄̈́̄̉̎̓́̀̀̄̾́́̒̓̽̑̏́́͋̀͊̽̐̆̽̓́̊͛͑̎̊͂͋̍̑̊̈́̒̃̓̅͑̈͒̎́̓̂̍̓̓̋̇̾̅̄͊̈́̀̀̀̐̎͂́͂͘͘͘̕̚̕͘̕͘͘̕͜͜͝͝͝ͅǪ̸̢̡̨̡̢̨̡̢̭̤͍̩͙̰̣͈̜͙̩̦͎̙̻̰̘͎̭̦̰̱̙̦̩̻̻̫͚͙͚͓̘͓̩̻̜̜̗͕̪̥͙̲̲̪̖͓̝̰̻̻̪͎̩̳͎̲͎̳̙̖̼̼̯̠̞͔͍̩̤̙͖̤͕̻̣͖͈̖̙͓͇̝̻̘͔̗͇̲̥͓͍͇̥̼͉̟̹̳͉̭̹͕̦̰̈́͜͝ͅƯ̶̢̧̡̢̡̢̧̢̛̰̟̖͇̫̤̦͈̩̹͎̗͚̹͚͍͉̞͇͎̳̘̙̰͚̼̥̰͖̱̪̪͓̮̫̙͚͚͈̦͎̖̪͎̮̙̹̰̪̖͎̰̘̱̹̖͙͍͙̙͕͔͔̰͉̘͇͈̜͕͔̫͈̠̲̠͌́̓̏̏̓͛̂̌͂̃̂̒̾̽̔̒̈́͂͑̔̏̅̐̔́̎͗̋̃̌͌̑́̄̈́̈́̒̊̇̑̔̏̓̄̾̀̓͒̊̉̇̋͑̂̈̊͐́̀̏̑͆̔̉͌͂͛̓̍̐̐̄̈́̓̀̀̍̐̈́̂̎̏̽̽́̐̈́̑͌̀̄̋̑͑͐͂͛̈͋̑̀̎͑̈́̈́̀̊̿̏̓̌̾̾̎̂̑́̈́́̂͂̾̐̓̀̂̌͐̈́̓̂̀̅̈́͗̆́͆̌́̏̉͂̓̌̽̔͆̿̆̉̄͒͛͘͘̚̚̚͘̕̕͘̕͜͜͜͜͝͠͠͠͝͝͠͝͠͝͝͝ͅͅ?̸̡̢̨̢̢̢̧̡̧̨̢̡̛̛̛̛̛͇̫͚̱͇̼͓͈͓̳̖͎͇̤͎̜̮̖͎͖̫̣̞͇̯̠̗̦̞̼̣̪̮̖͍͈̠̪̜͈̗͔̭̬̖̩͇̤̺͇͔͓̮͕͈̩̮͖͕̺̹͖͇̖̮̙̪̰̯̳͈̞͎͕̲̭͕̪̲̩͓̭͍̹̫͖̫͙̖̜̭̪͎̥͎̤̟̪͖͓̺̳͍̗̟̤͖̞̘̜̗̝͍̘̪̦͙̟͈̙͓͖̦̠̤͕̰͚̰̥̤͕̖͎̞̭̰̰̞̜͇̖̮͙̮̭̠͉͍̭̹̫̩̐͆̇̎͌̈̏̄̃͑͒̅̒̾̌̿̍̄̈͌̐̄͛͐͗̔̎͒͒̾͋͒̌̑̌̿͒̆͂̀͑̋̄̽͗́̐̅̋͒̈̌͐͋̀͌̑͐͑̄͊̐̿̍͂̃͗̍̔̽̊̈́̈́͌̂̀͌́͋͐͋̋̄͆̑̒́̌͗̇̀̌̔̔̓̏̌̽͐̉̇̍́̐̒̍̓̒͂̀̅̆̔͐̍̑̌̐̒́̏͋̎̐̈͋̑̍̊͋́͒̂́̾̿̕̕̕̕̚͘̕͘̚͜͜͜͜͝͝͠͠͠͝͝͝͝͠͠͝ͅͅͅͅͅ"
        } else {
            return postData
        }
    }

    const postData = data.filter(post => post.fields.slug === router.query.slug).map((post) =>
        <article key={post.id} id={post.fields.slug}>
            <section class="headline-image">
                <img src={post.fields.headlineImage.fields.file.url} alt={post.fields.headlineImage.fields.description} />
            </section>
            
            <section class="container">
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
            </section>
        </article>
    );
    return (
        <div>
            {isPost404(postData)}
        </div>
    )
}

export default Post