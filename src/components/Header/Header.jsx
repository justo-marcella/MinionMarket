import React from 'react'
import styles from './Header.module.css'

function Header() {
    return (
        
        <header className={styles.headerContainer}>
            <section className={styles.logo}>
                <h1>MINI<span><img src='img/Group1.png' alt='olho representando a letra O'/></span>NShop</h1>
            </section>
            <nav className={styles.menuNav}>
                
                    <li>cadastro</li>
                    <li>login</li>
                
                
            </nav>
        </header>
            
    )
}

export default Header
