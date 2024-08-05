const btnShowMode = document.getElementById('modo-show');
const setList = document.getElementById('repertorio')
var item = document.getElementById('item-set-list')
var nomeMusica = document.getElementById('nome-musica')


var modoShowStatus = false
console.log(modoShowStatus)


btnShowMode.addEventListener('click', ()=> {
    // Seta modoShowStatus como true, está no modo show.
    modoShowStatus = true
    // Muda o texo do botão 
    btnShowMode.innerHTML = 'Modo edição';

    setList.classList.add('repertorio-dark');

    item.classList.add('item-set-list-dark');
    console.log(modoShowStatus)

    nomeMusica.classList.add('.nome-musica-dark') = 



    console.log('Modo Show ativado!')
})