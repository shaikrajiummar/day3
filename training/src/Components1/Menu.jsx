import React from 'react';
import Styles from "./navbar.modules.css";
const Menu = ()=>{
    return(
    <div className={Styles.memuBlock}>
        <ul>
            <li><a href="">Dashboard</a></li>
            <li><a href="">Classroom</a></li>
            <li><a href="">Assessments</a></li>
            <li><a href="">Store</a></li>
            <li><a href="">Calender</a></li>
            <li><a href="">News</a></li>
            <li><a href="">Blog</a></li>
        </ul>
    </div>
    )
}
export default Menu;
