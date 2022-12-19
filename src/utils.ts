import { DogCardType } from "./type.js";
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
    console.log(res);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (e) {
    throw e;
  }
};

export const bulidCard = function (dog: DogCardType) {
  const html = `<div class="dog-card">
  <div class="dog-card__img-contianer">
    <img src=${dog.url} alt="dog" class="dog-card__img" />
  </div>
  <p class="dog-card__dog-name">${dog.name}</p>
</div>`;
  return html;
};
