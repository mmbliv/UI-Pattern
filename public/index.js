var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchApi } from "./utils.js";
import { bulidCard } from "./utils.js";
import { buildDetailsCard } from "./utils.js";
const main = document.querySelector("main");
const cardDetail = document.querySelector(".card-details__container");
const dogData = [];
let close;
const url = "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=15";
(function generateClikEvent() {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetchApi(url).then((data) => {
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
        cardDetail.addEventListener("click", function (e) {
            const target = e.target;
            if (target.className === "close") {
                cardDetail.style.display = "none";
            }
        });
    });
})();
