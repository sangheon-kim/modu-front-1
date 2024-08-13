const HOST_URL = "https://api.themoviedb.org";

const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2FiODczNDg0MGM3ZTg0YmRlZjg3ZThjY2EwYWNjYyIsIm5iZiI6MTcyMzUwNjM1MC41OTA3NjUsInN1YiI6IjY2MTBlMTMzYjA5YmRlMDE3ZWJjYmE3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.91Lkyh_Yp1fow-wBetsYkgGhp6Nvw5sm8GnutDrAAE0";

type getPopularMoviesRequestParams = {
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

type getPopularMoviesRequestPath = {};

type getPopularMoviesRequestBody = {};

type getPopularMoviesRequest = {
  params: getPopularMoviesRequestParams;
  path?: getPopularMoviesRequestPath;
  body?: getPopularMoviesRequestBody;
};

/** 인기 영화 조회 응답 */
type getPopularMoviesResponse = {
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

export class MovieListService {
  /** 인기 영화 조회 */
  async getPopularMovies(req: getPopularMoviesRequest) {
    const url = new URL(`${HOST_URL}/3/discover/movie`);

    // URL 뒤에 ?쿼리 뒤에 붙여줄 파라미터들을 추가
    for (let [key, value] of Object.entries(req.params)) {
      url.searchParams.append(key, value.toString());
    }

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    const data = (await res.json()) as getPopularMoviesResponse;

    return data;
  }
}
