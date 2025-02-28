import { Outlet, Link } from 'react-router-dom';

export function Layout() {
    return (
        <div className='min-h h-screen flex flex-col m-10'>
            <header>
                <nav>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/login"}>Login</Link>
                </nav>
            </header>
            <main className='grow'>
                <Outlet />
            </main>
            <footer>2025</footer>
        </div>
    )
}