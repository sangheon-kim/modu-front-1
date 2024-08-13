export type getPopularMoviesRequestParams = {
  /** 성인 컨텐츠 포함 여부 */
  include_adult?: boolean;
  /** 비디오 포함 여부 */
  include_video?: boolean;
  /** 응답 받을 언어 */
  language?: string;
  /** 페이지 번호 */
  page?: number;
  /** 정렬 기준 */
  sort_by?: string;
};

export type getPopularMoviesRequestPath = {};

export type getPopularMoviesRequestBody = {};

export type getPopularMoviesRequest = {
  params: getPopularMoviesRequestParams;
  path?: getPopularMoviesRequestPath;
  body?: getPopularMoviesRequestBody;
};

/** 인기 영화 조회 응답 */
export type getPopularMoviesResponse = {
  /** 페이지 번호 */
  page: number;
  /** 영화 결과 목록 */
  results: Array<{
    /** 성인 컨텐츠 인지 */
    adult: boolean;
    /** 배경이미지 경로 */
    backdrop_path: string;
    /** 장르 ID 목록 */
    genre_ids: Array<number>;
    /** 영화 ID */
    id: number;
    /** 원문 언어 */
    original_language: string;
    /** 원문 제목 */
    original_title: string;
    /** 영화 개요 */
    overview: string;
    /** 인기도 */
    popularity: number;
    /** 포스터 이미지 경로 */
    poster_path: string;
    /** 개봉일 */
    release_date: string;
    /** 제목 */
    title: string;
    /** 비디오 포함 여부 */
    video: boolean;
    /** 평점 */
    vote_average: number;
    /** 투표 수 */
    vote_count: number;
  }>;
  /** 총 페이지 수  */
  total_pages: number;
  /** 총 영화 수 */
  total_results: number;
};
