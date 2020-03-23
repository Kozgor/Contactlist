import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
class Header extends React.Component {
    render() {
        return (
            <header className='d-flex '>
                <nav>
                    <h1>Contact list app</h1>
                    <ul className='d-flex'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='contact'>Add contact</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default Header;