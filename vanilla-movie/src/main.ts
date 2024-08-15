import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { ShortTermForecastService } from "./api/services/PData/shortTermForecast.service.ts";
import { Days3HourWeatherService } from "./api/services/weathers/5Days3HourWeather.service.ts";
import { MovieKeywordService } from "./api/services/tmdb/movieKeyword.service.ts";

const shortTermForecastService = new ShortTermForecastService();
const days3HourWeatherService = new Days3HourWeatherService();
const movieKeywordService = new MovieKeywordService();

(async () => {
    const shortTermForecastData =
        await shortTermForecastService.getShortTermForecast({
            params: {
                pageNo: 1,
                numOfRows: 1000,
                base_date: 20240814,
                base_time: 1200,
                nx: 55,
                ny: 127,
            },
        });

    const get5Days3HourWeather =
        await days3HourWeatherService.get5Days3HourWeather({
            params: {
                lat: 37.2883729,
                lon: 126.9829824,
            },
        });

    const getMovieKeyword = await movieKeywordService.getMovieKeyword({
        params: {},
    });

    console.log("Short Term Forecast:", shortTermForecastData);
    console.log("5 Days 3 Hours Weather:", get5Days3HourWeather);
    console.log("Movie Keywords:", getMovieKeyword);

    // await console.log("page", data.page);
})();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
