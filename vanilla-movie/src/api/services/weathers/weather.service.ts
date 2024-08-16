import { getCurrentWeatherRequest, getCurrentWeatherResponse } from '../../@types/weathers/weather.type';

const APP_ID = '53b1de4879acb7568f38010e465a15a2';    // 굳이 api key를 호출하는 곳에서 받아 노출할 필요 X



export class WeatherService {
  async getCurrentWeather(req: getCurrentWeatherRequest) {
    const { params } = req;
    const url = new URL(`https://api.openweathermap.org/data/2.5/weather`);

    
   Object.entries({
    ...params,
    appid: APP_ID,
  }).forEach(([key, value]) => {
    url.searchParams.append(key, value.toString());
  });

   const res = await fetch(url);
   const data = (await res.json()) as getCurrentWeatherResponse;

   return data;
  }
}