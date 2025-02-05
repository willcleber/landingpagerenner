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