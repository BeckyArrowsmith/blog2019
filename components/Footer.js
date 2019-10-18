import Link from 'next/link';

const Footer = () => (
    <footer class="container">
        <Link href="/about">
            <a>About</a>
        </Link>
        <Link href="http://github.com/BeckyArrowsmith">
            <a>GitHub</a>
        </Link>
    </footer>
);

export default Footer;