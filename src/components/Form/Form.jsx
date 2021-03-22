import React from 'react';
import style from './Form.module.css';
function Form() {
    return (
        <div className={style.cadastroContainer}>
      <section className={style.bannerCadastro}>
        <article>
          <h2>Bello, pra tu!</h2>
          <p>
            Falta pouco para fazer a sua reserva, mas antes, diga seus dados para
            a gente.
          </p>
        </article>
        <img src="img/bob.png" alt="Foto do minion" />
      </section>
      <form action="" className={style.formCadastro}>
        <div className={style.inputsForm}>
          <div className={style.campoFormCadastro}>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" id="nome" />
          </div>

          <div className={style.campoFormCadastro}>
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" id="email" />
          </div>

          <div className={style.campoFormCadastro}>
            <label htmlFor="minions">Minions Desejados</label>
            <input type="text" name="minions" id="minions" />
          </div>

        </div>
        <button type="submit">RESERVAR</button>
      </form>
    </div>
    )
}

export default Form
