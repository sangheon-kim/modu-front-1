export type getGeocodingRequestParams = {
    //도시이름(ISO 3166 국가 코드)
    q ?: string;
    //API 응답 수
    limit ?: number;
}

export type getGeocodingRequestPath = {};

export type getGeocodingRequestBody = {};

//지오코딩 조회 요청
export type getGeocodingRequest = {
    params: getGeocodingRequestParams;
    path?: getGeocodingRequestPath;
    body?: getGeocodingRequestBody;
};

//지오코딩 조회 응답
export type getGeocodingResponse = {
    //국가 이름 
    name: string;
    //다국어 지원을 위한 데이터
    local_names:  Array<{
        pl: string;
    }>;
    //위도 
    lat: number;
    //경도
    lon: number;
    //해당 위치의 국가 코드 
    country: string;
    //발견된 위치의 상태
    state: string;
}