// 요청 타입 정리
type getAirRequestParams = {
    /** 위도 */
    lat: number
    /** 경도 */
    lon: number
    /** API_KEY */
    appid: string
}
type getAirRequestPath = {}
type getAirRequestBody = {}


/** 요청 */
type getAirRequest = {
    params: getAirRequestParams
    path?: getAirRequestPath
    body?: getAirRequestBody
}

/** 응답 */
type getAirResponse = {
    
        "coord": {
            "lon": number,
            "lat": number
        },
        "list": [
            {
                "main": {
                    "aqi": number
                },
                "components": {
                    "co": number,
                    "no": number,
                    "no2": number,
                    "o3": number,
                    "so2": number,
                    "pm2_5": number,
                    "pm10": number,
                    "nh3": number
                },
                "dt": number
            }
        ]    
}


export class AirService {
    /** 공기질 조회 */
    async getCurrentAir(req: getAirRequest) {

        const {params} = req;
        const url = new URL(`http://api.openweathermap.org/data/2.5/air_pollution`)

        Object.entries(params).forEach(([key, value]) => {
            url.searchParams.append(key, value.toString());
        })

        const res = await fetch(url)

        const data = await res.json() as getAirResponse

        return data
    }
}