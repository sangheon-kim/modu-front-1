export type getNowPlayingTVRequestParams = {
  /** 성인 컨텐츠 포함 여부 */
  include_adult: boolean;
  /** 언어 */
  language?: string;
  /** 페이지 */
  page?: number;
  /** 정렬 기준 */
  sort_by?: string;
  /** 방영중인 TV 프로그램의 최소 방영일 type: string, format: date */
  "air_date.lte"?: string;
  /** 방영중인 TV 프로그램의 최대 방영일 type: string, format: date */
  "air_date.gte"?: string;
};
export type getNowPlayingTVRequestPath = {};
export type getNowPlayingTVRequestBody = {};
export type getNowPlayingTVRequest = {
  params: getNowPlayingTVRequestParams;
  path?: getNowPlayingTVRequestPath;
  body?: getNowPlayingTVRequestBody;
};

export type getNowPlayingTVResponse = {
  /** 페이지 */
  page: number;
  /** 데이터 */
  results: Array<getNowPlayingTVResponseData>;
  /** 총 페이지 수 */
  total_pages: number;
  /** 총 결과 수 */
  total_results: number;
};

export type getNowPlayingTVResponseData = {
  /** 성인 컨텐츠 포함 여부 */
  adult: boolean;
  /** 배경 이미지 */
  backdrop_path: string;
  /** 장르 */
  genre_ids: Array<number>;
  /** 아이디 */
  id: number;
  /** 방영 국가 */
  origin_country: Array<string>;
  /** 방영 언어 */
  original_language: string;
  /** 원래 이름 */
  original_name: string;
  /** 소개 */
  overview: string;
  /** 인기도 */
  popularity: number;
  /** 포스터 이미지 */
  poster_path: string;
  /** 첫 방영일 */
  first_air_date: string;
  /** 제목 */
  name: string;
  /** 평점 */
  vote_average: number;
  /** 투표 수 */
  vote_count: number;
};
