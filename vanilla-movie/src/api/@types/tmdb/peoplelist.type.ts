export type getPeopleListRequestParams = {
    /** 페이지 */
    page:number;
    /** 종료날짜 */    
    end_date?:string;
    /** 시작날짜 */    
    start_date?:string;
};

export type getPeopleListRequestPath = {};

export type getPeopleListRequestBody = {};

/** 배우/감독 리스트 요청 */
export type getPeopleListRequest = {
    params:getPeopleListRequestParams;
    path?:getPeopleListRequestPath;
    body?:getPeopleListRequestBody;
};


/** 배우/감독 리스트 응답 */
export type getPeopleListResponse = {
    /** 리스트 결과 목록 */
    result: Array<{
        /** 사람 ID */
        id:number;
        /** 성 */
        adult:boolean | null; 
    }>;
    /**  */
    page: number;
    total_pages:number;
    total_result:number;
};

