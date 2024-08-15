import { MovieListService } from "./api/services/tmdb/movieList.service";
import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { WeatherService } from "./api/services/weathers/weather.service.ts";
import { TVListService } from "./api/services/tmdb/tvList.service.ts";
import { PDataService } from "./api/services/PData/index.service.ts";

const movieListService = new MovieListService();
const weatherService = new WeatherService();
const tvListService = new TVListService();
const pDataService = new PDataService();
const forecastService=new WeatherService();

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

    /** 서울 서초구 음식점 */
    const restaurantData = await pDataService.getSeoulRestaurant({
      params: {
        page: 1,
        perPage: 10,
      },
    });
    /**변경 tv 리스트 목록 */
    const TVdata = await tvListService.getChangeTV({
      params: {
        page: 1,
      },
    });
  /*일상 예측 16일*/
    const dailyForecastData=await forecastService.getForeCast16({
      params:{
        lat:37.6634779,
        lon:127.2495274,
        cnt:3
      }
    })
    console.log('restaurantData: ', restaurantData)
    console.log('tvData',TVdata)
    console.log('forecastData',dailyForecastData);
})();