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
  page: number;
  results: Array<getNowPlayingTVResponseData>;
  total_pages: number;
  total_results: number;
};

export type getNowPlayingTVResponseData = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  origin_country: Array<string>;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
};
