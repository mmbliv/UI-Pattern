import { fetchApi } from "./utils.js";
import { bulidCard } from "./utils.js";
const main = document.querySelector("main");
const url = "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=15";
fetchApi(url).then((data) => {
    data.forEach((dog) => {
        const dogCard = { name: dog.breeds[0].name, url: dog.url };
        main.innerHTML += bulidCard(dogCard);
    });
});
