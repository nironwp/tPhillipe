import styles from "./style/TDIC.module.css"

function TDIC() {
     return (
          <div className={styles.bg}>
               <div className={styles.container}>
                    <h1>Tecnologia Digital de Informação e Comunicação (TDIC)</h1>
                    <div className={styles.whatIStdi}>
                         <h2>O que são as TDICs?</h2>
                         <p>Tecnologias Digitais da Informação e Comunicação no contexto escolar: possibilidades. Ao longo das últimas décadas, as tecnologias digitais da informação e comunicação, também conhecidas por TDICs, têm alterado nossas formas de trabalhar, de se comunicar, de se relacionar e de aprender.</p>
                    </div>
                    <div className={styles.tdiExemp}>
                         <h2>TDICs exemplos</h2>
                         <p>As TDICs são entendidas como um conjunto de mídias que utiliza a tecnologia digital, a lógica binária para a sua disseminação, como exemplo específico de TDICs podemos citar o computador, tablets, celulares, e etc.</p>
                    </div>
                    <div className={styles.contribuitionsTdi}>
                         <h2>Quais as contribuições das tecnologias digitais da informação e da comunicação para a sociedade?</h2>
                         <p>As tecnologias de informação e comunicação tem desempenhado um papel importante na comunicação coletiva, pois através dessa ferramenta a comunicação flui sem que aja barreira. ... Tal fato possibilita que todas as classes possam ter acesso a este meio de informação e comunicação.</p>
                    </div>
                    <div className={styles.negativeandpositivepoints}>
                         <h2>Quais os pontos positivos e negativos dos TDICs</h2>
                         <p>Entre os <strong>positivos</strong>, está a facilidade de <strong>comunicação</strong> e informação; porém há os pontos negativos que são a falta de privacidade, pois qualquer pessoa pode visitar o perfil de outra,o aumento de criminalidades,e o isolamento, que faz com pessoas só consigam se relacionar com outras virtualmente.</p>
                    </div>
                    <div className={styles.negativePoints}>
                         <h2>Quais os pontos negativos da tecnologia (TDICs)?</h2>
                         <h4>4 efeitos negativos que podem ser causados pela tecnologia</h4>
                         <ul>
                              <li>Frustração. Estamos cada vez mais acostumados a usar aparelhos tecnológicos diariamente.</li>
                              <li>Impaciência. Apenas o fato de uma página na internet demorar alguns segundos a mais para carregar já faz com que nós fiquemos estressados.</li>
                              <li>Dificuldade para escrever corretamente.</li>
                              <li>Falta de interação física.</li>
                         </ul>
                    </div>
               </div>
          </div>
     )
}

export default TDIC