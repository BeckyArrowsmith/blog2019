import Link from 'next/link';

const Footer = () => (
    <footer>
        <div class="container">
            <Link href="/about">
                About
            </Link>
            <Link href="http://github.com/BeckyArrowsmith">
                GitHub
            </Link>

            <Link href="https://github.com/BeckyArrowsmith/blog2019">
                Website repo
            </Link>

            <Link href="/pgp.txt">
                PGP key
            </Link>

            <p>&copy; Becky Arrowsmith {new Date().getFullYear()}</p>
        </div>
    </footer>
);

export default Footer;