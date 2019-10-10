import Link from '../components/Link'

const Nav = () => (
    <nav>
        <ul>
            <li>
                <Link activeClassName='active' href='/'>
                    <a className='nav-link home-link'>Home</a>
                </Link>
            </li>
            <li>
                <Link activeClassName='active' href='/about'>
                    <a className='nav-link'>About</a>
                </Link>
            </li>
        </ul>
    </nav>
)

export default Nav;