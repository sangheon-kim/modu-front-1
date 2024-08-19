import {
  getTrendingMoviesRequest,
  getTrendingMoviesResponse,
} from "../../@types/tmdb/trendingMovie.type";

const HOST_URL = "https://api.themoviedb.org";

const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWNmMmJkZDNkODRjYjI2MmFlNDQ2MGI5NjVjOTAzZCIsIm5iZiI6MTcyMzUxOTU2OC40NTA2MSwic3ViIjoiNjZiYWNiNzBhYmNjZjc2YzJhYWFmN2ZhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.tu6UvPZphVAUoZ8ECguiL0XhuMPlTtNCGB9MGAmhZAU";

export class TrendMovieListService {
  /** 트렌드 영화 조회 */
  async getTrendingMovies(req: getTrendingMoviesRequest) {
    const url = new URL(`${HOST_URL}/3/trending/movie/day`);

    for (let [key, value] of Object.entries(req.params)) {
      url.searchParams.append(key, value.toString());
    }

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    const data = (await res.json()) as getTrendingMoviesResponse;

    return data;
  }
}
