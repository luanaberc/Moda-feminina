// Variável para armazenar a pontuação
let acertos = 0;
const totalPerguntas = 10;
const buttons = document.querySelectorAll('.btn-proximo');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.passo.ativo');
        const proximoPassoNum = this.getAttribute('data-proximo');

        // 1. Verificar e Contabilizar Resposta
        const isCorreta = this.getAttribute('data-correta');
        if (isCorreta === 'sim') {
            acertos++;
        }

        // 2. Determinar o Próximo Passo
        let proximoPassoId;
        
        if (proximoPassoNum === 'fim') {
            // Se for o final do quiz (após o passo-10)
            const criterioSucesso = 7; // Acertar 7 ou mais para sucesso
            
            if (acertos >= criterioSucesso) { 
                proximoPassoId = 'passo-fim-sucesso';
                document.getElementById('placar-acertos-sucesso').textContent = acertos;
            } else {
                proximoPassoId = 'passo-fim-erro';
                document.getElementById('placar-acertos-erro').textContent = acertos;
            }
        } else {
            // Avança para a próxima pergunta (passo-1, passo-2, ..., passo-10)
            proximoPassoId = 'passo-' + proximoPassoNum;
        }

        // 3. Trocar o Passo Visível
        atual.classList.remove('ativo');
        document.getElementById(proximoPassoId).classList.add('ativo');
    });
});