function validarLogin() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
    if (email && senha) {
      // Aqui futuramente validaremos com o back-end
      return true;
    } else {
      alert("Preencha todos os campos!");
      return false;
    }
  }
  