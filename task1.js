console.log("script loaded....")

fetch("http://localhost:4000/products")
    .then((response) => {
        console.log("response", response);
        return response.json()

    })
    .then((data) => {
        console.log(data);
        displaydata(data);

    })
    .catch((err) => {
        console.log(err);

    })


function displaydata(data) {
    const container = document.getElementById("container")
    let content = "";
    data.products.forEach((i) => {

        content += 
        `
            <div>
                <img src = ${i.images[0]}  alt="" width="100px" height='100px>
                <h1>${i.title}</h1>
                <p>${i.description.slice(0,10)}...</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, neque perspiciatis.</p>
            </div> 
    `
    })
    container.innerHTML=content



}