import { MovieListService } from "./api/services/tmdb/movieList.service";
import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { WeatherService } from "./api/services/weathers/weather.service.ts";
import { PeopleListService } from "./api/services/tmdb/peoplelist.service.ts";
import { GlobalMapsService } from "./api/services/weathers/globalmaps.service.ts";
import { SheltersService } from "./api/services/PData/shelters.service.ts";


const movieListService = new MovieListService();
const weatherService = new WeatherService();
const peopleListService = new PeopleListService();
const globalMapsService = new GlobalMapsService();
const sheltersService = new SheltersService();

(async () => {
  const data = await movieListService.getPopularMovies({
    params: {
      include_adult: false,
      include_video: false,
      language: "ko-KR",
      page: 1,
      sort_by: "popularity.desc",
    },
  });
 

  const peopleData = await peopleListService.getPeopleList({ 
    params: {
      page:1,  
      start_date:"2020-01-01",
    },
  });

// console.log(peopleData)

  const weatherData = await weatherService.getCurrentWeather({
    params: {
      lat: 37.5665,
      lon: 126.978,
    },
  });
  // console.log(weatherData)

  // const globalData = await globalMapsService.getGlobalMaps({ 
  //   params: {
  //     tm: 1723516800,
  //   },
  // });

  const shelterData = await sheltersService.getEmergencyShelters({ 
    params: {
      pageNo: 1,
      numOfRows: 20,
      type:"json",
    },
  });
// console.log(shelterData)

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
