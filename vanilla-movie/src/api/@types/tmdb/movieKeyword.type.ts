export type getMovieKeywordRequestParamas = {
    /** */
};

export type getMovieKeywordRequestPath = {};
export type getMovieKeywordRequestBody = {};

/** 영화 키워드 조회 요청 */
export type getMovieKeywordRequest = {
    params: getMovieKeywordRequestParamas;
    path?: getMovieKeywordRequestPath;
    body?: getMovieKeywordRequestBody;
};

/** 영화 키워드 조회 응답 */
export type getMovieKeywordResponse = {
    /** 아이디 */
    id: number;
    /** 키워드 */
    keywords: {
        /** 아이디 */
        id: number;
        /** 키워드명 */
        name: string;
    };
};
