const API_KEY = "c33a21799543cf7c08f96007d18f8add";

type getCurrentWeatherRequestParams = {
  /** 위도 */
  lat: number;
  /** 경도 */
  lon: number;
};

type getCurrentWeatherRequestPath = {};

type getCurrentWeatherRequestBody = {};

/** 현재 날씨 조회 요청 */
type getCurrentWeatherRequest = {
  params: getCurrentWeatherRequestParams;
  path?: getCurrentWeatherRequestPath;
  body?: getCurrentWeatherRequestBody;
};

/** 현재 날씨 조회 응답 */
type getCurrentWeatherResponse = {
  /** 좌표 */
  coord: {
    /** 경도 */
    lon: number;
    /** 위도 */
    lat: number;
  };
  /** 날씨 정보 */
  weather: Array<{
    /** ID */
    id: number;
    /** 날씨 상태 */
    main: string;
    /** 날씨 상태 설명 */
    description: string;
    /** 아이콘 */
    icon: string;
  }>;
  /** 기본 정보 */
  base: string;
  /** 메인 정보 */
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
    /** 습도 */
    humidity: number;
    /** 해수면 기압 */
    sea_level: number;
    /** 지면 기압 */
    grnd_level: number;
  };
  /** 가시성 */
  visibility: number;
  /** 바람 정보 */
  wind: {
    /** 풍속 */
    speed: number;
    /** 풍향 */
    deg: number;
  };
  /** 구름 정보 */
  clouds: {
    /** 구름 양 */
    all: number;
  };
  /** 시간 정보 */
  dt: number;
  /** 시스템 정보 */
  sys: {
    /** 타입 */
    type: number;
    /** ID */
    id: number;
    /** 국가 */
    country: string;
    /** 일출 시간 */
    sunrise: number;
    /** 일몰 시간 */
    sunset: number;
  };
  /** 타임존 */
  timezone: number;
  /** 도시 ID */
  id: number;
  /** 도시 이름 */
  name: string;
  /** 응답 코드 */
  cod: number;
};

export class WeatherService {
  /** 현재 날씨 조회 */
  async getCurrentWeather(req: getCurrentWeatherRequest) {
    const { params } = req;
    const url = new URL(`https://api.openweathermap.org/data/2.5/weather`);

    Object.entries({
      ...params,
      appid: API_KEY,
    }).forEach(([key, value]) => {
      url.searchParams.append(key, value.toString());
    });

    const res = await fetch(url);

    const data = (await res.json()) as getCurrentWeatherResponse;

    return data;
  }
}
