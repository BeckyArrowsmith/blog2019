import Nav from '../components/Nav';

const Header = () => (
    <header className="Header">
        <h1>becky.codes</h1>

        <Nav />

        <style jsx>{`
            background-color: red;
            width: 100%;
        `}</style>
    </header>
);

export default Header;