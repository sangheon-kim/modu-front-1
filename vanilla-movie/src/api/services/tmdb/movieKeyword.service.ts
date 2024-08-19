import {
    getMovieKeywordRequest,
    getMovieKeywordResponse,
} from "../../@types/tmdb/movieKeyword.type";

const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDEzYjkzN2JkNDQ3NGJhNjdkYmNhOWMzYjExMDJjNSIsIm5iZiI6MTcyMzUyMDcxMy4wMzcyOTQsInN1YiI6IjY2YmFjM2Q5NmZlMTdmZDRjYzY0YTFmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._nlsUQw2AATS-qo2vsHv5T84dD3WCl1K7QHAVpswSok";

export class MovieKeywordService {
    /** 영화 키워드 조회 */
    async getMovieKeyword(req: getMovieKeywordRequest) {
        const { params } = req;
        const url = new URL(`https://api.themoviedb.org/3/movie/278/keywords`);

        Object.entries({
            ...params,
            appid: API_KEY,
        }).forEach(([key, value]) => {
            url.searchParams.append(key, value.toString());
        });

        const res = await fetch(url.toString(), {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        });

        const data = (await res.json()) as getMovieKeywordResponse;

        return data;
    }
}
