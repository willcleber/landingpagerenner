// Animação de entrada suave ao rolar
document.querySelectorAll('section').forEach(section => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(section);
  });
  
  // Adiciona classe para animação
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('fade-in');
  });


// Captura o evento de envio do formulário
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Previne o comportamento padrão do formulário

  // Captura os valores dos campos
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Cria a mensagem formatada para o WhatsApp
  const whatsappMessage = `Olá, meu nome é ${name}. Meu email é ${email} e meu telefone é ${phone}. Minha mensagem é: ${message}`;

  // Codifica a mensagem para URL
  const encodedMessage = encodeURIComponent(whatsappMessage);

  // Número de telefone do WhatsApp
  const phoneNumber = '+5562992727449';

  // Redireciona para o WhatsApp
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
});