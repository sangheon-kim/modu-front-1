import { getMovieCompanyDetailsRequest, getMovieCompanyDetailsResponse } from "../../@types/tmdb/movieCompany.type";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2FiODczNDg0MGM3ZTg0YmRlZjg3ZThjY2EwYWNjYyIsIm5iZiI6MTcyMzUwNjM1MC41OTA3NjUsInN1YiI6IjY2MTBlMTMzYjA5YmRlMDE3ZWJjYmE3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.91Lkyh_Yp1fow-wBetsYkgGhp6Nvw5sm8GnutDrAAE0";

export class MovieCompanyService {
    async getMovieCompany(req:getMovieCompanyDetailsRequest) {
        const { path } = req;
        const url = new URL(`https://api.themoviedb.org/3/company/${path.companyId}`);
    
    
        const res = await fetch(url, {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          });
          
        const data = await res.json() as getMovieCompanyDetailsResponse;
        return data;
    }

}
