function sortear() {
    //Armazena os valores dos campos de entrada
    let quantidade = document.getElementById('quantidade').value;
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;

    //Verifica se os campos estão vazios
    if (quantidade === '' || de === '' || ate === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    };

    //Converte para números inteiros e armazena na variável
    quantidade = parseInt(quantidade);
    de = parseInt(de);
    ate = parseInt(ate);

    //Verifica se o número inicial inserido é maior ou igual que o número final
    if (de >= ate) {
        alert('O valor inicial deve ser menor que o valor final!');
        //Limpa os campos para o usuário corrigir
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        return;
    };
    
    //Verifica se a 'Quantidade de números' não é maior que o intervalo de números a sortear ou se é igual a zero
    if (quantidade > ate - de + 1 || quantidade === 0) {
        alert('A quantidade de números a serem sorteados não pode ser maior que o intervalo definido ou igual a zero!')
        //Limpa o campo para o usuário corrigir
        document.getElementById('quantidade').value = '';
        return;
    };
  
    //Cria uma lista para armazenar os números sorteados
    let sorteados = [];

    //Loop para sortear a quantidade de números desejados
    for (let i = 0; i < quantidade; i++) {
        //Armazena um número aleatório dentro do intervalo
        let numero = obterNumeroAleatorio(de, ate);
        //Verifica se o número já foi sorteado
        while(sorteados.includes(numero)) {
            //Se o número já foi sorteado, sorteia outro
            numero = obterNumeroAleatorio(de, ate);
        }
        //Adiciona o número sorteado a lista
        sorteados.push(numero);        
    }

    //Exibe na página os números sorteados
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    //Altera o status dos botões Sortear e Reiniciar
    alterarStatusBotao();    

};

//Função para gerar os números aleatórios entre min e max
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Função para alterar os status dos botões
function alterarStatusBotao() {
    //Altera o status do botão Reiniciar
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    } 
    //Altera o status do botão Sortear
    let botaoSortear = document.getElementById('btn-sortear');
    if (botaoSortear.classList.contains('container__botao')) {
        botaoSortear.classList.remove('container__botao');
        botaoSortear.classList.add(('container__botao-desabilitado'));        
    } else {
        botaoSortear.classList.remove('container__botao-desabilitado');
        botaoSortear.classList.add(('container__botao'));
    };
 };

 //Função que reinicia os campos e o resultado
function reiniciar() {
    //Limpa todos os campos
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    //Volta a mensagem incial da página
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    //Altera os status dos botões
    alterarStatusBotao();
};