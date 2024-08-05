// Define a velocidade inicial de rolagem
let speed = 5;

// Variável para armazenar o intervalo da rolagem
let interval;

// Variável para rastrear se a rolagem está ativa
let scrolling = false;

// Evento para o botão "Start" (Iniciar)
document.getElementById('start').addEventListener('click', function() {
    // Inicia a rolagem apenas se não estiver rolando
    if (!scrolling) {
        scrolling = true; // Define o estado de rolagem como ativo
        startScrolling(); // Chama a função para iniciar a rolagem
    }
});

// Evento para o botão "Pause" (Pausar)
document.getElementById('pause').addEventListener('click', function() {
    scrolling = false; // Define o estado de rolagem como inativo
    clearInterval(interval); // Limpa o intervalo para parar a rolagem
});

// Evento para o botão "Reset" (Redefinir)
document.getElementById('reset').addEventListener('click', function() {
    scrolling = false; // Define o estado de rolagem como inativo
    clearInterval(interval); // Limpa o intervalo para parar a rolagem
    document.querySelector('.content').style.top = '0px'; // Redefine a posição do conteúdo para o topo
});

// Evento para ajustar a velocidade com o controle deslizante
document.getElementById('speed').addEventListener('input', function() {
    speed = this.value; // Atualiza a velocidade com o valor do controle deslizante
    if (scrolling) {
        clearInterval(interval); // Limpa o intervalo atual
        startScrolling(); // Reinicia a rolagem com a nova velocidade
    }
});

// Função para iniciar a rolagem do conteúdo
function startScrolling() {
    interval = setInterval(function() {
        let content = document.querySelector('.content'); // Seleciona o elemento de conteúdo
        // Ajusta a posição do conteúdo, movendo-o para cima
        content.style.top = (parseInt(content.style.top || 0) - 1) + 'px';
    }, 100 / speed); // Define o intervalo com base na velocidade
}
