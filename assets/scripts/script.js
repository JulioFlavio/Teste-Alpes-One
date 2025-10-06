function mudarMenu() {
  const menu = $("#navbar-default")
  menu.hasClass("hidden") ? menu.removeClass("hidden") : menu.addClass("hidden");
}

function enviarFormulario() {

  const nome = $("#nomeForm");
  const email = $("#emailForm");
  const tel = $("#telForm");
  const assunto = $("#assuntoForm");
  const mensagem = $("#mensagemForm");
  const politica_de_privacidade = $("#politica-privacidade")
  const inputs = [nome, email, tel, assunto, mensagem]

  inputs.forEach(input => {
    if (input.val(null)) {
      input.addClass("border-red-500 outline-red-500")
      Swal.fire({
        title: "Erro ao enviar mensagem!",
        text: `Os campos destacados não foram preenchidos adequadamente`,
        icon: "error"
      });
    }
  });
}