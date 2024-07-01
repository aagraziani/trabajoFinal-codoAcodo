document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".proximos-recitales");

  fetch("http://127.0.0.1:5000/api/bands/get_all")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        console.log(data[i]);

        //Crea el article
        const article = document.createElement("article");

        //Crea la img y le agrega los atributos
        const img = document.createElement("img");
        img.src = "/public/img" + data[i].foto.slice(11);
        img.className = "imagen-banda";

        //Crea el h3 y le agrega los atributos
        const h3 = document.createElement("h3");
        h3.textContent = data[i].nombre;
        h3.className = "nombre-banda";

        //Crea el p y le agrega los atributos
        const p = document.createElement("p");
        p.textContent = data[i].fecha;
        p.className = "fecha";

        //Crea el a y le agrega los atributos
        const a = document.createElement("a");
        a.href = "/pages/comprar-entrada.html";
        a.textContent = "Comprar";
        a.className = "boton-comprar";

        //Le agrega los elementos al article
        article.appendChild(img);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(a);

        //Le agrega el article al section
        section.appendChild(article);
      }
    })
    .catch((error) => console.error(error));
});
