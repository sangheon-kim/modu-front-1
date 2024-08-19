import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

import { RecommendMoiveService } from "./api/services/tmdb/reommendMovie.service.ts";
import { ShortWeatherForecast } from "./api/services/PData/shortWeatherForecast.service.ts";

import { ShortTermForecastService } from "./api/services/PData/shortTermForecast.service.ts";
import { Days3HourWeatherService } from "./api/services/weathers/5Days3HourWeather.service.ts";
import { MovieKeywordService } from "./api/services/tmdb/movieKeyword.service.ts";
import { PDataService } from "./api/services/PData/index.service.ts";
import { WeatherService } from "./api/services/weathers/weather.service.ts";
import { NorthKoreaInfoService } from "./api/services/PData/northKoreaInfo.service.ts";
import { MovieCompanyService } from "./api/services/tmdb/movieCompany.service.ts";
import { TVListService } from "./api/services/tmdb/tvList.service.ts";
import { PeopleListService } from "./api/services/tmdb/peoplelist.service.ts";
import { GlobalMapsService } from "./api/services/weathers/globalmaps.service.ts";
import { SheltersService } from "./api/services/PData/shelters.service.ts";
import { GeocodingService } from "./api/services/weathers/geocoding.service.ts";
import { FineDustService } from "./api/services/PData/fineDust.service.ts";
import { LectureListService } from "./api/services/PData/lectureList.service.ts";
import { MovieListService } from "./api/services/tmdb/movieList.service.ts";
import { ReviewListService } from "./api/services/tmdb/reviewList.service.ts";
import { SeoulRestaurantService } from "./api/services/PData/seoulRestaurant.service.ts";
import { BuchonSubwayPassengerService } from "./api/services/PData/bucheonSubwayPassenger.service.ts";
import { CoronaMediaContentChangeService } from "./api/services/PData/coronaMediaContentChange.service.ts";

const shortTermForecastService = new ShortTermForecastService();
const days3HourWeatherService = new Days3HourWeatherService();
const movieKeywordService = new MovieKeywordService();
const movieListService = new MovieListService();
const weatherService = new WeatherService();
const tvListService = new TVListService();
const pDataService = new PDataService();
const forecastService = new WeatherService();
const peopleListService = new PeopleListService();
const globalMapsService = new GlobalMapsService();
const sheltersService = new SheltersService();
const geocodingService = new GeocodingService();
const fineDustService = new FineDustService();
const lectureListService = new LectureListService();
const reviewListService = new ReviewListService();
const seoulRestaurantService = new SeoulRestaurantService();
const coronaMediaContentChangeService = new CoronaMediaContentChangeService();
const bucheonSubwayPassengerService = new BuchonSubwayPassengerService();
const northKoreaInfoService = new NorthKoreaInfoService();
const movieCompanyService = new MovieCompanyService();
// const beachService = new BeachService();
const recommedMovieService = new RecommendMoiveService();
const shortWeatherForecast = new ShortWeatherForecast();

(async () => {
  // const recommendMovieData = await recommedMovieService.getRecommnedMovie({
  //   params:{
  //     launguage:'ko-KR',
  //     page:1
  //   },
  //   path:{
  //     movie_id:3
  //   }
  // });
  // console.log(recommendMovieData);
  // const shortWeatherData = await shortWeatherForecast.getShortWeatherForecast({
  //   params:{
  //     pageNo:1,
  //     numOfRows:10,
  //     dataType:'JSON',
  //     base_date:20240818,
  //     base_time:1800,
  //     nx:55,
  //     ny:127,
  //   }
  // });
  // console.log(shortWeatherData);
  //   const data = await movieListService.getPopularMovies({
  //     params: {
  //       include_adult: false,
  //       include_video: false,
  //       language: "ko-KR",
  //       page: 1,
  //       sort_by: "popularity.desc",
  //     },
  //   });
  //   const peopleData = await peopleListService.getPeopleList({
  //     params: {
  //       page:1,
  //       start_date:"2020-01-01",
  //     },
  //   });
  // // console.log(peopleData)
  //   const weatherData = await weatherService.getCurrentWeather({
  //     params: {
  //       lat: 37.5665,
  //       lon: 126.978,
  //     },
  //   });
  // console.log(weatherData)
  // const globalData = await globalMapsService.getGlobalMaps({
  //   params: {
  //     tm: 1723516800,
  //   },
  // });
  //   const shelterData = await sheltersService.getEmergencyShelters({
  //     params: {
  //       pageNo: 1,
  //       numOfRows: 20,
  //       type:"json",
  //     },
  //   });
  // console.log(shelterData)
  // await console.log("page", data.page);
  // const corona =
  //   await coronaMediaContentChangeService.getCoronaMediaContentChange({
  //     params: {
  //       page: 1,
  //       perPage: 10,
  //     },
  //   });
  // console.log(corona);
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
  // const buchonSubwayPassengerData = await bucheonSubwayPassengerService.getBucheonSubwayPassenger({
  //   params: {
  //     page: 1,
  //     perPage: 10,
  //     returnType: "json",
  //   },
  // });
  // console.log("buchonSubwayPassengerData", buchonSubwayPassengerData);\
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
  //   const shortTermForecastData =
  //   await shortTermForecastService.getShortTermForecast({
  //       params: {
  //           pageNo: 1,
  //           numOfRows: 1000,
  //           base_date: 20240814,
  //           base_time: 1200,
  //           nx: 55,
  //           ny: 127,
  //       },
  //   });
  // const get5Days3HourWeather =
  //   await days3HourWeatherService.get5Days3HourWeather({
  //       params: {
  //           lat: 37.2883729,
  //           lon: 126.9829824,
  //       },
  //   });
  // const getMovieKeyword = await movieKeywordService.getMovieKeyword({
  //   params: {},
  // });
  // console.log("Short Term Forecast:", shortTermForecastData);
  // console.log("5 Days 3 Hours Weather:", get5Days3HourWeather);
  // console.log("Movie Keywords:", getMovieKeyword);
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
