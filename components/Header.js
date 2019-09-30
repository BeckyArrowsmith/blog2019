import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
    <header className="Header">
        <h1>becky.codes</h1>
        
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>

        <style jsx>{`
            background-color: red;
            width: 100%;
        `}</style>
    </header>
);

export default Header;