export type getEduVideoRecommendParams = {
  // /** 서비스 키 */
  // serviceKey: string;
  /** 페이지 번호 */
  pageNo: number;
  /** 한 페이지 결과 수 */
  numOfRows: number;
  /** 데이터 유형 */
  dataType: string;
  /** 법정동코드 */
  legaldongCode: string;

};


export type getEduVideoRecommendPath = {};
export type getEduVideoRecommendBody = {};



/** 이륜차 교육영상 추천 조회 요청 */
export type getEduVideoRecommendRequest = {
  params: getEduVideoRecommendParams;
  path?: getEduVideoRecommendPath;
  body?: getEduVideoRecommendBody;
};


/** 이륜차 교육영상 추천 조회 응답 */
export type getEduVideoRecommendResponse = {
  /** 결과코드 */
  resultCode: string;
  /** 결과메시지 */  
  resultMsg: string;
  /** 법정동코드 */
  legaldongCode: string;
  /** 법정동이름 */
  legaldongNm: string;
  /** 영상 URL */
  vidoUrl: string;
  /** 전체 결과 수 */
  totalCount: number;
  /** 한 페이지 결과 수 */
  numOfRows: number;
   /** 페이지번호 */
  pageNo: number;

}
