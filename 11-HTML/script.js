const conteudo = document.getElementById('conteudo');
const navLinks = document.querySelectorAll('a').forEach(link => {
  link.onclick = e => {
    e.preventDefault();
    fetch(link.href)
      .then(resp => resp.text())
      .then(html => conteudo.innerHTML = html);
  };
});