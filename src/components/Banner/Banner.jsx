import React from 'react'
import styles from './Banner.module.css'

function Banner() {
    return (
        <section className={styles.bannerContainer}>
            <section className={styles.imgBanner} >
                <img src='img/MinionJerry.png' alt='Jerry'/>
            </section>
            <article className={styles.textoBanner}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati totam eveniet laudantium illum earum atque ipsa possimus iste. Tenetur voluptate eos nisi nemo quisquam repellendus velit fuga nulla corporis magni.</p>

            </article>
            
        </section>
    )
}


export default Banner
