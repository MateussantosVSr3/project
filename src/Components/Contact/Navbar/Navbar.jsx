import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="header">

            <nav className="navbar">
                <a href="/home">Home</a>
                <a href="https://www.fiaformulae.com/en/teams">Teams</a>
                <a href="https://www.fiaformulae.com/en/news">News</a>
                <a href="/streaming">Streaming</a>
                <a href="https://resources.formula-e.pulselive.com/formula-e/document/2024/01/09/d6006a8b-e545-4fb0-941d-099299c8dafe/Formula-E-Anti-Slavery-and-Human-Trafficking-Policy-Statement-2023.pdf">Statements</a>
                <a href="/contact">Contact</a>
            </nav>

            <a href="/" className="logo">Formula E</a>

            <a href="/login"><button className="btn-login">Login</button></a>
        </header>
    )
}

export default Navbar