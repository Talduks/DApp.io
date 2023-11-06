
 const registerForm = document.getElementById("register-form");

       
        registerForm.addEventListener("submit", function(event) {
           
            event.preventDefault();

           
            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const password = document.getElementById("password");

           
            const nameValue = name.value;
            const emailValue = email.value;
            const passwordValue = password.value;

           
            if (nameValue && emailValue && passwordValue) {
              
                alert("Cadastro realizado com sucesso!");
            } else {
              
                alert("Preencha todos os campos!");
            }

          
            name.value = "";
            email.value = "";
            password.value = "";
        });