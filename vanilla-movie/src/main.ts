import { MovieListService } from "./api/services/tmdb/movieList.service";
import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { WeatherService } from "./api/services/weathers/weather.service.ts";
import { NorthKoreaInfoService } from "./api/services/PData/northKoreaInfo.service.ts";
import { MovieCompanyService } from "./api/services/tmdb/movieCompany.service.ts";

const movieListService = new MovieListService();
const weatherService = new WeatherService();
const northKoreaInfoService = new NorthKoreaInfoService();
const movieCompanyService = new MovieCompanyService();
(async () => {
  // const data = await movieListService.getPopularMovies({
  //   params: {
  //     include_adult: false,
  //     include_video: false,
  //     language: "ko-KR",
  //     page: 1,
  //     sort_by: "popularity.desc",
  //   },
  // });

  // const weatherData = await weatherService.getCurrentWeather({
  //   params: {
  //     lat: 37.5665,
  //     lon: 126.978,
  //   },
  // });

  // const nkData = await northKoreaInfoService.getInfo(
  //   {
  //     params: {
  //       pageNo:1,
  //       numOfRows:10,
  //       cl:"ARGUMENT_DAIL",
  //       bgng_ymd:"20240101",
  //       end_ymd:"20240813",
  //     }
  //   }
  // );
  // console.log(nkData);

  // const companyData = await movieCompanyService.getMovieCompany({path: {
  //   companyId: 2883
  // }});
  // console.log(companyData);
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
