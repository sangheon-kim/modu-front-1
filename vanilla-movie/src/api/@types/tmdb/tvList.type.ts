export type getTVListRequestParams={
    /** 페이지번호 */
    page?: number;
    /** 시작날짜 */
   start_date?:Date;
    /**종료날짜 */
    end_date?:Date;
}

export type getTVListRequestPath={}
export type getTVListRequestBody={
    
}
export type getTVListRequest={
    params: getTVListRequestParams;
    path?:getTVListRequestPath;
    body?:getTVListRequestBody;
}

/**변경-티비 목록 조회 응답 */
export type getTVListResponse={
    id:number;
    adult:boolean;
}

