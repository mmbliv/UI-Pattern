import { fetchApi } from "./utils.js";
import { bulidCard } from "./utils.js";
import { DogDetailType } from "./type.js";
import { DogCardType } from "./type.js";
import { buildDetailsCard } from "./utils.js";
const main = document.querySelector("main")!;
const cardDetail = document.querySelector(".card-details")! as HTMLDivElement;
const dogData: DogDetailType[] = [];
const url =
  "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=15";

(async function generateClikEvent() {
  await fetchApi(url).then((data) => {
    data.forEach((dog: any) => {
      const dogD: DogDetailType = {
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

  const dogCards = document.querySelectorAll(".dog-card")!;
  dogCards.forEach((dog) => {
    dog.addEventListener("click", function (e) {
      const id = dog.getAttribute("data-id");
      const dogWithDetail = dogData.filter((data) => data.id === id);
      cardDetail.innerHTML = buildDetailsCard(dogWithDetail[0]);
    });
  });
})();
