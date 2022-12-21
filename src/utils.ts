import { DogCardType } from "./type.js";
import { DogDetailType } from "./type.js";
export const fetchApi = async function (url: string): Promise<[]> {
  try {
    const res = await fetch(url, {
      method: "GET",
      // credentials: "include",
      headers: {
        "x-api-key":
          "live_NRU3A3aMnfwuRFgax5JVaxhqTy9xL5Bv9wgZrRSeG4JuXUK6SW8Uesj3A03TtLIK",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (e) {
    throw e;
  }
};

export const bulidCard = function (dog: DogCardType) {
  const html = `<div class="dog-card"  data-id="${dog.id}">
  <div class="dog-card__img-contianer">
    <img src=${dog.url} alt="dog" class="dog-card__img" />
  </div>
  <p class="dog-card__dog-name">${dog.name}</p>
</div>`;
  return html;
};

export const buildDetailsCard = function (dog: DogDetailType) {
  const html = `
  <div class="card-details">
  <div class="card-details_img__container">
    <img src=${dog.url} alt="dog" class="card-details_img" />
  </div>
  <div class="card-details__content">
    <h2 class="card-details__name">Name: ${dog.name}</h2>
    <p class="card-details__bred-for">Breeding Purpose: ${dog.bred_for}</p>
    <p class="card-details__breed-group">Breeding Group: ${dog.breed_group}</p>
    <p class="card-details__temperament">Temperament: ${dog.temperament}</p>
    <p class="card-details__height">Height: ${
      (dog.height.imperial, dog.height.metric)
    }</p>
    <p class="card-details__weight">Weight: ${
      (dog.weight.imperial, dog.weight.metric)
    }</p>
    <p class="card-details__life-span">Life Span: ${dog.life_span}</p>
    <button class="close">X</button>
  </div>
  </div>
`;
  return html;
};
