
var gatosElement = document.getElementById("gatos");
var url = "https://cataas.com/cat?json=true";

function crearGato() {
	var gato = document.createElement("article");
	gato.className = "gato";
	gato.innerHTML = '<img alt="Gato lindo"><h2 class="h5 text-secondary">Datos:</h2><ul class="list-inline"></ul>';
	gatosElement.appendChild(gato);

	var imagen = gato.querySelector("img");
	var lista = gato.querySelector("ul");

	fetch(url, { method: "GET" })
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			imagen.src = data.url;
			if (data.tags.length === 0) {
				var elemento = document.createElement("li");
				elemento.className = "list-inline-item badge bg-secondary";
				elemento.textContent = "Sin etiquetas";
				lista.appendChild(elemento);
			} else {
				data.tags.forEach(function(tag) {
					var elemento = document.createElement("li");
					elemento.className = "list-inline-item badge bg-primary";
					elemento.textContent = tag;
					lista.appendChild(elemento);
				});
			}
		})
		.catch(function(error) {
			console.error("Error al obtener los datos:", error);
			lista.textContent = "No se pudieron cargar los datos.";
		});
}

for (var i = 0; i < 3; i++) {
	crearGato();
}
