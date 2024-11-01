import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/get">Get All Users</Link>
                </li>
                <li>
                    <Link to="/post">Post Users</Link>
                </li>

            </ul>
        </nav>
        <Outlet/>
        </>
    );
};

export default Layout;