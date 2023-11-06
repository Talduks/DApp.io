 // Função para gerar um número aleatório entre min e max
 function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Função para gerar um número de cartão de crédito válido
  // Baseado no algoritmo de Luhn
  // Fonte: [1](https://pt.stackoverflow.com/questions/21860/como-pegar-input-usando-html-e-javascript)
  function generateCardNumber(prefix) {
    let digits = prefix.split("").map(Number); // Converte o prefixo em um array de números
    let sum = 0; // Soma dos dígitos para o algoritmo de Luhn
    let checkDigit = 0; // Dígito de verificação para o algoritmo de Luhn

    // Gera os outros 10 dígitos aleatoriamente
    for (let i = 0; i < 10; i++) {
      digits.push(getRandom(0, 9));
    }

    // Aplica o algoritmo de Luhn para calcular o dígito de verificação
    // Fonte: [2](https://bing.com/search?q=como+criar+um+input+em+HTML)
    for (let i = 0; i < 15; i++) {
      let digit = digits[14 - i];
      if (i % 2 == 0) {
        digit *= 2;
      }
      if (digit > 9) {
        digit -= 9;
      }
      sum += digit;
    }
    checkDigit = (10 - (sum % 10)) % 10;

    // Adiciona o dígito de verificação ao array de dígitos
    digits.push(checkDigit);

    // Retorna o número de cartão como uma string
    return digits.join("");
  }

  // Função para gerar uma data de validade aleatória
  // A data deve ser maior que a data atual
  function generateExpiryDate() {
    let currentDate = new Date(); // Data atual
    let currentYear = currentDate.getFullYear(); // Ano atual
    let currentMonth = currentDate.getMonth(); // Mês atual (0 a 11)
    let expiryYear = getRandom(currentYear, currentYear + 5); // Ano de validade entre o ano atual e o ano atual + 5
    let expiryMonth = 0; // Mês de validade

    // Se o ano de validade for igual ao ano atual, o mês de validade deve ser maior que o mês atual
    if (expiryYear == currentYear) {
      expiryMonth = getRandom(currentMonth + 1, 11);
    } else {
      expiryMonth = getRandom(0, 11);
    }

    // Retorna a data de validade como uma string no formato MM/YY
    return (expiryMonth + 1).toString().padStart(2, "0") + "/" + expiryYear.toString().slice(-2);
  }

  // Função para gerar um número CVV aleatório
  // O número CVV deve ter 3 dígitos
  function generateCVV() {
    return getRandom(100, 999).toString();
  }

  // Função para gerar um novo cartão e atualizar os elementos HTML
  function generateCard() {
    // Seleciona o prefixo digitado pelo usuário
    let prefix = document.getElementById("prefix").value;

    // Verifica se o prefixo tem 6 dígitos
    if (prefix.length != 6) {
      alert("Digite 6 dígitos para o prefixo");
      return;
    }

    // Seleciona os elementos HTML para mostrar os dados do cartão
    let cardNumberElement = document.getElementById("card-number");
    let cardExpiryElement = document.getElementById("card-expiry");
    let cardCVVElement = document.getElementById("card-cvv");

    // Gera os dados do cartão e mostra nos elementos HTML
    cardNumberElement.textContent = generateCardNumber(prefix);
    cardExpiryElement.textContent = "Validade: " + generateExpiryDate();
    cardCVVElement.textContent = "CVV: " + generateCVV();
  }