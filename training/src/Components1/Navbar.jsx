import React from "react";
import Logo from './Logo'
import Menu from './Menu'
import Styles from './navbar.modules.css';
const Navbar =()=>{
    return (
        <section id ={Styles.naBlock}>
            <article>
                <Logo/>
                <Menu/>
            </article>
        </section>
    )
}
export default Navbar;
