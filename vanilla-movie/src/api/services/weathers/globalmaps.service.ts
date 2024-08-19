import {
    getGlobalPrecipitationMapsRequest,
    getGlobalPrecipitationMapsResponse,
} from "../../@types/weathers/globalmaps.type";

const API_KEY = "c33a21799543cf7c08f96007d18f8add";

export class GlobalMapsService {
    async getGlobalMaps(req: getGlobalPrecipitationMapsRequest) {
        const { params } =req;
        const url = new URL(`https://maps.openweathermap.org/maps/2.0/radar/5/5/5`);

        Object.entries({
            ...params,
            appid: API_KEY,
        }).forEach(([key, value]) => {
            url.searchParams.append(key, value.toString());
        });

        const res = await fetch(url);

        const globalData = (await res.json()) as getGlobalPrecipitationMapsResponse;

        return globalData;
    }
}