// Seleciona a tabela
const tabela = document.getElementById('tabela');
const form = document.getElementById('form-add-ch');

// Adiociona um botão para chamar as funções
const addCanal = document.getElementById('add-canal');
addCanal.onclick = adicionarLinha;

const removerCanal = document.getElementById('remove-canal')
removerCanal.onclick = removerLinha;


// Adiciona uma nova linha ao fim da tabela
function adicionarLinha() {
    // Captura os valores dos inputs
    var ch = document.getElementById('chInput').value;
    var nome = document.getElementById('nomeInput').value;
    var source = document.getElementById('sourceInput').value;
    var suporte = document.getElementById('suporteInput').value;

    // console.log(ch, nome, source, suporte)
    
    // Crie uma nova linha
    const linha = tabela.insertRow();

    // Adiciona células à nova linha
    var chT = linha.insertCell(0);
    var nomeT = linha.insertCell(1);
    var sourceT = linha.insertCell(2);
    var suporteT = linha.insertCell(3);

    // Adicione conteúdo às células
    chT.innerHTML = ch.toUpperCase();
    nomeT.innerHTML = nome.toUpperCase();
    sourceT.innerHTML = source.toUpperCase();
    suporteT.innerHTML = suporte.toUpperCase();
}






















// #######################################################################
// ------------------ NÃO IMPLEMENTADO --------------------------------
// -----------------------------------------------------------------

( "button.excluir" ).click(function() {
  ( "tbody#tabela" ).remove();
});


// FUnção papra colorir uma linha da tabela quando for selecionada
var tr = $('table tr:not(:first-child)');
tr.on('click', function () {
    var self = this;
    tr.each(function(){
        if(this == self) $(this).toggleClass('colorir');
        else $(this).removeClass('colorir');
    })
});


// Remove linha
function removerLinha(linha) {
  tabela.removeChild(linha);
}

// Colore a linha que foi selecionada para exclusão ou edição
var tr = $('table tr:not(:first-child)');
tr.on('click', function () {
    var self = this;
    tr.each(function(){
        if(this == self) $(this).toggleClass('colorir');
        else $(this).removeClass('colorir');
    })
});

// Função para confirmar e remover a linha
function confirmarRemocao(linha) {
    const confirmacao = confirm("Você tem certeza que deseja excluir este canal?");
    if (confirmacao) {
        tabela.removeChild(linha);
    }
}
