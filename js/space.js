const input = document.getElementById("inputBuscar");
const btn = document.getElementById("btnBuscar");
const container = document.getElementById("contenedor");

btn.addEventListener("click", () => {
    const search = input.value;

    fetch(`https://images-api.nasa.gov/search?q=${search}`)
    .then(response => response.json())
    .then(({ collection: { items } }) => {
        items.forEach(item => {
          const { data, links } = item; 
    
          data.forEach(({ title, description }) => {
            console.log(`titulo: ${title}`); 
            console.log(`descripción: ${description}`)
          });
        
        links.forEach(({ href }) => {
            console.log(`links: ${href}`)
        })
        
        });
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });