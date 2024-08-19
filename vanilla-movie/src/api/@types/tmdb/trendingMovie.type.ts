export type getTrendingMoviesRequestParams = {
  /** 응답 받을 언어 */
  language?: string;
};

export type getTrendingMoviesRequestPath = {};

export type getTrendingMoviesRequestBody = {};

export type getTrendingMoviesRequest = {
  params: getTrendingMoviesRequestParams;
  path?: getTrendingMoviesRequestPath;
  body?: getTrendingMoviesRequestBody;
};

/** 트렌드 영화 조회 응답 */
export type getTrendingMoviesResponse = {
  /** 페이지 번호 */
  page: number;
  /** 영화 결과 목록 */
  results: Array<{
    /** 배경이미지 경로 */
    backdrop_path: string;
    /** 영화 ID */
    id: number;
    /** 제목 */
    title: string;
    /** 원문 제목 */
    original_title: string;
    /** 영화 개요 */
    overview: string;
    /** 포스터 이미지 경로 */
    poster_path: string;
    /** 영상 형식 */
    media_type: string;
    /** 성인 컨텐츠 인지 */
    adult: boolean;
    /** 원문 언어 */
    original_language: string;
    /** 장르 ID 목록 */
    genre_ids: Array<number>;
    /** 인기도 */
    popularity: number;
    /** 개봉일 */
    release_date: string;
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
