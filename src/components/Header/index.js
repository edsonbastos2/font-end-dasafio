import {Nav} from './styled';
import {FaHome, FaUserAlt, FaSignInAlt} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default function Header(){
    return(
            <Nav>
                <Link to="/">
                    <FaHome size={24}/>
                </Link>
                <Link to="/login">
                    <FaUserAlt size={24}/>
                </Link>
                <Link to="/logout">
                    <FaSignInAlt size={24}/>
                </Link>
            </Nav>
    );
}