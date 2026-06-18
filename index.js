// ==========================================
// 1. CONTROLE DE ABRIR E FECHAR A MODAL
// ==========================================
const modalCompra = document.getElementById('modalCompra');
const btnFechar = document.getElementById('btn-fechar');
const modalNomePlano = document.getElementById('modal-nome-plano');
const modalPrecoPlano = document.getElementById('modal-preco-plano');
const botoesAssinar = document.querySelectorAll('.btn-assinar');

// Loop para abrir a modal preenchendo os dados do plano clicado
botoesAssinar.forEach(botao => {
    botao.addEventListener('click', () => {
        const nomePlano = botao.getAttribute('data-plano');
        const precoPlano = botao.getAttribute('data-preco');
        
        modalNomePlano.innerText = nomePlano;
        modalPrecoPlano.innerText = precoPlano;
        
        modalCompra.classList.add('mostrar');
    });
});

// Fecha a modal ao clicar no (X)
btnFechar.addEventListener('click', () => {
    modalCompra.classList.remove('mostrar');
});

// Fecha a modal ao clicar no fundo escuro
window.addEventListener('click', (evento) => {
    if (evento.target === modalCompra) {
        modalCompra.classList.remove('mostrar');
    }
});

// ==========================================
// 2. CONTROLE DA TROCA DE PAGAMENTO (PIX / CARTÃO)
// ==========================================
const opcoesPagamento = document.querySelectorAll('.opcao-pagamento');
const camposPix = document.getElementById('campos-pix');
const camposCartao = document.getElementById('campos-cartao');

opcoesPagamento.forEach((opcao, index) => {
    opcao.addEventListener('click', () => {
        // Alterna a cor preta (classe ativo) dos botões
        opcoesPagamento.forEach(opt => opt.classList.remove('ativo'));
        opcao.classList.add('ativo');

        // Alterna os formulários baseado no botão clicado
        if (index === 0) {
            camposPix.classList.remove('escondido'); 
            camposCartao.classList.add('escondido');  
        } else if (index === 1) {
            camposCartao.classList.remove('escondido');
            camposPix.classList.add('escondido');      
        }
    });
});

// ==========================================
// 3. CONTROLE DO MENU HAMBÚRGUER MOBILE
// ==========================================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const navContato = document.getElementById('navContato');
const linksDoMenu = document.querySelectorAll('.nav-links a');

// Abre ou fecha a lista ao clicar no botão ☰ MENU
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('aberto');
    navContato.classList.toggle('aberto');
});

// Fecha o menu automaticamente quando o cliente clicar em qualquer link
linksDoMenu.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('aberto');
        navContato.classList.remove('aberto');
    });
});