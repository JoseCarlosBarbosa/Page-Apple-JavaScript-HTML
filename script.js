const imagemVizualizacao = document.getElementById('imagem-visualizacao')
const tamanhoVisualizacao = document.getElementById('opcao-tamanho')
const tituloProduto = document.getElementById('titulo-produto')
const nomeCor = document.getElementById('nome-cor-selecionada')
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura')
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura')
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura')

const verdeCipreste = {
    nome: "Verde-cipreste",
    pasta: "imagens-verde-cipreste"
}
const azulInverno = {
    nome: "Azul-inverno",
    pasta: "imagens-azul-inverno"
}
const meiaNoite = {
    nome: "Meia-Noite",
    pasta: "imagens-meia-noite"
}

const estelar = {
    nome: "Estelar",
    pasta: "imagens-estelar"
}

const rosaClaro = {
    nome: "Rosa-Claro",
    pasta: "imagens-rosa-claro"
}


const opcoesCores = [
    verdeCipreste,
    azulInverno,
    meiaNoite,
    estelar,
    rosaClaro
]

const opcoesTamanho = ['41mm', '45mm'];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;
// queryselector _ pega elemento que tem id name = ... e retorna um cara, que tenha checked (estado)
// get elemento byid _ você tem que colocar o id dele

function trocarImagem() {
    // pega o id da imagem selecionada (nome inteiro)
    const idOpcaoSelecionada = document.querySelector('[name = "opcao-imagem"]:checked').id;
    // char At, pega o caracter que ta na X opcoes
    imagemSelecionada = idOpcaoSelecionada.charAt(0);

    imagemVizualizacao.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-" + imagemSelecionada + ".jpeg";

}

function trocarTamanho() {
    // pega o id da imagem selecionada (nome inteiro)
    const idOpcaoSelecionada = document.querySelector('[name = "opcao-tamanho"]:checked').id;
    // char At, pega o caracter que ta na X opcoes
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    //id="titulo-produto">Pulseira loop esportiva azul-inverno para caixa de 45 mm
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    if (opcoesTamanho[tamanhoSelecionado] === '41mm') {
        imagemVizualizacao.classList.add("caixa-pequena");
    } else {
        imagemVizualizacao.classList.remove("caixa-pequena");
    }
}

function trocarCor() {
    // atualizar cor selecionada
    const idOpcaoSelecionada = document.querySelector('[name = "opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    // trocar titulo da pagina
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    //trocar nome da cor
    nomeCor.innerText = "Cor - " + opcoesCores[corSelecionada].nome;
    // trocar imagens miniatura exibidas
    miniaturaImagem0.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-0.jpeg"
    miniaturaImagem1.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-1.jpeg"
    miniaturaImagem2.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-2.jpeg"
    // trocar imagem de visualização
    imagemVizualizacao.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-" + imagemSelecionada + ".jpeg";

}

