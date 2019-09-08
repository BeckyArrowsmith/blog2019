import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
    <header>
        <h1>becky.codes</h1>
        
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
    </header>
);

export default Header;