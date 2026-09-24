import { useState } from "react";
import { FaBookOpen, FaBars } from "react-icons/fa";
import styles from "./Header.module.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <a className={styles.brand} href="#top" onClick={() => setMenuOpen(false)}>
                    <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Ashish Ranjan logo" />
                    <span>React Concepts Notes</span>
                </a>
                <button
                    className={styles.menuButton}
                    type="button"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    <FaBars />
                </button>
            </div>
            {menuOpen && (
                <nav className={styles.mobileMenu} aria-label="Mobile navigation">
                    <a href="#intro" onClick={() => setMenuOpen(false)}><FaBookOpen /> Start here</a>
                    <a href="#deployment" onClick={() => setMenuOpen(false)}><FaBookOpen /> Deployment</a>
                </nav>
            )}
        </header>
    );
};

export default Header;
