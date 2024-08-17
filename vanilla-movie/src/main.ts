import { MovieListService } from "./api/services/tmdb/movieList.service";
import "./style.css";
// import typescriptLogo from "../src/";
// import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { WeatherService } from "./api/services/weathers/weather.service.ts";
import { DisasterMsgservice } from "./api/services/PData/disasterMsg.service.ts";
import { TrendMovieListService } from "./api/services/tmdb/trendingMovie.service.ts";

const movieListService = new MovieListService();
const weatherService = new WeatherService();
const disasterMsgService = new DisasterMsgservice();
const trendingMovieService = new TrendMovieListService();

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

  const weatherData = await weatherService.getCurrentWeather({
    params: {
      lat: 37.5665,
      lon: 126.978,
    },
  });

  const disasterMsgdata = await disasterMsgService.getDisasterMsg({
    params: {
      page_no: 5,
      num_of_rows: 7,
      type: "string",
    },
  });
  // 재난문자 데이터랑 트랜드무비 데이터랑 같이 보려면 오류나서 주석처리 해놓았습니다!

  // const TrendingMovieData = await trendingMovieService.getTrendingMovies({
  //   params: {
  //     language: "en-US",
  //   },
  // });

  // console.log("page", TrendingMovieData);

  // console.log("page", DisasterMsgdata);

  // await console.log("page", data.page);
})();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>

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
