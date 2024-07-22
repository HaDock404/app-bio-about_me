import '../styles/header.css'
import { Link } from 'react-router-dom'; //obligatoire avec hashrouter

function Header() {
    return (
        <header>
            <nav className='header_nav'>
                <Link to="/" className='home_logo'>
                    HomePage
                </Link>
                <ul className='ul_nav'>
                    <li>Blog</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>

        </header>
    )
}

export default Header