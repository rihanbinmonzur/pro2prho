import {Link,uselocation} from 'react-router'

function Header(){
    return(
        <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark ">
            <div className="container-fluid">
                <ul className="navbar-nav">
                  <li className='nav-item '>
                    <Link className='nav-link text-white' to={"/admin/dashboard"}>Dashboard</Link>
                    </li>  
                    <li className="nav-item">
                        <Link className="nav-link text-white" to={"/admin/user"}>User</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
}
export default Header;