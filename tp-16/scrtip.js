
var Url = "https://cataas.com/cat?json=true";
var imgElement = document.getElementById("foto");
var dataElement = document.getElementById("Datos");

function cargarDatos(url) {
    fetch(url, { method: 'GET' })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            imgElement.src = data.url;

            for (var i = 0; i < data.tags.length; i++) {
                var categoria = data.tags[i];
                var categoriaItem = document.createElement("li");
                categoriaItem.className = "list-inline-item";

                var categoriaBadge = document.createElement("span");
                categoriaBadge.className = "badge bg-primary";
                categoriaBadge.textContent = categoria;

                categoriaItem.appendChild(categoriaBadge);
                dataElement.appendChild(categoriaItem);
            }
        })
        .catch(function(error) {
            console.error("Error al obtener los datos:", error);
            dataElement.textContent = "No se pudieron cargar los datos.";
        });
}

cargarDatos(Url);
