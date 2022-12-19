var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const fetchApi = function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch(url, {
                method: "GET",
                // credentials: "include",
                headers: {
                    "x-api-key": "live_NRU3A3aMnfwuRFgax5JVaxhqTy9xL5Bv9wgZrRSeG4JuXUK6SW8Uesj3A03TtLIK",
                    "Content-Type": "application/json",
                },
            });
            console.log(res);
            const data = yield res.json();
            console.log(data);
            return data;
        }
        catch (e) {
            throw e;
        }
    });
};
export const bulidCard = function (dog) {
    const html = `<div class="dog-card">
  <div class="dog-card__img-contianer">
    <img src=${dog.url} alt="dog" class="dog-card__img" />
  </div>
  <p class="dog-card__dog-name">${dog.name}</p>
</div>`;
    return html;
};
