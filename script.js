console.log("script.js carregou");

const switchEl = document.getElementById("switch");

switchEl.addEventListener("click", () => {
  console.log("clicou no switch");

  document.documentElement.classList.toggle("light");

  console.log("classes no html:", document.documentElement.className);

  const img = document.querySelector("#profile img");

  if (document.documentElement.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "Foto de perfil com fundo claro");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", "Foto de perfil com fundo escuro");
  }
});

// teste //
