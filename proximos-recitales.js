console.log("Prueba API");

let imagen = document.querySelector("img");
let nombre = document.querySelector("h3");
let fecha = document.querySelector(".fecha");

fetch("https://aagraziani.github.io/trabajoFinal-codoAcodo/data.json")
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < data.length; i++) {
            console.log(data[i].foto, data[i].nombre);
            //imagen.src = data[i].foto;
            nombre.innerHTML = data[i].nombre;
            fecha.innerHTML = data[i].fecha;
        }
    })
    .catch(error => console.error(error))