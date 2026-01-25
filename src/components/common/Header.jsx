import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import "./Layout.css";

const Header = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const navItems = [
        { label: "Home", path: "/" },
        {
            label: "Services",
            path: "/services",
            dropdown: [
                { label: "Property Investments", path: "/property" },
                { label: "Mining Investments", path: "/mining" },
                { label: "Financial Services", path: "/finance" },
            ],
        },
        {
            label: "About Us",
            path: "/about",
            dropdown: [
                { label: "Company Overview", path: "/about" },
                { label: "Our Team", path: "/about#team" },
            ],
        },
        { label: "Portfolio", path: "/portfolio" },
        { label: "Contact", path: "/contact" },
    ];

    const logoSrc =
        theme === "dark"
            ? "/images/DARK_MODE_LOGO.png"
            : "/images/LIGHT_MODE_LOGO.png";

    return (
        <header className="site-header">
            <div className="header-logo-container">
                <Link to="/">
                    <img
                        src={logoSrc}
                        alt="Vhagwedi Investments CC"
                        className="header-logo"
                    />
                </Link>
            </div>

            {/* 🍔 Hamburger */}
            <button
                className="hamburger"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
            >
                ☰
            </button>

            <nav className={`header-nav ${mobileOpen ? "open" : ""}`}>
                {navItems.map((item) => (
                    <div
                        key={item.label}
                        className="nav-item"
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        <Link
                            to={item.path}
                            className="nav-link"
                            onClick={() => setMobileOpen(false)}
                        >
                            {item.label}
                        </Link>

                        {item.dropdown && openDropdown === item.label && (
                            <div className="dropdown-menu">
                                {item.dropdown.map((subItem) => (
                                    <Link
                                        key={subItem.label}
                                        to={subItem.path}
                                        className="dropdown-link"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {subItem.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    title="Toggle light/dark mode"
                >
                    {theme === "light" ? "🌙" : "☀️"}
                </button>
            </nav>
        </header>
    );
};

export default Header;
