import Link from 'next/link';

const Footer = () => (
    <footer>
        <Link href="/">
            <a>link</a>
        </Link>
        <Link href="/about">
            <a>link</a>
        </Link>
    </footer>
);

export default Footer;