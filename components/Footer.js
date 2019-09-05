import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Footer = () => (
    <footer>
        <Link href="/">
            <a style={linkStyle}>link</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>link</a>
        </Link>
    </footer>
);

export default Footer;