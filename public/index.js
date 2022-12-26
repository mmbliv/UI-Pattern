import { fetchApi } from "./utils.js";
import { buildDetailsCard } from "./utils.js";
const cardDetailContainersMouseout = document.querySelector(".card-details");
const cardDetailContainer = document.querySelector(".card-details__container");
const layer = document.querySelector(".layer");
// const layer = document.querySelector(".layer")! as HTMLDivElement;
let dogData = [];
let url;
// fetch data
if (screen.width > 1300) {
    url =
        "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=15";
}
else {
    url =
        "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10";
}
fetchApi(url).then((data) => (dogData = data));
//
// add click event to each card
const dogCards = document.querySelector(".cards");
dogCards.addEventListener("click", function (e) {
    const target = e.target;
    const dogCard = target.closest(".dog-card");
    // cardDetailContainer.classList.add("layer");
    // layer.style.display = "inline";
    // cardDetailContainer.style.display = "flex";
    cardDetailContainer.style.visibility = "visible";
    cardDetailContainer.style.opacity = "1";
    // dogCard.style.display = "flex";
    // cardDetailContainer.style.visibility = "visible";
    if (dogCard) {
        const id = dogCard.getAttribute("data-id");
        const dogWithDetail = dogData.filter((data) => data.id === id);
        cardDetailContainer.innerHTML = buildDetailsCard(dogWithDetail[0]);
        const cardDetials = cardDetailContainer.children[0];
        cardDetials.style.display = "flex";
    }
    // const layer = cardDetailContainer.children[1]! as HTMLDivElement;
    // console.log(layer);
    // layer.style.display = "inline";
    layer.style.display = "inline";
});
// add click event to close btn
cardDetailContainer.addEventListener("click", function (e) {
    const target = e.target;
    if (target.className === "close") {
        cardDetailContainer.style.opacity = "0";
        // cardDetailContainer.style.visibility = "hidden";
        // cardDetailContainer.style.animationName = "disappear";
        cardDetailContainer.style.visibility = "hidden";
        // const layer = cardDetailContainer.children[1]! as HTMLDivElement;
        layer.style.display = "none";
        // layer.style.display = "none";
        const detailCard = document.querySelector(".card-details");
        // detailCard.style.animationName = "disappear";
        // detailCard.style.opacity = "0";
        // detailCard.style.visibility = "hidden";
        // detailCard.style.display = "none";
    }
});
// mouseover event
cardDetailContainer.addEventListener("mouseover", function (e) {
    const target = e.target;
    const detailCard = target.closest(".card-details");
    if (detailCard) {
        detailCard.addEventListener("mouseleave", function (e) {
            const target = e.currentTarget;
            // target.style.opacity = "0";
            // target.style.visibility = "hidden";
            // cardDetailContainer.style.opacity = "0";
            // cardDetailContainer.style.visibility = "hidden";
            cardDetailContainer.style.visibility = "hidden";
            // cardDetailContainer.style.display = "none";
            cardDetailContainer.style.opacity = "0";
            layer.style.display = "none";
        });
    }
});
// scoll event
document.addEventListener("scroll", function (e) {
    if (window.innerWidth <= 900) {
        cardDetailContainer.style.visibility = "hidden";
        cardDetailContainer.style.opacity = "0";
        layer.style.display = "none";
    }
});
// more button
const moreBtn = document.querySelector(".btn-more");
moreBtn.addEventListener("click", function () {
    if (screen.width > 1300) {
        url =
            "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=15";
    }
    else {
        url =
            "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10";
    }
    fetchApi(url).then((data) => (dogData = data));
});
