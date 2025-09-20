document.addEventListener('DOMContentLoaded',()=>{
  const y = document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();

  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('primary-nav');
  if(navToggle && nav){
    navToggle.addEventListener('click',()=>{
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.style.display = expanded ? 'none' : 'flex';
    });
  }

  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', e=>{
      e.preventDefault();
      const status = document.getElementById('form-status');
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if(!name || !email || !message){ status.textContent = 'Please fill in all fields.'; return; }
      if(message.length < 10){ status.textContent='Message must be at least 10 characters.'; return; }
      status.textContent = 'Sending...';
      setTimeout(()=>{ status.textContent = 'Thanks — we’ll get back to you soon!'; form.reset(); }, 700);
    });
  }
});