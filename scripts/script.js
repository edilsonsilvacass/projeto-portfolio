const botao = document.getElementById('botao-tema');
const body = document.body;

// Função para atualizar o ícone do botão
function atualizarIconeTema(escuroAtivo) {
  botao.innerHTML = escuroAtivo
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
}

// Carrega tema salvo
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'escuro') {
  body.classList.add('escuro');
  atualizarIconeTema(true);
} else {
  atualizarIconeTema(false);
}

// Alternar tema ao clicar no botão
botao.addEventListener('click', () => {
  const escuroAtivo = body.classList.toggle('escuro');
  localStorage.setItem('tema', escuroAtivo ? 'escuro' : 'claro');
  atualizarIconeTema(escuroAtivo);
});

// Scroll suave para links do menu
const navLinks = document.querySelectorAll('nav ul a');
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    const alvo = document.querySelector(this.getAttribute('href'));
    if (alvo) {
      e.preventDefault();
      const offset = alvo.offsetTop - 20;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  });
});
