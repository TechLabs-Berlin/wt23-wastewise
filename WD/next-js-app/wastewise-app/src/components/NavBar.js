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
                <span>Home</span>
            </Link>
            <Link href="/scan" className={`navbar__a ${router.pathname == '/scan' ? 'navbar__a--active' : ''}`}>
                <svg className="navbar__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <circle cx="12" cy="12" r="3.2"/>
                    <path d="M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                </svg>
                <span>Scan Waste</span>
            </Link>
            <Link href="/analytics" className={`navbar__a ${router.pathname == '/analytics' ? 'navbar__a--active' : ''}`}>
                <svg className="navbar__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"/>
                </svg>
                <span>Analytics</span>
            </Link>
            <Link href="/info" className={`navbar__a ${router.pathname == '/info' ? 'navbar__a--active' : ''}`}>
                <svg className="navbar__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0V0z"/>
                    <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>              
                <span>Info</span>
            </Link>
        </nav>
    );
};

export default NavBar;