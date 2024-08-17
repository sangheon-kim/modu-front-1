export type getDailyForecastRequestParams={
    lat:number;
    lon:number;
    cnt:number;
}
export type getDailyForecastRequestPath={};
export type getDailyForecastRequestBody={};

export type getDailyForecastRequest={
    params:getDailyForecastRequestParams;
    path?:getDailyForecastRequestPath;
    body?:getDailyForecastRequestBody;
}

/**일상 예측 16일 응답 */
/**정규표현식: \b\d+(\.\d+)?\b */

export type getDailyForecastResponse={
    /**도시 */
    city : {
         /** 도시 ID */
         id : number;
          /**도시명*/
         name :  string;
           /** 좌표 */
         coord : {
            /** 경도 */
           lon : number;
            /** 위도 */
           lat : number;
        };
        /*국가*/
         country :  string;
         /**인구 */
         population : number;
         /**시간대,타임존 */
         timezone : number;
      }; 
      /**응답 코드 */
       cod :  number ;
       /**메시지 */
       message : number;
       /**API 응답에 반환된 일수 */
       cnt : number;
       /** 정보*/
       list : Array<{
        /**예측된 데이터 시간 */
           dt : number;
           /**일출시간 */
           sunrise : number;
              /**일몰시간 */
           sunset : number;
           /*온도*/
           temp : {
            /**현지시간 12시 기온 */
             day : number;
            /**최저기온 */
             min : number;
            /**최고기온*/
             max : number;
               /**현지시간 자정 기온 */
             night : number;
            /**현지시간 오후 6시 기온 */
             eve : number;
            /**현지시간 오전 6시 기온 */
             morn : number
          };
          /** 체감 기온 */
           feels_like : {
            /**현지시간 12시 기온 */
             day : number;
            /**현지시간 자정 기온 */
             night : number;
            /**현지시간 오후 6시 기온 */
             eve : number;
            /**현지시간 오전 6시 기온 */
             morn : number
          };
             /** 기압 */
           pressure : number;
           /** 습도 */
           humidity : number;
           /**날씨 정보 */
           weather :Array<{
                /**기상 조건 ID */
                id : number;
                /**날씨 매개변수 그룹 */
                main : string ;
                /**그룹 내 날씨 상태 */
                description : string ;
                /**날씨에 맞는 아이콘 */
                icon :  number;
           }>;
            /**최대 풍속 */
           speed : number;
            /** 풍향 */
           deg : number;
           /**돌풍 */
           gust : number;
           /*구름*/
           clouds : number;
           /**강수 확률*/
           pop : number;
           /**비 */
           rain : number
    }>
}