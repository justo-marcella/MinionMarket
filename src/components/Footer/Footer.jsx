import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <nav className={styles.menuFooter}>
                <p>Feito com amor por Marcella Justo</p>
                <ul className={styles.icons}>
                    <li><a href='https://www.linkedin.com/in/marcella-justo-1706/'><img src='img/linkedin.png' alt='link para linkedin'/></a></li>
                    <li><a href='https://github.com/justo-marcella'><img src='img/github.png' alt='link para github'/></a></li>
                </ul>
                
            </nav>
        </footer>
    )
}

export default Footer
