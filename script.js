document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const aside = document.querySelector('aside');
    
    if (window.scrollY > aside.offsetHeight) {
        header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
})
