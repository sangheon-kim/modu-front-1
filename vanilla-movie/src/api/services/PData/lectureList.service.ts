import {
    getLectureListRequest,
    getLectureListResponse,
} from "../../@types/PData/lectureList.types";


export class LectureListService {
    //국가평생교육진흥원 K-mook 강좌 목록 조회
    async getLectureList(req : getLectureListRequest) {
        const url = new URL (`https://apis.data.go.kr/B552881/kmooc_v2_0/courseList_v2_0`);

        for(let [key, value] of Object.entries(req.params)) {
            url.searchParams.append(key, decodeURIComponent(value.toString()) );
        }

        const res = await fetch(url);

        const data = (await res.json()) as getLectureListResponse;

        return data;
        
    }
}