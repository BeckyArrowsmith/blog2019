import Nav from "../components/Nav";

const Header = () => (
    <header className="Header">
        <Nav />

        <div className="container bio">
            <h1>becky.codes</h1>

            <p>Less code these days.</p>
            <p>Adventures in enabling the best of people and engineering teams.</p>
            <p><a href="http://twitter.com/beckycodes">Twitter</a> <a href="https://www.linkedin.com/in/beckyarrowsmith/">LinkedIn</a> <a href="http://github.com/beckyarrowsmith">Github</a></p>
        </div>
    </header>
);

export default Header;
