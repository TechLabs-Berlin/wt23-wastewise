import Link from 'next/link';
import { useRouter } from "next/router";

const NavBar = () => {

    const router = useRouter();

    return (
        <nav className="navbar">
            <Link href="/" className={`navbar__a ${router.pathname == '/' ? 'navbar__a--active' : ''}`}>
                <svg className="navbar__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0V0z"/>
                    <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"/>
                </svg>
                <span class="u-hide-when-small-vh">Home</span>
            </Link>
            <Link href="/scan" className={`navbar__a ${router.pathname == '/scan' ? 'navbar__a--active' : ''}`}>
                <svg className="navbar__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <circle cx="12" cy="12" r="3.2"/>
                    <path d="M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                </svg>
                <span class="u-hide-when-small-vh">Scan Waste</span>
            </Link>
            <Link href="/predictions" className={`navbar__a ${router.pathname == '/predictions' ? 'navbar__a--active' : ''}`}>
                <svg className="navbar__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill="none" d="M0 0h20v20H0z"/>
                    <path d="m12.5 8 .79-1.72L15 5.5l-1.71-.78L12.5 3l-.76 1.72L10 5.5l1.74.78zM4 10l.4-1.6L6 8l-1.6-.4L4 6l-.4 1.6L2 8l1.6.4z"/>
                    <path d="M16.5 6c-1.07 0-1.84 1.12-1.35 2.14l-3.01 3.01c-.52-.25-.99-.14-1.29 0l-1.01-1.01c.1-.19.16-.41.16-.64C10 8.67 9.33 8 8.5 8S7 8.67 7 9.5c0 .23.06.45.15.64l-3.01 3.01c-.19-.09-.41-.15-.64-.15-.83 0-1.5.67-1.5 1.5S2.67 16 3.5 16 5 15.33 5 14.5c0-.23-.06-.45-.15-.64l3.01-3.01c.52.25.99.14 1.29 0l1.01 1.01c-.1.19-.16.41-.16.64 0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-.23-.06-.45-.15-.64l3.01-3.01c1.03.5 2.14-.29 2.14-1.35 0-.83-.67-1.5-1.5-1.5z"/>
                </svg>
                <span class="u-hide-when-small-vh">Predictions</span>
            </Link>
            <Link href="/info" className={`navbar__a ${router.pathname == '/info' ? 'navbar__a--active' : ''}`}>
                <svg className="navbar__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"/>
                </svg>
                <span class="u-hide-when-small-vh">Info</span>
            </Link>
        </nav>
    );
};

export default NavBar;