import { getOnTheAirTvsRequest, getOnTheAirTvsResponse } from "../../@types/tmdb/tvList.type";

const HOST_URL = "https://api.themoviedb.org";

const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2FiODczNDg0MGM3ZTg0YmRlZjg3ZThjY2EwYWNjYyIsIm5iZiI6MTcyMzUwNjM1MC41OTA3NjUsInN1YiI6IjY2MTBlMTMzYjA5YmRlMDE3ZWJjYmE3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.91Lkyh_Yp1fow-wBetsYkgGhp6Nvw5sm8GnutDrAAE0";

export class TVListService {
  async getChangeTV(req: getOnTheAirTvsRequest) {
    const url = new URL(`${HOST_URL}/3/tv/changes`);

    for (let [key, value] of Object.entries(req.params)) {
      url.searchParams.append(key, value.toString());
    }
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    const data = (await res.json()) as getOnTheAirTvsResponse;
    return data;
  }
}
