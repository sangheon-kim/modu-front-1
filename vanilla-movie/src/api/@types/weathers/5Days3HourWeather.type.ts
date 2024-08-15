export type get5Days3HourWeatherRequestParams = {
    /** 위도 */
    lat: number;
    /** 경도 */
    lon: number;
};

export type get5Days3HourWeatherRequestPath = {};

export type get5Days3HourWeatherRequestBody = {};

/** 5일; 3시간 일기예보 조회 요청 */

export type get5Days3HourWeatherRequest = {
    params: get5Days3HourWeatherRequestParams;
    path?: get5Days3HourWeatherRequestPath;
    body?: get5Days3HourWeatherRequestBody;
};

/** 5일 / 3시간 일기예보 조회 요청 */
export type get5Days3HourWeatherResponse = {
    /** 코드 */
    cod: number;
    /** 메시지 */
    message: number;
    /** 작업상태 */
    cnt: number;
    /** 리스트 */
    list: {
        /** 날짜 */
        dt: number;
        /** 메인 */
        main: {
            /** 온도 */
            temp: number;
            /** 체감 온도 */
            feels_like: number;
            /** 최저 온도 */
            temp_min: number;
            /** 최고 온도 */
            temp_max: number;
            /** 기압 */
            pressure: number;
            /** 해수면 기압  */
            sea_level: number;
            /** 지면 기압 */
            grnd_level: number;
            /** 습기 */
            humidity: number;
            /** 절대온도 */
            temp_kf: number;
        };
        /** 날씨 */
        weather: {
            /** 아이디 */
            id: number;
            /** 메인 */
            main: string;
            /** 설명 */
            description: string;
            /** 아이콘 */
            icon: string;
        };

        /** 구름 정보 */
        clouds: {
            /** 구름 양 */
            all: number;
        };
        /** 바람 정보 */
        wind: {
            /** 풍속 */
            speed: number;
            /** 풍향 */
            deg: number;
            /** 돌풍 */
            gust: number;
        };
        /** 가시성 */
        visibility: number;
        /** 강수확률 */
        pop: number;
        /** 강수량 */
        rain: {
            // 3h: 0.69
        };
        /** 시스템 정보 */
        sys: {
            pod: string;
        };
        /** 날짜 */
        dt_txt: string;
    };
    /** 도시 */
    city: {
        /** 아이디 */
        id: number;
        /** 도시명 */
        name: string;
        /** 좌표  */
        coord: {
            /** 위도 */
            lat: number;
            /** 경도 */
            lon: number;
        };
        /** 국가 */
        country: string;
        /** 인구 */
        population: number;
        /** 타임존 */
        timezone: number;
        /** 일출 시간 */
        sunrise: number;
        /** 일몰 시간 */
        sunset: number;
    };
};
