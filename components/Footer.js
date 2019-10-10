import Link from 'next/link';

const Footer = () => (
    <footer>
        <Link href="/about">
            <a>About</a>
        </Link>
        <Link href="http://github.com/BeckyArrowsmith">
            <a>GitHub</a>
        </Link>
    </footer>
);

export default Footer;