import styles from "./style/PenCp.module.css"

function PenCp() {
     return (
          <div className={styles.bg}>
               <div className={styles.container}>
                    <h1>Pensamento Computacional</h1>
                    <div className={styles.WhatisPencp}>
                         <h2>O que é pensamento computacional?</h2>
                         <p>Pensamento computacional pode ser definido como uma estratégia usada para desenhar soluções e solucionar problemas de maneira eficaz tendo a <strong>tecnologia</strong> como base. Ao contrário do que a expressão pode inferir, não necessariamente significa o que está ligado à programação de computadores ou mesmo à navegação na internet, à utilização de redes sociais, entre outros.</p>
                         <p>Alguns estudiosos fizeram suas próprias definições sobre o pensamento computacional. Jeanette Wing, vice-presidente da Microsoft Research, por exemplo, conceituou a expressão como sendo a base para a identificação de problemas e soluções que podem ser efetivadas tanto por processadores quanto pelos homens. Resumidamente, seria a capacidade criativa, crítica e estratégica de utilizar as bases computacionais nas diferentes áreas de conhecimento para a <strong>resolução de problemas.</strong></p>
                         <p>Além disso, tal pensamento estaria fundamentado em quatro pilares:</p>
                         <ol>
                              <li><strong>decomposição:</strong> dividir um problema complexo em pequenas partes, a fim de solucioná-las com mais facilidade;</li>
                              <li><strong>reconhecimento de padrões:</strong> como a própria expressão define, ajuda na identificação de aspectos comuns nos processos;</li>
                              <li><strong>abstração:</strong> analisa elementos que têm relevância, diferenciando-os daqueles que podem ser deixados de lado;</li>
                              <li><strong> algoritmos:</strong> reúne todos os pilares já citados e envolve a criação de um grupo de regras para a solução de problemas.
                                   Basicamente, a ideia é reformular problemas que aparentam ser de difícil resolução e transformá-los em algo capaz de ser compreendido, focando, para isso, em cada uma de suas fases, a fim de lidar com as incertezas que muitas vezes os cercam.</li>
                         </ol>
                    </div>
                    <div className={styles.PencpThink}>
                         <h2>Quais são as habilidades desenvolvidas pelo pensamento computacional?</h2>
                         <p>Uma série de competências é obtida como resultado do processo de desenvolvimento do pensamento computacional. As habilidades refletem diretamente no aprendizado do indivíduo. Especialmente no caso das crianças, o uso dessa metodologia ajuda em seu crescimento, melhorando aspectos como o <strong>desenvolvimento</strong> cognitivo.</p>
                    </div>
               </div>
          </div>
     )
}

export default PenCp