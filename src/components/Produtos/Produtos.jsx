import React from 'react'
import styles from './Produtos.module.css'

function Produtos() {
    const produtos = [
        {
          nome: "Boneco Minion Stuart",
          src: "img/image1.png"
        },
        {
          nome: "Boneco Minion Stuart Articulado",
          src: "img/image2.png"
        },
        {
          nome: "Boneco Minion Bob",
          src: "img/image3.png"
        },
        {
          nome: "Boneco Minion Kevin",
          src: "img/image4.png"
        },
        {
          nome: "Boneco Kung Fu Kevin",
          src: "img/image5.png"
        },
        {
          nome: "Boneco Pijama Bob",
          src: "img/image6.png"
        }
      ];
    return (
        <section className={styles.produtoContainer}>
            <h2>Nossos Minions</h2>
            
        </section>
    )
}

export default Produtos
