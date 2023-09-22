import './navbar-styles.css';

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <div>
                    <li id="logo">Logo</li>
                </div>
                <div>
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Settings</li>
                </div>
            </ul>
        </nav>
    );
}
