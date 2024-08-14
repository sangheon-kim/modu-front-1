import {
    getGeocodingRequest,
    getGeocodingResponse,
} from "../../@types/weathers/geocoding.type"; 

const API_KEY = "a4b5f9afd5a553227c9da70b32134942";

export class GeocodingService {
    //지오코딩 조회
    async getGeocoding (req : getGeocodingRequest){
        const { params } = req;
        const url = new URL(`http://api.openweathermap.org/geo/1.0/direct`);
        

        Object.entries({
            ...params,
            appid: API_KEY,
        }).forEach(([key, value]) => {
            url.searchParams.append(key, value.toString());
        });

        const res = await fetch(url);

        const data = (await res.json()) as getGeocodingResponse;

        return data;
    }
}