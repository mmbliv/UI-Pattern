import { fetchApi } from "./utils.js";
import { DogDetailType } from "./type.js";
import { buildDetailsCard } from "./utils.js";

const cardDetailContainer = document.querySelector(
  ".card-details__container"
)! as HTMLDivElement;

const layer = document.querySelector(".layer")! as HTMLDivElement;

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

// add click event to each card
const dogCards = document.querySelector(".cards")! as HTMLDivElement;

dogCards.addEventListener("click", function (e) {
  const target = e.target as HTMLDivElement;
  const dogCard = target.closest(".dog-card")! as HTMLDivElement;
  cardDetailContainer.style.visibility = "visible";
  // here add an visibility and opacity property is because I I want the details card has a transition property
  // display property do not has transition feature.
  cardDetailContainer.style.opacity = "1";
  if (dogCard) {
    const id = dogCard.getAttribute("data-id");
    const dogWithDetail = dogData.filter((data) => data.id === id);
    cardDetailContainer.innerHTML = buildDetailsCard(dogWithDetail[0]);
    const cardDetials = cardDetailContainer.children[0]! as HTMLDivElement;
    cardDetials.style.display = "flex";
  }
  layer.style.display = "inline";
});

// add click event to close btn

cardDetailContainer.addEventListener("click", function (e) {
  const target = e.target as Element;
  if (target.className === "close") {
    cardDetailContainer.style.opacity = "0";
    cardDetailContainer.style.visibility = "hidden";
    layer.style.display = "none";
  }
});
// mouseover event
cardDetailContainer.addEventListener("mouseleave", function (e) {
  // const target = e.target as HTMLDivElement;
  cardDetailContainer.style.visibility = "hidden";
  cardDetailContainer.style.opacity = "0";
  layer.style.display = "none";
  // const detailCard = target.closest(".card-details") as HTMLDivElement;
  // if (detailCard) {
  //   detailCard.addEventListener("mouseleave", function (e) {
  //     cardDetailContainer.style.visibility = "hidden";
  //     cardDetailContainer.style.opacity = "0";
  //     layer.style.display = "none";
  //   });
  // }
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
