const form = document.getElementById("formCadastro");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const email = document.getElementById("email").value.trim();
    const idade = document.getElementById("idade").value.trim();
    const curso = document.getElementById("curso").value;

    if (!nome || !sobrenome || !email || !idade || !curso) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    const mensagem = document.getElementById("mensagemEnvio");
    mensagem.textContent = "Enviando dados... aguarde um momento ⏳";
    mensagem.classList.add("visivel");

    localStorage.setItem("nome", nome);
    localStorage.setItem("sobrenome", sobrenome);
    localStorage.setItem("email", email);
    localStorage.setItem("idade", idade);
    localStorage.setItem("curso", curso);

    // ⏳ Aguarda 2 segundos e redireciona
    setTimeout(() => {
      window.location.href = "confirmation.html";
    }, 2000);
  });
}

if (window.location.pathname.includes("confirmation.html")) {
  const nome = localStorage.getItem("nome");
  const sobrenome = localStorage.getItem("sobrenome");
  const email = localStorage.getItem("email");
  const idade = localStorage.getItem("idade");
  const curso = localStorage.getItem("curso");

  document.getElementById("confNome").textContent = nome || "—";
  document.getElementById("confSobrenome").textContent = sobrenome || "—";
  document.getElementById("confEmail").textContent = email || "—";
  document.getElementById("confIdade").textContent = idade || "—";
  document.getElementById("confCurso").textContent = curso || "—";
}
