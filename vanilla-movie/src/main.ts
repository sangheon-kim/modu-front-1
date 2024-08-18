import { TvListService } from "./api/services/tmdb/tvList.service.ts"   //TMDB service
import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { WeatherService } from "./api/services/weathers/weather.service.ts"; //weather service
import { PDataService } from "./api/services/PData/index.service.ts";  //PData service


const tvListService = new TvListService();
const weatherService = new WeatherService();
const pDataService = new PDataService();

(async () => {

  const data = await tvListService.getOnTheAirTvs({
    params: {
      include_adult: false,
      include_video: false,
      language: "ko-KR",
      page: 1,
      sort_by: "popularity.desc",
      "air_date.lte": "2024-08-15",
      "air_date.gte": "2024-01-01"
    },
  });
  // console.log("Moviedata", data);

  
 const weatherData = await weatherService.getCurrentWeather({
    params: {
      lat: 35.1993856,
      lon: 129.1288576,
    },
  });
  // console.log("weatherData", weatherData);
  
 const pData = await pDataService.getEduVideoRecommend({
   params: {
    pageNo: 1,
    numOfRows: 10,
    dataType: "json",
    legaldongCode: "1111010300",

   },
 });
 console.log("pData", pData);
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
