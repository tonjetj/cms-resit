const leftContainer = document.querySelector(".results");
const url = "http://www.jenssen.one/wp-json/wc/store/products";
console.log(url);

async function fetchPosts() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);

    leftContainer.innerHTML = "";

    for (let i = 0; i < json.length; i++) {
      leftContainer.innerHTML += `<div href="details.html?id=${json[i].id}" class="card">
        <h2 class="name">${json[i].name}</h2>
        <div class="image" style="background-image: url(${json[i].images[0].src});"></div>
        <div class="details">
            <p>${json[i].description}</p>
        </div>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = message("error", error);
  }
}

fetchPosts();
