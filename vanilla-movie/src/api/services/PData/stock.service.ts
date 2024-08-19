// 요청 타입 정리
type getStockRequestParams = {
    /** 공공데이터포털에서 받은 인증키 */
    serviceKey: "3zfq3yDcxo4Aihc0rmj6Z%2FtGXcoPpZlZacVn0tFisfDouPFeLjUecsxIz%2FKed9Zu5CknX3cBis3FeRtrA%2FV2AA%3D%3D"
    /** 한 페이지 결과 수 */
    bumOfRows: number
    /** 페이지 번호 */
    pageNo: number
    /** 구분(xml, json) Default: xml */
    resultType: "json"
}

type getStockRequestPath = {}
type getStockRequestBody = {}


/** 요청 */
type getStockRequest = {
    params: getStockRequestParams
    path?: getStockRequestPath
    body?: getStockRequestBody
}


/** 응답 */
type getStockResponse = {
    
            "numOfRows": number,
            "pageNo": number,
            "totalCount": number,
            "items": {
                "item": [
                    {
                        "basDt": string,
                        "srtnCd": string,
                        "isinCd": string,
                        "itmsNm": string,
                        "mrktCtg": string,
                        "clpr": string,
                        "vs": string,
                        "fltRt": string,
                        "mkp": string,
                        "hipr": string,
                        "lopr": string,
                        "trqu": string,
                        "trPrc": string,
                        "lstgStCnt": string,
                        "mrktTotAmt": string
                    }
                ]
            }
        
}


export class StockService {

    /** 주식 시세 조회 */
    async getStockPrice(req: getStockRequest) {

        const {params} = req;
        const url = new URL(`https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo`)

        Object.entries(params).forEach(([key, value]) => {
            url.searchParams.append(key, value.toString());
        })

        const res = await fetch(url)

        const data = await res.json() as getStockResponse

        return data
    }

}