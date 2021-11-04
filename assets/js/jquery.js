$(document).ready(()=>{
    //DEFINE O VALOR TO TITULO INICIAL PARA AS INFORMAÇÕES DE CONHECIMENTO
    $(".titulo-conhecimentos").html("Conheça as tecnologias!!");
    $(".texto-conhecimentos").html("Passe o mouse sobre cada uma e leia um breve texto e as conheça melhor ;D");

    //DEFINE O VALOR DO CONHECIMENTO EM HTML QUANDO É PASSADO O MOUSE SOBRE OU QUANDO CLICADO
    $("#html").hover(()=>{
        $(".titulo-conhecimentos").html("HTML");
        $(".texto-conhecimentos").html("É uma linguagem de marcação de texto através das TAGs, que permite apresentar informações na internet; como links, imagens e o próprio texto.");
    });
    $("#html").click(()=>{
        $(".titulo-conhecimentos").html("HTML");
        $(".texto-conhecimentos").html("É uma linguagem de marcação de texto através das TAGs, que permite apresentar informações na internet; como links, imagens e o próprio texto.");
    });


    //DEFINE O VALOR DO CONHECIMENTO EM CSS QUANDO É PASSADO O MOUSE SOBRE OU QUANDO CLICADO
    $("#css").hover(()=>{
        $(".titulo-conhecimentos").html("CSS");
        $(".texto-conhecimentos").html("O CSS é um código em que você pode fazer estilização rápidas de layout, como definição de cores e fontes, por exemplo.");
    });
    $("#css").click(()=>{
        $(".titulo-conhecimentos").html("CSS");
        $(".texto-conhecimentos").html("O CSS é um código em que você pode fazer estilização rápidas de layout, como definição de cores e fontes, por exemplo.");
    });


    //DEFINE O VALOR DO CONHECIMENTO EM JACASCRIPT QUANDO É PASSADO O MOUSE SOBRE OU QUANDO CLICADO
    $("#js").hover(()=>{
        $(".titulo-conhecimentos").html("Javascript");
        $(".texto-conhecimentos").html("o JavaScript é usado para adicionar interatividade a uma página web e criar aplicações web ricas.");
    });
    $("#js").click(()=>{
        $(".titulo-conhecimentos").html("Javascript");
        $(".texto-conhecimentos").html("o JavaScript é usado para adicionar interatividade a uma página web e criar aplicações web ricas.");
    });


    //DEFINE O VALOR DO CONHECIMENTO EM PHP QUANDO É PASSADO O MOUSE SOBRE OU QUANDO CLICADO
    $("#php").hover(()=>{
        $(".titulo-conhecimentos").html("PHP");
        $(".texto-conhecimentos").html("Usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico em nosso sistema web.");
    });
    $("#php").click(()=>{
        $(".titulo-conhecimentos").html("PHP");
        $(".texto-conhecimentos").html("Usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico em nosso sistema web.");
    });


    //DEFINE O VALOR DO CONHECIMENTO EM MYSQL QUANDO É PASSADO O MOUSE SOBRE OU QUANDO CLICADO
    $("#sql").hover(()=>{
        $(".titulo-conhecimentos").html("MySQL");
        $(".texto-conhecimentos").html("O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface.");
    });
    $("#sql").click(()=>{
        $(".titulo-conhecimentos").html("MySQL");
        $(".texto-conhecimentos").html("O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface.");
    });


    //DEFINE O VALOR DO CONHECIMENTO EM BOOTSTRAP QUANDO É PASSADO O MOUSE SOBRE OU QUANDO CLICADO
    $("#bootstrap").hover(()=>{
        $(".titulo-conhecimentos").html("Bootstrap");
        $(".texto-conhecimentos").html("Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript");
    });
    $("#bootstrap").click(()=>{
        $(".titulo-conhecimentos").html("Bootstrap");
        $(".texto-conhecimentos").html("Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript");
    });


    //DEFINE O VALOR DO CONHECIMENTO EM JQuery QUANDO É PASSADO O MOUSE SOBRE OU QUANDO CLICADO
    $("#jquery").hover(()=>{
        $(".titulo-conhecimentos").html("JQuery");
        $(".texto-conhecimentos").html("jQuery é uma biblioteca de funções JavaScript que interage com o HTML, desenvolvida para simplificar os scripts interpretados no navegador do cliente.");
    });
    $("#jquery").click(()=>{
        $(".titulo-conhecimentos").html("JQuery");
        $(".texto-conhecimentos").html("jQuery é uma biblioteca de funções JavaScript que interage com o HTML, desenvolvida para simplificar os scripts interpretados no navegador do cliente.");
    });


    //DEFINE O VALOR DO CONHECIMENTO EM VueJS QUANDO É PASSADO O MOUSE SOBRE OU QUANDO CLICADO
    $("#vuejs").hover(()=>{
        $(".titulo-conhecimentos").html("VueJS");
        $(".texto-conhecimentos").html("Vue JS é muito utilizado para criar aplicações single page (página única) e também para desenvolver vários tipos de interfaces, que possuem necessidades de maior interação e experiência mais valorosa para o usuário.");
    });
    $("#vuejs").click(()=>{
        $(".titulo-conhecimentos").html("VueJS");
        $(".texto-conhecimentos").html("Vue JS é muito utilizado para criar aplicações single page (página única) e também para desenvolver vários tipos de interfaces, que possuem necessidades de maior interação e experiência mais valorosa para o usuário.");
    });



    //DEFINE O VALOR INICIAL PARA AS INFORMAÇÕES NO CONHECIMENTO
    $("#tecnologias").mouseleave(()=>{
        $(".titulo-conhecimentos").html("Conheça as tecnologias!!");
        $(".texto-conhecimentos").html("Passe o mouse sobre cada uma e leia um breve texto e as conheça melhor ;D");
    });
});