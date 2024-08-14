export type getLectureListRequestParams = {
    serviceKey ?: string;
};

export type getLectureListRequestPath = {};

export type getLectureListRequestBody = {};

export type getLectureListRequest = {
    params: getLectureListRequestParams;
    path?: getLectureListRequestPath;
    body?: getLectureListRequestBody;
};

export type getLectureListResponse = {
    //머리말
    header: Array <{
        //페이지 번호
        page: number;
        //크기
        size: number;
        //전체 수
        totalCount: number;
    }>
    //결과 코드
    resultCode: string;
    //결과 메시지
    resultMsg: string;
    //전체 수
    totalCount: number;
    //상세 정보 
    items: Array<{
        //ID
        id: string;
        //약칭
        shortname: string;
        //이름
        name: string;
        //URL
        url: string;
        //이미지 경로
        course_image: string;
        //출판사
        org: string;
        //출판사 이름 
        org_name: string;
        //등록 시작 날짜
        enrollment_start: string;
        //등록 종료 날짜 
        enrollment_end: string;
        //수업 시작 날짜
        study_start: string;
        //수업 종료 날짜 
        study_end: string;
        //교수
        professor: string;
        //공공 yes or no
        public_yn: string;
    }>
}