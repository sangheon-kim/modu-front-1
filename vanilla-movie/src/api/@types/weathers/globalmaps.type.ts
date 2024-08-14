export type getGlobalPrecipitationMapsRequestParams = {
    /** Unix time*/
    tm: number;
  };
  
  export type getGlobalPrecipitationMapsRequestPath = {};
  
  export type getGlobalPrecipitationMapsRequestBody = {};
  
  /** 세계 강수량 지도 조회 요청 */
  export type getGlobalPrecipitationMapsRequest = {
    params: getGlobalPrecipitationMapsRequestParams;
    path?: getGlobalPrecipitationMapsRequestPath;
    body?: getGlobalPrecipitationMapsRequestBody;
  };

  /** 세계 강수량 지도 조회 응답 */
  export type getGlobalPrecipitationMapsResponse = {}; //인증키오류로 응답값 확인 불가