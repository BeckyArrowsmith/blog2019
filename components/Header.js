import Nav from "../components/Nav";

const Header = () => (
    <header className="Header">
        <Nav />

        <div className="container bio">
            <h1>becky.codes</h1>

            <p>This is my bio. It will be very concise and explain who I am in little words.</p>
            <p>Maybe even on two lines.</p>
            <p><a href="#">Twitter</a> <a href="#">Github</a></p>
        </div>
    </header>
);

export default Header;