import {
    getShortTermForecastRequest,
    getShortTermForecastResponse,
} from "../../@types/PData/shortTermForecast.type";

const API_KEY =
    "esO5cO8yNQ1fvKAMntmNhcleFRzCQRweSMfe1YwDKszpdqn/DmV9cT4H/6HIy/tmy4BIk4j3psfopRmM0/eikQ==";

export class ShortTermForecastService {
    /** 기상청 단기 예보 조회*/

    async getShortTermForecast(req: getShortTermForecastRequest) {
        const { params } = req;
        const url = new URL(
            `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0`
        );

        Object.entries({
            ...params,
            servicekey: API_KEY,
        }).forEach(([key, value]) => {
            url.searchParams.append(key, value.toString());
        });
    }
}
