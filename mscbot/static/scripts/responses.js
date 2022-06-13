function getBotResponse(input) {
    //Pedra papel tesoura
    if (input == "pedra") {
        return "papel";
    } else if (input == "papel") {
        return "tesoura";
    } else if (input == "tesoura") {
        return "pedra";
    }

    // respostas simples
    if (input == "Bom dia!") {
        return "Bom dia!";
    } else if (input == "Obrigado!") {
        return "De nada!";
    } else {
        return "Não entendi!";
    }

    
}