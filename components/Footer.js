import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Footer = () => (
    <footer>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
        <Link href="http://github.com/BeckyArrowsmith">
            <a style={linkStyle}>GitHub</a>
        </Link>
    </footer>
);

export default Footer;