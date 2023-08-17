function menu() {

    opcao = parseInt(prompt(
        "------ Menu Principal ------\n\n" +
        "1 - Cadastro do Jogador \n" +
        "2 - Cadastro do Técnico \n" +
        "3 - Cadastro do Preparador Fisico \n" +
        "4 - Cadastro do Fisioterapeuta \n"

    ));

    switch (opcao) {
        case 1:
            cadastrar_jogador();
            break;
        case 2:
            cadastrar_tecnico();
            break;
        case 3:
            cadastrar_preparador();
            break;
        case 4:
            cadastrar_fisioterapeuta();
            break;
        default:
            alert("Finalizando o Sistema de Cadastro")
            document.getElementById("relatorio").innerHTML = "<p>Obrigado!!!</p>"
    }
};

/* Função Cadastrar Cliente */

function cadastrar_jogador() {
    let x = "n";
    relatorio = "*- Relatório de Jogadores -* <br> <br>";

    while (x.toUpperCase() != "S") {
        id = parseInt(prompt("Digite o ID do jogador"));
        nome = prompt("Digite o nome do jogador");
        idade = prompt("Digite a idade do jogador")
        posicao = prompt("Digite a posição do jogador");

        relatorio = relatorio + "ID : " + id + "<br>" +
            "NOME : " + nome + "<br>" +
            "IDADE: " + idade + "<br>" +
            "POSIÇÃO: " + posicao +
            "<br>+--------------------------------------+<br><br>"
        confirme = prompt("Finalizar Cadastro S - para sim ou N para não?");
        alert(confirme.toUpperCase())
        if (confirme.toUpperCase() == "S") {
            x = "S";


        };

        document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "</p>"

    }
}

function cadastrar_tecnico() {
    let x = "n";
    relatorio = "*- Relatório de Técnicos -* <br> <br>";

    while (x.toUpperCase() != "S") {
        id = parseInt(prompt("Digite o ID do técnico"));
        nome = prompt("Digite o nome do técnico");
        idade = prompt("Digite a idade do técnico")
        time = prompt("Digite o time do técnico");

        relatorio = relatorio + "ID : " + id + "<br>" +
            "NOME : " + nome + "<br>" +
            "IDADE: " + idade + "<br>" +
            "TIME: " + time +
            "<br>+--------------------------------------+<br><br>"
        confirme = prompt("Finalizar Cadastro S - para sim ou N para não?");
        alert(confirme.toUpperCase())
        if (confirme.toUpperCase() == "S") {
            x = "S";


        };

        document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "</p>"

    }
}

function cadastrar_fisico() {
    let x = "n";
    relatorio = "*- Relatório do Preparador Físico -* <br> <br>";

    while (x.toUpperCase() != "S") {
        id = parseInt(prompt("Digite o ID do preparador físico"));
        nome = prompt("Digite o nome do preparador físico");
        idade = prompt("Digite a idade do preparador físico")
        time = prompt("Digite a equipe do preparador");

        relatorio = relatorio + "ID : " + id + "<br>" +
            "NOME : " + nome + "<br>" +
            "IDADE: " + idade + "<br>" +
            "equipe: " + equipe +
            "<br>+--------------------------------------+<br><br>"
        confirme = prompt("Finalizar Cadastro S - para sim ou N para não?");
        alert(confirme.toUpperCase())
        if (confirme.toUpperCase() == "S") {
            x = "S";


        };

        document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "</p>"

    }
}

function cadastrar_fisioterapeuta() {
    let x = "n";
    relatorio = "*- Relatório do Preparador Físico -* <br> <br>";

    while (x.toUpperCase() != "S") {
        id = parseInt(prompt("Digite o ID do fisioterapeuta"));
        nome = prompt("Digite o nome do fisioterapeuta");
        idade = prompt("Digite a idade do fisioterapeuta")
        equipe = prompt("Digite a equipe que o fisioterapeuta atende");

        relatorio = relatorio + "ID : " + id + "<br>" +
            "NOME : " + nome + "<br>" +
            "IDADE: " + idade + "<br>" +
            "equipe: " + equipe +
            "<br>+--------------------------------------+<br><br>"
        confirme = prompt("Finalizar Cadastro S - para sim ou N para não?");
        alert(confirme.toUpperCase())
        if (confirme.toUpperCase() == "S") {
            x = "S";


        };

        document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "</p>"

    }
}




