import {Nav} from './styled';
import {FaHome, FaUserAlt, FaSignInAlt} from 'react-icons/fa';

export default function Header(){
    return(
        <Nav>
            <a href="">
                <FaHome size={24}/>
            </a>
            <a href="">
                <FaUserAlt size={24}/>
            </a>
            <a href="">
                <FaSignInAlt size={24}/>
            </a>
        </Nav>
    );
}