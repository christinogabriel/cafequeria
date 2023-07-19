window.addEventListener('DOMContentLoaded', function() {
    var nome = prompt("Digite seu nome:");
  
    if (nome != null && nome != "") {
      var mensagem = "Olá, " + nome + "! Seja bem-vindo a Caféqueria.";
      document.getElementById("mensagem").innerHTML = "<h1>" + mensagem + "</h1>";
    }
  });