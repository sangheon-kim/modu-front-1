import {
    getPeopleListRequest,
    getPeopleListResponse,
} from "../../@types/tmdb/peoplelist.type";

const HOST_URL = "https://api.themoviedb.org"; 

const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmQxYmNlYWQ1ZWQ1MjgyMjBmMjgyNGQ3MDFjYjgyMSIsIm5iZiI6MTcyMzUxNjI5OS40OTA4MTksInN1YiI6IjY2YmFjNDUzZjBhYTFiMjUwOGQ3OGNhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v8vDUkSru20ey49W60hmeeYw7ytclLevC8CJJTikfs4";

export class PeopleListService {
    /**리스트 결과 조회 */
    async getPeopleList(req: getPeopleListRequest) {
        const url = new URL(`${HOST_URL}/3/person/changes`);

        //URL 뒤에 ?쿼리 뒤에 붙여줄 파라미터들을 추가
        for(let[key, value] of Object.entries(req.params)) {
            url.searchParams.append(key, value.toString());
        }

        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
            },
        });

        const data = (await res.json()) as getPeopleListResponse;

        return data;
    }
}