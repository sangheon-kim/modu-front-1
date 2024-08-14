export type getShortTermForecastRequestParams = {
    /** 페이지 번호 */
    pageNo: number;
    /** 한 페이지 결과 수 */
    numOfRows: number;

    /** 설정 날짜 */
    base_date: number;
    /** 설정 시간 */
    base_time: number;
    /** 예보지점 X 좌표 */
    nx: number;
    /** 예보지점 Y 좌표 */
    ny: number;
};

export type getShortTermForecastRequestPath = {};
export type getShortTermForecastRequestBody = {};

/** 기상청 단기예보 조회 요청 */
export type getShortTermForecastRequest = {
    params: getShortTermForecastRequestParams;
    path?: getShortTermForecastRequestPath;
    body?: getShortTermForecastRequestBody;
};

/** 기상청 단기예보 조회 응답 */
export type getShortTermForecastResponse = {
    /** 응답 */
    response: {
        /** 헤더 */
        header: {
            /** 결과 코드 */
            resultCode: number;
            /** 결과 메세지 */
            resultMsg: string;
        };

        /** 바디 */
        body: {
            /** xml 또는 json */
            dataType: string;
            /** 아이템 */
            items: {
                item: [
                    {
                        /** 발표일자 */
                        baseDate: number;
                        /** 발표시각 */
                        baseTime: number;
                        /** 분류 */
                        category: string;
                        /** 예보지점 X 좌표	 */
                        nx: number;
                        /** 예보지점 Y 좌표	 */
                        ny: number;
                        /** 실황 값 */
                        obsrValue: number;
                    }
                ];
            };
            /** 페이지 번호 */
            pageNo: number;
            /** 한 페이지 결과 수	 */
            numOfRows: number;
            /** 전체 결과 수 */
            totalCount: number;
        };
    };
};
