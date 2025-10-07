function mudarMenu() {
  const menu = $("#navbar-default")
  menu.hasClass("hidden") ? menu.removeClass("hidden") : menu.addClass("hidden");
}

const form = document.getElementById("form_contato");
const telefoneInput = document.getElementById("telForm");

// Máscara do telefone (fora do submit)
telefoneInput.addEventListener("input", function () {
  let valor = telefoneInput.value.replace(/\D/g, "");
  if (valor.length > 11) valor = valor.slice(0, 11);

  if (valor.length > 10) {
    valor = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  } else if (valor.length > 6) {
    valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
  } else if (valor.length > 2) {
    valor = valor.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
  } else {
    valor = valor.replace(/^(\d*)$/, "($1");
  }

  telefoneInput.value = valor;
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nomeForm").value.trim();
  const email = document.getElementById("emailForm").value.trim();
  const telefone = telefoneInput.value.trim();
  const opcao = document.getElementById("assuntoForm").value;
  const mensagem = document.getElementById("mensagemForm").value.trim();
  const termos = document.getElementById("politica-privacidade").checked;

  // validações
  if (nome === "") {
    Swal.fire({ title: "Erro!", text: "O nome não pode estar vazio!", icon: "error" });
    $("#nomeForm").addClass("border-red-500 outline-red-500");
    return;
  } else {
    $("#nomeForm").removeClass("border-red-500 outline-red-500")
  };

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailValido.test(email)) {
    Swal.fire({ title: "Erro!", text: "O email não foi preenchido adequadamente!", icon: "error" });
    $("#emailForm").addClass("border-red-500 outline-red-500");
    return;
  } else {
    $("#emailForm").removeClass("border-red-500 outline-red-500")
  };

  const telefoneLimpo = telefone.replace(/\D/g, "");
  if (telefoneLimpo.length < 10) {
    Swal.fire({ title: "Erro!", text: "O telefone não foi inserido adequadamente.", icon: "error" });
    $("#telForm").addClass("border-red-500 outline-red-500");
    return;
  } else {
    $("#telForm").removeClass("border-red-500 outline-red-500")
  };

  if (opcao === "") {
    Swal.fire({ title: "Erro!", text: "Selecione uma opção!", icon: "error" });
    $("#assuntoForm").addClass("border-red-500 outline-red-500");
    return;
  } else {
    $("#assuntoForm").removeClass("border-red-500 outline-red-500")
  };

  if (mensagem === "") {
    Swal.fire({ title: "Erro!", text: "A mensagem não pode estar vazia!", icon: "error" });
    $("#mensagemForm").addClass("border-red-500 outline-red-500");
    return;
  } else {
    $("#mensagemForm").removeClass("border-red-500 outline-red-500")
  };

  if (!termos) {
    Swal.fire({ title: "Erro!", text: "Você deve aceitar os termos.", icon: "error" });
    $("#politica-privacidade").addClass("border-red-500 outline-red-500");
    return;
  } else {
    $("#politica-privacidade").removeClass("border-red-500 outline-red-500")
  };

  // sucesso
  Swal.fire({
    title: "Mensagem enviada!",
    text: "Olá! Sua mensagem foi recebida com sucesso. Em breve entraremos em contato.",
    icon: "success"
  });

  setTimeout(() => form.submit(), 5000);
});

