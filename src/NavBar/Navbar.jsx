import "./Navbar.css"

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbar-logo">The Great Minds</h1>

            <ul className="navbar-links">
                <li>Home</li>
                <li>Scientists</li>
                <li>About</li>
            </ul>
        </nav>
    )
}

export default Navbar