var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
const main = document.querySelector("main");
const load = document.querySelector(".loading");
export const fetchApi = function (url) {
  return __awaiter(this, void 0, void 0, function* () {
    load.style.display = "flex";
    main.innerHTML = "";
    try {
      const res = yield fetch(url, {
        method: "GET",
        // credentials: "include",
        headers: {
          "x-api-key":
            "live_NRU3A3aMnfwuRFgax5JVaxhqTy9xL5Bv9wgZrRSeG4JuXUK6SW8Uesj3A03TtLIK",
          "Content-Type": "application/json",
        },
      });
      const data = yield res.json();
      const dogData = [];
      load.style.display = "none";
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
      return dogData;
    } catch (e) {
      throw e;
    }
  });
};
export const bulidCard = function (dog) {
  const html = `<div class="dog-card"  data-id="${dog.id}">
  <div class="dog-card__img-contianer">
    <img src=${dog.url} alt="dog" class="dog-card__img" />
  </div>
  <p class="dog-card__dog-name">${dog.name}</p>
</div>`;
  return html;
};
export const buildDetailsCard = function (dog) {
  const html = `
  <div class="card-details">
  <div class="card-details_img__container">
    <img src=${dog.url} alt="dog" class="card-details_img" />
  </div>
  <div class="card-details__content">
    <p class="card-details__name"><span class='title'>Name:</span> ${dog.name}</p>
    <p class="card-details__bred-for"><span class='title'>Breeding Purpose:</span> ${dog.bred_for}</p>
    <p class="card-details__breed-group"><span class='title'>Breeding Group:</span> ${dog.breed_group}</p>
    <p class="card-details__temperament"><span class='title'>Temperament:</span> ${dog.temperament}</p>
    <p class="card-details__height"><span class='title'>Height:</span> Imperial: ${dog.height.imperial}; Metric: ${dog.height.metric}</p>
    <p class="card-details__weight"><span class='title'>Weight:</span>Imperia: ${dog.weight.imperial}; Metric: ${dog.weight.metric}</p>
    <p class="card-details__life-span"><span class='title'>Life Span:</span> ${dog.life_span}</p>
    <h2 class="close">X</h2>
  </div>
  </div>
 `;
  return html;
};
