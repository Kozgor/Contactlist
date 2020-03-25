import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
class Header extends React.Component {
    render() {
        return (
            <header className='d-block'>
                <nav className ='d-flex'>
                    <h1>Contact list app</h1>
                    <ul className='d-flex ul-menu'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='contact'>Add contact</Link></li>
                    </ul>
                    <form className='form-header'>
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </nav>
                
                
            </header>
        )
    }
}
export default Header;

