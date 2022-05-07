import styles from "./style/CTD.module.css"

function CTD() {
     return (
          <div className={styles.bg}>
               <div className={styles.container}>
                    <h1>Oque é Cultura Digital?</h1>
                    <div className={styles.whatIsctd}>
                         <h2>O que é cultura digital?</h2>
                         <p><strong>Cultura digital</strong> é um conceito que descreve como a tecnologia e a internet estão moldando a maneira como nos comportamos, pensamos, nos comunicamos e interagimos na sociedade. Trata-se de um produto decorrente do desenvolvimento das Tecnologias Digitais de Informação e Comunicação (DTIC), presentes em nosso dia a dia. </p>
                         <p>Seu avanço possibilitou inúmeras contribuições para a sociedade, transformou o mundo e a forma como interagimos nele. Hoje, as tecnologias digitais são tão onipresentes que o estudo da cultura digital compreende todos os aspectos da vida cotidiana, pois disserta sobre a <strong>relação entre humanos e tecnologia em âmbito pessoal, profissional, social, econômico, político e, claro, educacional.</strong></p>
                         <p>O conceito surgiu após a Internet ser difundida como uma forma de comunicação de massa e em razão do uso generalizado de computadores pessoais e outros dispositivos, como smartphones e tablets. </p>
                         <p>O filósofo tunisiano, naturalizado francês,<span className={styles.blue}>Pierre Lévy</span>, um dos pensadores mais proeminentes no campo da cultura virtual contemporânea, define a cibercultura, ou cultura digital, como um conjunto de técnicas materiais e intelectuais: práticas, atitudes, modos de pensar e valores que se desenvolveram com o crescimento do ciberespaço. </p>
                         <p>Em outras palavras, as tecnologias digitais possibilitaram uma grande revolução nas relações humanas, por exemplo, possibilitando maior conexão, agilidade, rompimento de barreiras geográficas, colaboração e participação. </p>
                         <p>Para Lévy, a cibercultura é a <strong>4ª Revolução da Comunicação</strong> ― anteriormente, tivemos a invenção da escrita, do alfabeto e da imprensa ―, a qual amplia o acesso e difusão das informações, quebrando hierarquias. Até a chegada da era digital, as informações eram difundidas de maneira vertical (uma pessoa falando para as massas). Hoje, todos se comunicam com todos, criando, compartilhando e modificando conteúdos de maneira horizontal.</p>
                    </div>
               </div>
          </div>
     )
}

export default CTD