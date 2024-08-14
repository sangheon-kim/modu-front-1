import { MovieListService } from "./api/services/tmdb/movieList.service";
import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { WeatherService } from "./api/services/weathers/weather.service.ts";
import {GeocodingService } from "./api/services/weathers/geocoding.service.ts";
import {FineDustService} from "./api/services/PData/fineDust.service.ts";
import {LectureListService} from "./api/services/PData/lectureList.service.ts";
import {ReviewListService} from "./api/services/tmdb/reviewList.services.ts";

const movieListService = new MovieListService();
const weatherService = new WeatherService();
const geocodingService = new GeocodingService();
const fineDustService = new FineDustService();
const lectureListService = new LectureListService();
const reviewListService = new ReviewListService();

(async () => {
  const lectureListdata = await lectureListService.getLectureList({
    params: {
      serviceKey : "dF9O57IdEh2CptfVSKijKH8TvxgT%2FFSMnPqdoz259FC0uwxqlqjG89PLvYd%2BdJx3ba5pXAwraFzhN3xFg8erfg%3D%3D"
    }
  })

  const geocodingdata = await geocodingService.getGeocoding({
    params: {
      q : "Korea",
      limit : 5,
    }
  })

  const data = await movieListService.getPopularMovies({
    params: {
      include_adult: false,
      include_video: false,
      language: "ko-KR",
      page: 1,
      sort_by: "popularity.desc",
    },
  });

  const weatherData = await weatherService.getCurrentWeather({
    params: {
      lat: 37.5665,
      lon: 126.978,
    },
  });

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
