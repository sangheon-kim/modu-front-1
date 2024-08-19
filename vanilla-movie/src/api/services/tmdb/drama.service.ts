const TOKEN = "52d30e5f6272a43e1dd5ed030a5267f1"


// 요청 타입 정리
type getDramaRequestParams = {
    /** 성인 콘텐츠 포함 여부 */
    include_adule?: boolean,
    /** 페이지 번호 */
    page?: number,
    /** 정렬 방식 */
    sort_by?: string,
    /** 출력 언어 */
    language?: "ko-KR",
    /** API_KEY */
    api_key?: "52d30e5f6272a43e1dd5ed030a5267f1"
}

type getDramaRequestPath = {}
type getDramaRequestBody = {}


/** 요청 */
type getDramaRequest = {
    params: getDramaRequestParams
    path?: getDramaRequestPath
    body?: getDramaRequestBody
}


/** 응답 */
type getDramarResponse = {
            "adult": boolean,
            "backdrop_path": string,
            "genre_ids": [
                number
            ],
            "id": number,
            "origin_country": [
                string
            ],
            "original_language": string,
            "original_name": string,
            "overview": string,
            "popularity": number,
            "poster_path": string,
            "first_air_date": string,
            "name": string,
            "vote_average": number,
            "vote_count": number
}


export class DramaListService {
    
    /** 인기 드라마 조회 */
    async getPopularMovies(req: getDramaRequest) {

        const url = new URL(`https://api.themoviedb.org/3/discover/tv`)

        Object.entries(req.params).forEach(([key,value]) => {
            url.searchParams.append(key, value.toString())
        })

        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        })

        const data = await res.json() as getDramarResponse

        return data;

        console.log(data)
    }
}