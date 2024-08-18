import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { RecommendMoiveService } from "./api/services/tmdb/reommendMovie.service.ts";
import { ShortWeatherForecast } from "./api/services/PData/shortWeatherForecast.service.ts";

// const beachService = new BeachService();
const recommedMovieService = new RecommendMoiveService();
const shortWeatherForecast = new ShortWeatherForecast();

(async () => {

  const recommendMovieData = await recommedMovieService.getRecommnedMovie({
    params:{
      launguage:'ko-KR',
      page:1
    },
    path:{
      movie_id:3
    }
  });
  console.log(recommendMovieData);

  const shortWeatherData = await shortWeatherForecast.getShortWeatherForecast({
    params:{
      pageNo:1,
      numOfRows:10,
      dataType:'JSON',
      base_date:20240818,
      base_time:1800,
      nx:55,
      ny:127,
    }
  });
  console.log(shortWeatherData);

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
