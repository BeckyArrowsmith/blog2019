import Nav from "../components/Nav";

const Header = () => (
    <header className="Header">
        <Nav />

        <div className="container bio">
            <h1>becky.codes</h1>

            <p>Software engineer, tinkerer, curious humanoid</p>
            <p><a href="http://twitter.com/beckycodes">Twitter</a> <a href="http://github.com/beckyarrowsmith">Github</a></p>
        </div>
    </header>
);

export default Header;
