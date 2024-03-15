function calculateAge(idade) {
    // Verifica se o campo de formulário está vazio
    if (!birthdateInput) {
      console.error('O campo de nascimento está vazio');
      return;
    }
  
    // Converte a data de nascimento em um objeto Date
    const birthdate = new Date(idade);
  
    // Verifica se a data de nascimento é válida
    if (isNaN(birthdate.getTime())) {
      console.error('A data de nascimento fornecida é inválida');
      return;
    }
  
    // Calcula a diferença entre a data atual e a data de nascimento em anos
    const ageDifference = new Date() - aniversario;
    const age = Math.floor(ageDifference / (1000 * 60 * 60 * 24 * 365.25));
  
    return idade;
  }