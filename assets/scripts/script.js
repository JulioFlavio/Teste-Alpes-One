function mudarMenu() {
  const menu = $("#navbar-default")
  menu.hasClass("hidden") ? menu.removeClass("hidden") : menu.addClass("hidden");
}

addEventListener("submit", function(event) {
  
  Swal.fire({
    title: "Sua mensagem foi recebida com sucesso!",
    text: "Entraremos em contato em breve.",
    icon: "success"
  });

  event.preventDefault();
})