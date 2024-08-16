// 현재 상영중인 TV 목록 요청 
export type getOnTheAirTvsRequestparams = {
  /** 성인 컨텐츠 포함 */
  include_adult?: boolean;
  /** 비디오 포함여부 */
  include_video?: boolean;
  /** 컨텐츠 반환 언어 */
  language?: string;
  /** 페이지 번호 */
  page?: number;
  /** 정렬 기준 */
  sort_by?: string;
 /** 최대 방영일 YYYY-MM-DD */
 'air_date.lte'?: string;
 /** 최소 방영일 YYYY-MM-DD */
 'air_date.gte'?: string;
};

export type getOnTheAirTvsRequestPath = {};

export type getOnTheAirTvsRequestBody = {};

export type getOnTheAirTvsRequest = {
 params: getOnTheAirTvsRequestparams;
 path?: getOnTheAirTvsRequestPath;
 body?: getOnTheAirTvsRequestBody;
}



// 현재 상영중인 TV 목록 응답
export type getOnTheAirTvsResponse = {
  /** 페이지 번호 */
 page: number;
  /** 현재 상영중인 TV 목록 결과 */
 result: Array<{
   /** 성인 컨텐츠 포함 */
 adult: boolean;
  /** 배경 이미지 경로 */
 backdrop_path: string;
   /** 장르 아이디 목록 */
 genre_ids: Array<number>;
 /** TV 아이디 */
 id: number;
 /** 원작 국가 목록 */
 origin_country: Array<string>;
 /** 원작 언어 */  
 original_language: string;
 /** 원작 제목 */    
 original_name: string;
 /** TV 개요 */    
 overview: string;
 /** 인기도 */    
 popularity: number;
 /** 포스터 이미지 경로 */    
 poster_path: string;
 /** 개봉날짜 */    
 first_air_date: string;
 /** 제목 */    
 name: string;
 /** 평점 */    
 vote_average: number;
 /** 투표 수 */      
 vote_count: number;
 }>;
 /** 총 페이지 수 */
 total_pages: number;
   /** 총 티비 프로그램 수 */
 total_results: number;
}


