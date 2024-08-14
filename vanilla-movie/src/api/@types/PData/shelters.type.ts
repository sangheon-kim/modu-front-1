export type getEmergencySheltersRequestParams = {
    /** 페이지 번호 */
    pageNo: number;
    /** 한 페이지 결과 수*/
    numOfRows: number;
    /** 호출문서 형식*/
    type:string;
};

export type getEmergencySheltersRequestPath = {};

export type getEmergencySheltersRequestBody = {};

/** 긴급대피소 조회 요청 */
export type getEmergencySheltersRequest = {
  params: getEmergencySheltersRequestParams;
  path?: getEmergencySheltersRequestPath;
  body?: getEmergencySheltersRequestBody;
};

/** 긴급대피소 조회 응답 */
export type getEmergencySheltersResponse = {
    /** 헤더 정보 */
    head: [{  
        /** 총 페이지 수*/
        totalCount: number;
        /** 한 페이지 결과 수*/
        {numOfRows: number; 
        /** 페이지 번호 */
        pageNo: number;
        /** 호출문서 형식*/
        type: string;
        };
        /** 결과 */
        RESULT: {
            /** 결과 코드 */
            resultCode: string;
            /** 결과 메세지 */
            resultMsg: string;
        };
    }];
    
    /** */
    row: Array<{
        /** ID */
        id: number;
        /** 시도명 */
        sido_name: string;
        /** 시군구명 */
        sigungu_name: string;
        /** 지구명 */
        remarks: string;
        /** 피난처명*/
        shel_nm: string;
        /** 주소 */
        address: string;
        /** 경도 */
        lon: number;
        /** 위도 */
        lat: number;
        /** */
        shel_av: number;
        /** 길이 */
        lenth: number;
        /** 피난처 타입*/
        shel_div_type: string;
        /** 등급*/
        seismic: string;
        /** 높이 */
        height: number;
        /** 연락처 */
        tel: string;
        /** 새주소명*/
        new_address: string;
        /** 담당관청*/
        manage_gov_nm: string;
    }>;
};