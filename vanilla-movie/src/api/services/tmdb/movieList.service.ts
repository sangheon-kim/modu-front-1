import {
  getPopularMoviesRequest,
  getPopularMoviesResponse,
} from "../../@types/tmdb/movieList.type";

const HOST_URL = "https://api.themoviedb.org";

const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2FiODczNDg0MGM3ZTg0YmRlZjg3ZThjY2EwYWNjYyIsIm5iZiI6MTcyMzUwNjM1MC41OTA3NjUsInN1YiI6IjY2MTBlMTMzYjA5YmRlMDE3ZWJjYmE3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.91Lkyh_Yp1fow-wBetsYkgGhp6Nvw5sm8GnutDrAAE0";

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
