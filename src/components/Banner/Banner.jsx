import React from 'react'
import styles from './Banner.module.css'

function Banner() {
    return (
        <section className={styles.bannerContainer}>
            <section className={styles.imgBanner} >
                <img src='img/MinionJerry.png' alt='Jerry'/>
            </section>
            <article className={styles.textoBanner}>
                <p>Olá! Somos a MinionShop! Aqui você encontra o seu minion favorito, lê a descrição e ainda pode reservar para sua futura compra!</p>

            </article>
            
        </section>
    )
}


export default Banner
