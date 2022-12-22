import { fetchApi } from "./utils.js";
import { bulidCard } from "./utils.js";
import { DogDetailType } from "./type.js";
import { DogCardType } from "./type.js";
import { buildDetailsCard } from "./utils.js";

const cardDetailsMouseout = document.querySelector(
  ".card-details"
)! as HTMLDivElement;

const cardDetail = document.querySelector(
  ".card-details__container"
)! as HTMLDivElement;

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
  const target = e.target as Element;
  const dogCard = target.closest(".dog-card");
  cardDetail.classList.add("layer");
  cardDetail.style.display = "flex";
  cardDetail.style.opacity = "1";
  // dogCard.style.display = "flex";
  cardDetail.style.visibility = "visible";

  if (dogCard) {
    const id = dogCard.getAttribute("data-id");
    const dogWithDetail = dogData.filter((data) => data.id === id);
    cardDetail.innerHTML = buildDetailsCard(dogWithDetail[0]);
  }
});

// add click event to close btn

cardDetail.addEventListener("click", function (e) {
  const target = e.target as Element;
  if (target.className === "close-container") {
    cardDetail.style.opacity = "0";
    cardDetail.style.visibility = "hidden";
    // cardDetail.style.animationName = "disappear";
    // cardDetail.style.display = "none";
    const detailCard = document.querySelector(
      ".card-details"
    )! as HTMLDivElement;
    // detailCard.style.animationName = "disappear";
    detailCard.style.opacity = "0";
    detailCard.style.visibility = "hidden";
  }
});
// mouseover event
cardDetail.addEventListener("mouseover", function (e) {
  const target = e.target as HTMLDivElement;
  const detailCard = target.closest(".card-details") as HTMLDivElement;
  if (detailCard) {
    detailCard.addEventListener("mouseleave", function (e) {
      const target = e.currentTarget as HTMLDivElement;
      target.style.opacity = "0";
      target.style.visibility = "hidden";
      cardDetail.style.opacity = "0";
      cardDetail.style.visibility = "hidden";
    });
  }
});
// scoll event
document.addEventListener("scroll", function (e) {
  if (window.innerWidth <= 900) {
    cardDetail.style.display = "none";
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
