import { fetchApi } from "./utils.js";
import { bulidCard } from "./utils.js";
import { DogDetailType } from "./type.js";
import { DogCardType } from "./type.js";
import { buildDetailsCard } from "./utils.js";

const cardDetailContainersMouseout = document.querySelector(
  ".card-details"
)! as HTMLDivElement;

const cardDetailContainer = document.querySelector(
  ".card-details__container"
)! as HTMLDivElement;

const layer = document.querySelector(".layer")! as HTMLDivElement;
// const layer = document.querySelector(".layer")! as HTMLDivElement;

let dogData: DogDetailType[] = [];
let url: string;

// fetch data
if (screen.width > 1300) {
  url =
    "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=15";
} else {
  url =
    "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10";
}

fetchApi(url).then((data) => (dogData = data));

//
// add click event to each card
const dogCards = document.querySelector(".cards")! as HTMLDivElement;

dogCards.addEventListener("click", function (e) {
  const target = e.target as HTMLDivElement;
  const dogCard = target.closest(".dog-card")! as HTMLDivElement;
  // cardDetailContainer.classList.add("layer");
  // layer.style.display = "inline";
  cardDetailContainer.style.display = "flex";
  // cardDetailContainer.style.opacity = "1";
  // dogCard.style.display = "flex";
  // cardDetailContainer.style.visibility = "visible";
  if (dogCard) {
    const id = dogCard.getAttribute("data-id");
    const dogWithDetail = dogData.filter((data) => data.id === id);
    cardDetailContainer.innerHTML = buildDetailsCard(dogWithDetail[0]);
    const cardDetials = cardDetailContainer.children[0]! as HTMLDivElement;
    cardDetials.style.display = "flex";
  }
  // const layer = cardDetailContainer.children[1]! as HTMLDivElement;
  // console.log(layer);
  // layer.style.display = "inline";
  layer.style.display = "inline";
});

// add click event to close btn

cardDetailContainer.addEventListener("click", function (e) {
  const target = e.target as Element;
  if (target.className === "close") {
    // cardDetailContainer.style.opacity = "0";
    // cardDetailContainer.style.visibility = "hidden";
    // cardDetailContainer.style.animationName = "disappear";
    cardDetailContainer.style.display = "none";
    // const layer = cardDetailContainer.children[1]! as HTMLDivElement;
    layer.style.display = "none";
    // layer.style.display = "none";
    const detailCard = document.querySelector(
      ".card-details"
    )! as HTMLDivElement;
    // detailCard.style.animationName = "disappear";
    // detailCard.style.opacity = "0";
    // detailCard.style.visibility = "hidden";
    // detailCard.style.display = "none";
  }
});
// mouseover event
cardDetailContainer.addEventListener("mouseover", function (e) {
  const target = e.target as HTMLDivElement;
  const detailCard = target.closest(".card-details") as HTMLDivElement;
  if (detailCard) {
    detailCard.addEventListener("mouseleave", function (e) {
      const target = e.currentTarget as HTMLDivElement;
      // target.style.opacity = "0";
      // target.style.visibility = "hidden";
      // cardDetailContainer.style.opacity = "0";
      // cardDetailContainer.style.visibility = "hidden";
      cardDetailContainer.style.display = "none";
      layer.style.display = "none";
    });
  }
});
// scoll event
document.addEventListener("scroll", function (e) {
  if (window.innerWidth <= 900) {
    cardDetailContainer.style.display = "none";
  }
});
// more button
const moreBtn = document.querySelector(".btn-more")! as HTMLButtonElement;
moreBtn.addEventListener("click", function () {
  if (screen.width > 1300) {
    url =
      "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=15";
  } else {
    url =
      "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10";
  }
  fetchApi(url).then((data) => (dogData = data));
});
