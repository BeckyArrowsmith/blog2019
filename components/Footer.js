import Link from "next/link";

const Footer = () => (
    <footer>
        <div className="container">
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="http://github.com/BeckyArrowsmith">
                <a>GitHub</a>
            </Link>

            <Link href="https://github.com/BeckyArrowsmith/blog2019">
                <a>Repository</a>
            </Link>

            <Link href="/pgp">
                <a>PGP key</a>
            </Link>

            <p>&copy; Becky Arrowsmith {new Date().getFullYear()} &#128029;</p>
        </div>
    </footer>
);

export default Footer;