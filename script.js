// script.js

// Seleccionamos el botón y el elemento <body>
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.querySelector("body");

// Escuchamos el evento 'click' para alternar la clase "dark"
darkModeToggle.addEventListener("click", () => {
  // Alternamos la clase "dark" en el body
  body.classList.toggle("dark");

  // Opcional: Cambiamos el texto del botón según el estado
  if (body.classList.contains("dark")) {
    darkModeToggle.textContent = "Modo Claro";
  } else {
    darkModeToggle.textContent = "Modo Oscuro";
  }
});
