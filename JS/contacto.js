document.addEventListener("DOMContentLoaded", function () {
  let formulario = document.querySelector("form");
  let articuloNombre = document.querySelector(".nombre");
  let nombre = document.querySelector("#nombre");
  let articuloApellido = document.querySelector(".apellido");
  let apellido = document.querySelector("#apellido");
  let articuloEmail = document.querySelector(".email");
  let email = document.querySelector("#email");
  let articuloTelefono = document.querySelector(".telefono");
  let telefono = document.querySelector("#telefono");
  let consulta = document.querySelector("#consulta");
  let boton = document.querySelector("button");

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    //Validacion Nombre
    if (nombre.value === "") {
      let p = document.createElement("p");
      p.innerHTML = "El campo Nombre no puede estar vacío";
      p.style.color = "red";
      articuloNombre.appendChild(p);

      nombre.addEventListener("keyup", (event) => {
        event.preventDefault();
        p.remove();
      });
    }

    //Validacion Apellido
    if (apellido.value === "") {
      let p = document.createElement("p");
      p.innerHTML = "El campo Apellido no puede estar vacío";
      p.style.color = "red";
      articuloApellido.appendChild(p);

      apellido.addEventListener("keyup", (event) => {
        event.preventDefault();
        p.remove();
      });
    }

    //Validacion Email
    if (email.value === "") {
      let p = document.createElement("p");
      p.innerHTML = "El campo Email no puede estar vacío";
      p.style.color = "red";
      articuloEmail.appendChild(p);

      email.addEventListener("keyup", (event) => {
        event.preventDefault();
        p.remove();
      });
    }

    //Validacion Telefono
    if (telefono.value === "") {
      let p = document.createElement("p");
      p.innerHTML = "El campo Teléfono no puede estar vacío";
      p.style.color = "red";
      articuloTelefono.appendChild(p);

      telefono.addEventListener("keyup", (event) => {
        event.preventDefault();
        p.remove();
      });
    }
  });
});
