document.addEventListener("DOMContentLoaded", function () {
  let formulario = document.querySelector("#Formulario");
  let params = new URLSearchParams(document.location.search);
  let task_id = params.get("task_id");
  let submitButton = document.querySelector("#Formulario #Crear");

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    let nombre = document.querySelector("#Formulario #nombre-banda").value;
    let fecha = document.querySelector("#Formulario #fecha-banda").value;
    let genero = document.querySelector("#Formulario #genero-banda").value;

    let data = {
      nombre: nombre,
      fecha: fecha,
      genero: genero,
    };
    console.log(data);

    let url = "http://localhost:5000/api/tasks/create/";

    fetchData(
      url,
      "POST",
      () => {
        document.querySelector("#Formulario").reset();
      },
      data
    );
  });
});
