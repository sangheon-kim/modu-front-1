export type getSeoulRestaurantRequestParams={
    /**페이지 번호 */
    page:number;
    /**한 페이지 결과 수 */
    perPage:number;
      /**응답 데이터 타입 */
    // returnType: string;
}

export type getSeoulRestaurantRequestpath={}
export type getSeoulRestaurantRequestBody={}

export type getSeoulRestaurantRequest={
    params:getSeoulRestaurantRequestParams;
    path?:getSeoulRestaurantRequestpath;
    body?:getSeoulRestaurantRequestBody;
}
export type getSeoulRestaurantResponse={
    /**페이지 번호 */
     page : number;
    /** 한 페이지 결과 수 */
    perPage : number;
   /**총 데이터 수 */
   totalCount : number;
   /**현재 페이지 데이터 수 */
   currentCount : number;
    /**총 데이터 수*/
   matchCount : number;
   data : Array<{
    //업소명 
    upsoName:  string ;
    //소재지도로명주소
    roadAddr :  string ;
    //소재지지번주소
     locationAddr:  string ;
    //업태명 
    businessName:  string ;
    //영업장면적 
    businessArea:  string 
    }>
}