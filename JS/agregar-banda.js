document.addEventListener("DOMContentLoaded", function () {
  let formulario = document.querySelector("#Formulario");
  let params = new URLSearchParams(document.location.search);
  let id_band = params.get("id_band");
  let submitButton = document.querySelector("#Formulario #Crear");

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    let nombre = document.querySelector("#Formulario #nombre-banda").value;
    let fecha = document.querySelector("#Formulario #fecha-banda").value;
    let genero = document.querySelector("#Formulario #genero-banda").value;
    let foto = document.querySelector("#Formulario #foto-banda").value;

    let data = {
      nombre: nombre,
      genero: genero,
      fecha: fecha,
      foto: foto
    };
    console.log(data);

    let url = "http://localhost:5000/api/bands/create/";

    fetchData(
      url,
      "POST",
      "cors",
      () => {
        document.querySelector("#Formulario").reset();
        window.location.replace("../pages/proximos-recitales.html");
      },
      data
    );
  });
});
