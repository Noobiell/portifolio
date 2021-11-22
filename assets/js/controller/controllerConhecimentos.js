class Conhecimento{

    constructor(){
        this._titulo = document.querySelector(".titulo-conhecimentos");
        this._texto = document.querySelector(".texto-conhecimentos");
        this._tecnologia = document.querySelectorAll(".container-tecnologia");
        this._conhecimentos = document.querySelector("#tecnologias");
        this.initialize(this._tecnologia);
        this.textoInicio();
    }

    initialize(value){
        value.forEach(e => {
            e.addEventListener('mouseenter', ()=>{
                this.addTexto(e.id);
            });
        });

        this._conhecimentos.addEventListener('mouseleave', ()=>{
            this.textoInicio();
        })
    }

    textoInicio(){
        this.titulo = "Curiosidade!!";
        this.texto = "Passe o mouse ou clique sobre cada um dos icones e, leia um breve texto da tecnologia ;D";
    }

    addTexto(value){
        switch(value){
            case 'html':
                this.titulo = "HTML";
                this.texto = "É uma linguagem de marcação de texto através das TAGs, que permite apresentar informações na internet; como links, imagens e o próprio texto.";
            break;
            case 'css':
                this.titulo = "CSS";
                this.texto = "O CSS é um código em que você pode fazer estilização rápidas de layout, como definição de cores e fontes, por exemplo.";
            break;
            case 'js':
                this.titulo = "Javascript";
                this.texto = "O JavaScript é usado para adicionar interatividade a uma página web e criar aplicações web ricas.";
            break;
            case 'php':
                this.titulo = "PHP";
                this.texto = "Usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico em nosso sistema web.";
            break;
            case 'sql':
                this.titulo = "MySQL";
                this.texto = "O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface.";
            break;
            case 'bootstrap':
                this.titulo = "Bootstrap";
                this.texto = "Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript";
            break;
            case 'jquery':
                this.titulo = "JQuery";
                this.texto = "jQuery é uma biblioteca de funções JavaScript que interage com o HTML, desenvolvida para simplificar os scripts interpretados no navegador do cliente.";
            break;
            case 'vuejs':
                this.titulo = "VueJS";
                this.texto = "Vue JS é muito utilizado para criar aplicações single page (página única) e também para desenvolver vários tipos de interfaces, que possuem necessidades de maior interação e experiência mais valorosa para o usuário.";
            break;
        }//Fim switch
    }//Fim addTexto

    get titulo(){
        return this._titulo.innerHTML;
    }
    set titulo(value){
        this._titulo.innerHTML = value;
    }

    get texto(){
        return this._texto.innerHTML;
    }
    set texto(value){
        this._texto.innerHTML = value;
    }

}//Fim classe