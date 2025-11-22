document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('demoBtn');
  const msg = document.getElementById('msg');
  btn.addEventListener('click', function(){
    msg.textContent = 'Hello — your static site is ready to deploy!';
    msg.classList.remove('hidden');
  });
});
