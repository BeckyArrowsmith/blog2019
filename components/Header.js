import Nav from '../components/Nav';

const Header = () => (
  <header className="Header">
    <Nav />

    <div className="container bio">
      <h1>becky.codes</h1>

      <p>Not so much code anymore though:</p>
      <p>it's all about people, practice and culture these days 🫶🏻</p>
      <p>&nbsp;</p>
      <p>
        <a href="http://twitter.com/beckycodes">Twitter</a>{' '}
        <a href="https://www.linkedin.com/in/beckyarrowsmith/">LinkedIn</a>
      </p>
    </div>
  </header>
);

export default Header;
