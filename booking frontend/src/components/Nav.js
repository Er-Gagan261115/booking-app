import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import './Style.css'
import pic from './images/career.jpg'
const Nav=()=>{
    const auth = localStorage.getItem("employee");
    const navigate = useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/login');
    }
    return(
    <div>
        <img src={pic} alt = "logo" className="stylelogo" />
        {
        auth?
        <ul className='nav_style'>
            <li style={{
            "marginLeft":"-33em"
        }}><Link to = "/">Home</Link></li>
            <li><Link to = "/mycareer">My-Career</Link></li>
            <li><Link to = "/meetings">Meetings</Link></li>
            <li><Link to = "/login" onClick={logout}>Logout-[{JSON.parse(auth).name}]</Link></li>
            
        </ul>:
        <ul className='nav_style_signup_login right_align'>
            <li><Link to = "/signup" >Sign Up</Link></li>
            <li><Link to = "/login" >Login</Link></li>
        </ul>
        }
    </div>
    )
}
export default Nav;