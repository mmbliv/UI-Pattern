import { fetchApi } from "./utils.js";
import { bulidCard } from "./utils.js";
import { buildDetailsCard } from "./utils.js";
const main = document.querySelector("main");
const cardDetail = document.querySelector(".card-details__container");
const dogData = [];
const url = "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=15";
// fetch data
fetchApi(url).then((data) => {
    data.forEach((dog) => {
        const dogD = {
            name: dog.breeds[0].name,
            url: dog.url,
            id: dog.id,
            weight: dog.breeds[0].weight,
            height: dog.breeds[0].height,
            bred_for: dog.breeds[0].bred_for,
            breed_group: dog.breeds[0].breed_group,
            life_span: dog.breeds[0].life_span,
            temperament: dog.breeds[0].temperament,
        };
        dogData.push(dogD);
        main.innerHTML += bulidCard(dogD);
    });
});
// add click event to each card
const dogCard = document.querySelector(".cards");
dogCard.addEventListener("click", function (e) {
    const target = e.target;
    const dogCard = target.closest(".dog-card");
    cardDetail.classList.add("layer");
    cardDetail.style.display = "flex";
    if (dogCard) {
        const id = dogCard.getAttribute("data-id");
        const dogWithDetail = dogData.filter((data) => data.id === id);
        cardDetail.innerHTML = buildDetailsCard(dogWithDetail[0]);
    }
});
// add click event to close btn
cardDetail.addEventListener("click", function (e) {
    const target = e.target;
    if (target.className === "close") {
        cardDetail.style.display = "none";
    }
});
// scoll event
document.addEventListener("scroll", function (e) {
    if (window.innerWidth <= 900) {
        cardDetail.style.display = "none";
    }
});
// more button
const moreBtn = document.querySelector(".btn-close");
moreBtn.addEventListener("click", function () {
    window.location.reload();
});
