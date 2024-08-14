export type getMovieKeyworldRequestParamas = {
    /** */
};

export type getMovieKeyworldRequestPath = {};
export type getMovieKeyworldRequestBody = {};

/** 영화 키워드 조회 요청 */
export type getMovieKeyworldRequest = {
    params: getMovieKeyworldRequestParamas;
    path?: getMovieKeyworldRequestPath;
    body?: getMovieKeyworldRequestBody;
};

/** 영화 키워드 조회 응답 */
export type getMovieKeyworldResponse = {
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
