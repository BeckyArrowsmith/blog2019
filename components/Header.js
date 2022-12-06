import Nav from "../components/Nav";

const Header = () => (
    <header className="Header">
        <Nav />

        <div className="container bio">
            <h1>becky.codes</h1>

            <p>Less code these days, and more adventures in enabling the best out of people and engineering teams</p>
            <p><a href="http://twitter.com/beckycodes">Twitter</a> <a href="http://github.com/beckyarrowsmith">Github</a></p>
        </div>
    </header>
);

export default Header;
