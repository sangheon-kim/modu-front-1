export type getFineDustRequestParams = {
    serviceKey ?: string;
    returnType ?: string;
    numOfRows ?: number;
    pageNo ?: number;
    year ?: number;
    itemCode ?: string;
};

export type getFineDustRequestPath = {};

export type getFineDustRequestBody = {};

export type getFineDustRequest = {
    params: getFineDustRequestParams;
    path?: getFineDustRequestPath;
    body?: getFineDustRequestBody;
};

export type getFineDustResponse = {
    //응답
    response : Array<{
        //내용
        body : Array<{
            //전체 수 
            totalCount : string;
            //상세 정보 
            items : Array<{
                //미세먼지 농도 해제 값
                clearVal: string;
                //고유 식별 번호
                sn: string;
                //해당 지역 이름
                districtName: string;
                //데이터 날짜
                dataDate: string;
                //미세먼지 경보 발령 값
                issueVal: string;
                //경보 발령 시간
                issueTime: string;
                //경보 해제 날짜
                clearDate: string;
                //경보 발령 날짜
                issueDate: string;
                //이동 지역 이름 
                moveName: string;
                // 경보 해제 시간 
                clearTime: string;
                //경보 종류
                issueGbn: string;
                // 측정 항목 코드
                itemCode: string;
            }>
            // 페이지 번호
            pageNo : number;
            //한 페이지에 표시될 행 수 
            numOfRows : number;
        }>
        //결과
        header : Array<{
            //결과 메시지
            resultMsg : string;
            //결과 코드 
            resultCode : string;
        }>
    }>
}