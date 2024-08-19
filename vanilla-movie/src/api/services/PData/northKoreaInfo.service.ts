import { getNorthKoreaInfoRequest, getNorthKoreaInfoResponse } from "../../@types/PData/northKoreaInfo.type";

const API_KEY = "DAgue7aA%2FVAROfZY4%2Bxmaouv8O1x%2B2cy8hmwRuWIdOQBsUvF2w2lYehIxgdX1%2BHrG1NfaqAWgWbpckhrocJeDQ%3D%3D";

export class NorthKoreaInfoService {
    async getInfo(req:getNorthKoreaInfoRequest) {
        const { params } = req;
        const url = new URL("http://apis.data.go.kr/1250000/trend/getTrend");
    
        Object.entries({
            ...params,
            serviceKey:decodeURIComponent(API_KEY)
        }).forEach(([key, value]) => {
            url.searchParams.append(key, value.toString());
        });
    
        const res = await fetch(url);
        const data = await res.json() as getNorthKoreaInfoResponse;
        return data;
    }

}

