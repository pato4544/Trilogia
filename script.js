document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".newsletter-aside form");
    const emailInput = document.getElementById("email");
    const submitButton = form.querySelector("button");
    
    
    const mensajito = document.createElement("p");
    mensajito.style.fontSize = "10px";
     mensajito.style.fontWeight = "bold";
     mensajito.style.padding= "3px";
    form.appendChild( mensajito);
    
    
    emailInput.addEventListener("input", () => {
      if (validateEmail(emailInput.value)) {
        submitButton.disabled = false;
         mensajito.textContent = ""; // Limpiamos la cajita si el usuario puso el formato bueno en el input
      } else {
        submitButton.disabled = true;
         mensajito.textContent = "Por favor, ingresa un correo válido.";
         mensajito.style.color = "red";
      }
    });
    

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      
      if (validateEmail(emailInput.value)) {
         mensajito.textContent = "¡Gracias por suscribirte!";
         mensajito.style.color = "green";
        
        // Limpiamos el formulario despues de un tiempito
        setTimeout(() => {
          emailInput.value = "";
          submitButton.disabled = true;
           mensajito.textContent = "";
        }, 1500);
      } else {
         mensajito.textContent = "Correo inválido. Intentalo de nuevo.";
         mensajito.style.color = "red";
      }
    });
    
 
    function validateEmail(email) {
      const formato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Si no sigue el formatito este no va a tirar la validacion buena 
      return formato.test(email);
    }
  });
