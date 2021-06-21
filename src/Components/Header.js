import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Header.css";



class Header extends Component {

    render() {

        return (
            <header className="jumbotron">
                <div className="container">
                    <Link to="/">Home</Link>
                </div>

            </header>
        )
    }

}

export default Header;