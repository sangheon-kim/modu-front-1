import { getRecommendRequest, getRecommendResponse } from '../../@types/tmdb/recommendMovie.type';

const HOST_URL = `https://api.themoviedb.org`;
const MY_TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWI1ZmNjZGExOWZmNzk0MDhmOGEyZjVlOWE4MGE3YyIsIm5iZiI6MTcyMzg4NzMzMC4xMjc1MTksInN1YiI6IjY2YmFiMjUxNTJhMTg3OTBkNTFhZWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n2NMr1GOnDUzEZlacV5TC2j3ZRF7FvZrF-pXykWVHsg`;

export class RecommendMoiveService{
   async getRecommnedMovie(req: getRecommendRequest){
      const { params,path } = req;
      const url = new URL(`${HOST_URL}/3/movie/${path.movie_id}/recommendations`);
      Object.entries(params).forEach(([key,val]) => {
         url.searchParams.append(key,val.toString());
      });
      const response = await fetch(url,{
         headers:{
            Authorization:`Bearer ${MY_TOKEN}`,
            accept: 'application/json'
         }
      });
      const data = await response.json() as getRecommendResponse;
      
      return data.results;
   }
}

