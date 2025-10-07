function mudarMenu() {
  const menu = $("#navbar-default")
  menu.hasClass("hidden") ? menu.removeClass("hidden") : menu.addClass("hidden");
}

// function enviarFormulario(event) {
//   event.preventDefault();

//   const campos = [
//     $("#nomeForm"),
//     $("#emailForm"),
//     $("#telForm"),
//     $("#assuntoForm"),
//     $("#mensagemForm")
//   ];
//   const politica = $("#politica-privacidade");

//   let algumVazio = false;

//   campos.forEach(campo => {
//     if (!campo.val().trim()) {
//       campo.addClass("border-red-500 outline-red-500");
//       algumVazio = true;
//     } else {
//       campo.removeClass("border-red-500 outline-red-500");
//     }
//   });

//   if (algumVazio) {
//     Swal.fire({
//       title: "Erro ao enviar mensagem!",
//       text: "Preencha todos os campos obrigatórios.",
//       icon: "error"
//     });
//     return;
//   }

//   if (!politica.is(":checked")) {
//     Swal.fire({
//       title: "Erro ao enviar mensagem!",
//       text: "Você deve aceitar a política de privacidade.",
//       icon: "error"
//     });
//     politica.addClass("outline-red-500");
//     return;
//   } else {
//     politica.removeClass("outline-red-500");
//   }

//   // Se chegou aqui, todos os campos estão preenchidos e o checkbox está marcado
//   Swal.fire({
//     title: "Mensagem enviada com sucesso!",
//     text: "Entraremos em contato.",
//     icon: "success"
//   });
// }

document.getElementById("form_contato").addEventListener("submit", function (event) {
  event.preventDefault(); // impede o envio até validar

  // Pega os valores dos campos
  const nome = document.getElementById("nomeForm").value.trim();
  const email = document.getElementById("emailForm").value.trim();
  const telefone = document.getElementById("telForm").value.trim();
  const opcao = document.getElementById("assuntoForm").value;
  const mensagem = document.getElementById("mensagemForm").value.trim();
  const termos = document.getElementById("politica-privacidade").checked;

  // Swal.fire({
  //   title: "Erro ao enviar formulário!",
  //   text: "Vai se fuder",
  //   icon: "error"
  // });

  // Validação básica
  if (nome === "") {
    Swal.fire({
      title: "Erro ao enviar formulário!",
      text: "O nome não pode estar vazio!",
      icon: "error"
    });
    $("#nomeForm").addClass("border-red-500 outline-red-500")
    return;
  } else $("#nomeForm").removeClass("border-red-500 outline-red-500")

  // Validação simples de email (regex básica)
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailValido.test(email)) {
    Swal.fire({
      title: "Erro ao enviar formulário!",
      text: "O email não foi preenchido adequadamente!",
      icon: "error"
    });
    $("#emailForm").addClass("border-red-500 outline-red-500")
    return;
  } else $("#emailForm").removeClass("border-red-500 outline-red-500");

  // Telefone — mínimo de 8 dígitos, apenas números
  const telefoneValido = /^[0-9]{8,}$/;
  if (!telefoneValido.test(telefone)) {
    Swal.fire({
      title: "Erro ao enviar formulário!",
      text: "O telefone não foi inserido adequadamente",
      icon: "error"
    });
    $("#telForm").addClass("border-red-500 outline-red-500")
    return;
  } else $("#telForm").removeClass("border-red-500 outline-red-500")

  if (opcao === "") {
    Swal.fire({
      title: "Erro ao enviar formulário!",
      text: "Selecione uma opção!",
      icon: "error"
    });
    $("#assuntoForm").addClass("border-red-500 outline-red-500")
    return;
  } else $("#assuntoForm").removeClass("border-red-500 outline-red-500")

  if (mensagem === "") {
    Swal.fire({
      title: "Erro ao enviar formulário!",
      text: "A mensagem não pode estar vazia",
      icon: "error"
    });
    $("#mensagemForm").addClass("border-red-500 outline-red-500")
    return;
  } else $("#mensagemForm").removeClass("border-red-500 outline-red-500")

  if (!termos) {
    Swal.fire({
      title: "Erro ao enviar formulário!",
      text: "Você deve aceitar os termos.",
      icon: "error"
    });
    $("#politica-privacidade").addClass("border-red-500 outline-red-500")
    return;
  } else $("#politica-privacidade").removeClass("border-red-500 outline-red-500")

  Swal.fire({
    title: "Olá! Sua Mensagem foi recebida com sucesso!",
    text: "Em breve entraremos em contato.",
    icon: "success"
  });
  setTimeout(this.submit(), 50000);
});
