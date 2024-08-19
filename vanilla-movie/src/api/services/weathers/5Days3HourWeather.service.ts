import {
    get5Days3HourWeatherRequest,
    get5Days3HourWeatherResponse,
} from "../../@types/weathers/5Days3HourWeather.type";

const API_KEY = "ed5932811c4b345a5d1acc86be32a5d5";

export class Days3HourWeatherService {
    /** 5일 / 3시간 날씨 조회 */
    async get5Days3HourWeather(req: get5Days3HourWeatherRequest) {
        const { params } = req;
        const url = new URL(`https://api.openweathermap.org/data/2.5/forecast`);

        Object.entries({
            ...params,
            appid: API_KEY,
        }).forEach(([key, value]) => {
            url.searchParams.append(key, value.toString());
        });

        const res = await fetch(url);

        const data = (await res.json()) as get5Days3HourWeatherResponse;

        return data;
    }
}
