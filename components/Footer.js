import Link from 'next/link';

const Footer = () => (
  <footer>
    <div className="container">
      <Link>
        <a href="http://twitter.com/beckycodes">Twitter</a>
      </Link>

      <Link>
        <a href="https://www.linkedin.com/in/beckyarrowsmith/">LinkedIn</a>
      </Link>

      <Link href="http://github.com/BeckyArrowsmith">
        <a>GitHub</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <p>&copy; Becky Arrowsmith {new Date().getFullYear()} &#128029;</p>
    </div>
  </footer>
);

export default Footer;
