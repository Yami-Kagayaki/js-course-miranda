function meuescopo() {
  const form = document.querySelector(".form");
  const result = document.querySelector(".result");

  const pessoa = [];

  function recebeevento(event) {
    event.preventDefault();

    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    pessoa.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });

    console.log(pessoa);

    result.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
  }
  form.addEventListener("submit", recebeevento);
}

meuescopo();
