import { MovieListService } from "./api/services/tmdb/movieList.service";
import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { WeatherService } from "./api/services/weathers/weather.service.ts";
import { TVListService } from "./api/services/tmdb/tvList.service.ts";
import { GeocodingService } from "./api/services/weathers/geocoding.service.ts";
import { FineDustService } from "./api/services/PData/fineDust.service.ts";
import { LectureListService } from "./api/services/PData/lectureList.service.ts";
import { ReviewListService } from "./api/services/tmdb/reviewList.service.ts";
import { PDataService } from "./api/services/PData/index.service.ts";
import { SeoulRestaurantService } from "./api/services/PData/seoulRestaurant.service.ts";

const movieListService = new MovieListService();
const weatherService = new WeatherService();
const tvListService = new TVListService();
const pDataService = new PDataService();
const forecastService = new WeatherService();
const geocodingService = new GeocodingService();
const fineDustService = new FineDustService();
const lectureListService = new LectureListService();
const reviewListService = new ReviewListService();
const seoulRestaurantService = new SeoulRestaurantService();

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
  // const buchonSubwayPassengerData = await pDataService.getBucheonSubwayPassenger({
  //   params: {
  //     page: 1,
  //     perPage: 10,
  //     returnType: "json",
  //   },
  // });
  // console.log("buchonSubwayPassengerData", buchonSubwayPassengerData);
  // console.log("buchonSubwayPassengerData", buchonSubwayPassengerData);
  // await console.log("page", data.page);
  // const corona = await pDataService.getCoronaMediaContentChange({
  //   params: {
  //     page: 1,
  //     perPage: 10,
  //   },
  // });
  // const nowPlayingTv = await movieListService.getNowPlayingTV({
  //   params: {
  //     include_adult: false,
  //     language: "ko-KR",
  //     page: 1,
  //     sort_by: "popularity.desc",
  //   },
  // });
  // console.log("nowPlayingTv", nowPlayingTv);
  // console.log("corona", corona);
  //   const reviewListdata = await reviewListService.getReviewList({
  //   params: {
  //     language: "en-US",
  //     page: 1,
  //   },
  //   path: {
  //     movie_id: 3,
  //   },
  // });
  // console.log(reviewListdata);
  // const fineDustdata = await fineDustService.getFineDustAlarm({
  //   params: {
  //     serviceKey: "Y2os9TKqA/47aq4DzoTiwip55KRZ7hc7gaHosnRgTP5GRRXwhZ7NVLSYClPeBj7Ui1nZRkGTNeA2bAYvsYmU5w==",
  //     returnType: "JSON",
  //     numOfRows: 100,
  //     pageNo: 1,
  //     year: 2020,
  //     itemCode: "PM10",
  //   },
  // });
  // //console.log(fineDustdata)
  // const lectureListdata = await lectureListService.getLectureList({
  //   params: {
  //     serviceKey: "dF9O57IdEh2CptfVSKijKH8TvxgT%2FFSMnPqdoz259FC0uwxqlqjG89PLvYd%2BdJx3ba5pXAwraFzhN3xFg8erfg%3D%3D",
  //   },
  // });
  // //console.log(lectureListdata)
  // const geocodingdata = await geocodingService.getGeocoding({
  //   params: {
  //     q: "Korea",
  //     limit: 5,
  //   },
  // });
  // //console.log(geocodingdata)
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
  /** 서울 서초구 음식점 */
  //   const restaurantData = await seoulRestaurantService.getSeoulRestaurant({
  //     params: {
  //       page: 1,
  //       perPage: 10,
  //     },
  //   });
  //   /**변경 tv 리스트 목록 */
  //   const TVdata = await tvListService.getChangeTV({
  //     params: {
  //       page: 1,
  //     },
  //   });
  // /*일상 예측 16일*/
  //   const dailyForecastData=await forecastService.getForeCast16({
  //     params:{
  //       lat:37.6634779,
  //       lon:127.2495274,
  //       cnt:3
  //     }
  //   })
  //   console.log('restaurantData: ', restaurantData)
  //   console.log('tvData',TVdata)
  //   console.log('forecastData',dailyForecastData);
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
