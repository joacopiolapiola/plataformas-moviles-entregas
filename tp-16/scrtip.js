
const Url = "https://cataas.com/cat?json=true";

const imgElement = document.getElementById("foto");
const dataElement = document.getElementById("Datos");

fetch(Url, {
    method: 'GET',
})
    .then(response => response.json())
    .then(response => {
        imgElement.src = response.url;
        dataElement.textContent = JSON.stringify(response, null, 2);
    })
    .catch(error => {
        console.error("Error al obtener los datos:", error);
        dataElement.textContent = "No se pudieron cargar los datos.";
    });
