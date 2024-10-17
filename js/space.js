const input = document.getElementById("inputBuscar");
const btn = document.getElementById("btnBuscar");
const container = document.getElementById("contenedor");

btn.addEventListener("click", () => {
    const search = input.value;

    container.innerHTML = '';  

    fetch(`https://images-api.nasa.gov/search?q=${search}`)
    .then(response => response.json())
    .then(({ collection: { items } }) => {
        items.forEach(item => {
            const { data, links } = item;

            data.forEach(({ title, description, date_created }) => {
                let imgSrc = links[0].href; 

                container.innerHTML += `
                <div class="col-sm-4 mb-3">
                    <div class="card" style="width: 22rem;">
                        <img src="${imgSrc}" class="card-img-top" alt="${title}">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${description}</p>
                        </div>
<p class="text-secondary small text-start ps-3">${date_created}</p>
                    </div>
                </div>`;
            });
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
