import { fetchApi } from "./utils.js";
import { bulidCard } from "./utils.js";
import { DogDetailType } from "./type.js";
import { DogCardType } from "./type.js";
import { buildDetailsCard } from "./utils.js";
const main = document.querySelector("main")!;
const cardDetail = document.querySelector(
  ".card-details__container"
)! as HTMLDivElement;
let dogData: DogDetailType[] = [];
const url =
  "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=15";
// fetch data
fetchApi(url).then((data) => (dogData = data));
//
// add click event to each card
const dogCard = document.querySelector(".cards")! as HTMLDivElement;
dogCard.addEventListener("click", function (e) {
  const target = e.target as Element;
  const dogCard = target.closest(".dog-card");
  cardDetail.classList.add("layer");
  cardDetail.style.display = "flex";
  if (dogCard) {
    const id = dogCard.getAttribute("data-id");
    console.log(id);
    const dogWithDetail = dogData.filter((data) => data.id === id);
    cardDetail.innerHTML = buildDetailsCard(dogWithDetail[0]);
  }
});
// add click event to close btn
cardDetail.addEventListener("click", function (e) {
  const target = e.target as Element;
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
const moreBtn = document.querySelector(".btn-more")! as HTMLButtonElement;
moreBtn.addEventListener("click", function () {
  fetchApi(url);
});
