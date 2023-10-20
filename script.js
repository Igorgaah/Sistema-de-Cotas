document.addEventListener('DOMContentLoaded', function() {
    const simuladorForm = document.getElementById('simuladorForm');
    const opcoesPergunta1 = document.getElementById('opcoesPergunta1');
    const opcoesPergunta2 = document.getElementById('opcoesPergunta2');
    const opcoesPergunta3 = document.getElementById('opcoesPergunta3');
    const opcoesPergunta4 = document.getElementById('opcoesPergunta4');

    function atualizarOpcoes() {
        const escolaPublica = document.getElementById('escolaPublica').value;
        const renda = document.getElementById('renda').value;
        const autodeclaradoPPI = document.getElementById('autodeclaradoPPI').value;

        // Pergunta 1
        opcoesPergunta1.innerHTML = escolaPublica === 'sim' ? 'Opções: AC, L5' : 'Opções: AC';

        // Pergunta 2
        opcoesPergunta2.innerHTML =
            escolaPublica === 'sim' ?
            (renda === 'sim' ? 'Opções: AC, L1, L5' : 'Opções: AC, L5') :
            'Opções: AC';

        // Pergunta 3
        opcoesPergunta3.innerHTML =
            escolaPublica === 'sim' ?
            (renda === 'sim' ? 'Opções: AC, L1, L2, L5, L6' : 'Opções: AC, L5, L6') :
            (renda === 'sim' ? 'Opções: AC, L1, L5' : 'Opções: AC, L5');

        // Pergunta 4
        opcoesPergunta4.innerHTML = '';
        if (escolaPublica === 'sim' && renda === 'sim' && autodeclaradoPPI === 'sim') {
            opcoesPergunta4.innerHTML = 'Opções: AC, L1, L2, L5, L6, L9, L10, L13, L14';
        } else if (escolaPublica === 'sim' && renda === 'sim' && autodeclaradoPPI === 'nao') {
            opcoesPergunta4.innerHTML = 'Opções: AC, L1, L5, L9, L13';
        } else if (escolaPublica === 'sim' && renda === 'nao' && autodeclaradoPPI === 'sim') {
            opcoesPergunta4.innerHTML = 'Opções: AC, L5, L6, L13, L14';
        } else if (escolaPublica === 'sim' && renda === 'nao' && autodeclaradoPPI === 'nao') {
            opcoesPergunta4.innerHTML = 'Opções: AC, L5, L13';
        } else if (escolaPublica === 'nao' && renda === 'sim' && autodeclaradoPPI === 'sim') {
            opcoesPergunta4.innerHTML = 'Opções: AC, L1, L2, L5, L6';
        } else if (escolaPublica === 'nao' && renda === 'sim' && autodeclaradoPPI === 'nao') {
            opcoesPergunta4.innerHTML = 'Opções: AC, L1, L5';
        } else if (escolaPublica === 'nao' && renda === 'nao' && autodeclaradoPPI === 'sim') {
            opcoesPergunta4.innerHTML = 'Opções: AC, L5, L6';
        } else if (escolaPublica === 'nao' && renda === 'nao' && autodeclaradoPPI === 'nao') {
            opcoesPergunta4.innerHTML = 'Opções: AC, L5';
        }
    }

    // Adicione eventos de alteração para cada pergunta
    simuladorForm.addEventListener('change', atualizarOpcoes);
});
