// 한국산업안전보건공단_이륜차 교육영상 추천 조회서비스

import { getEduVideoRecommendRequest, getEduVideoRecommendResponse }
from "../../@types/PData/PData.type";


export const SERVICE_KEY = "rJYMbQZvYfoNhc3t%2FEjn50sPwhJ1IHgvcueMkCLlGqVCvdvUyizCzSvlFfDHRmgdyq4LGmyLQs75O4ZCfo%2BLBg%3D%3D";



export class PDataService {

  async getEduVideoRecommend(req: getEduVideoRecommendRequest) {
    const { params } = req;
    const url = new URL(`https://apis.data.go.kr/B552468/edcVidoRecomend/getEdcVidoRecomend`)

    Object.entries({ 
      ...params,
      serviceKey: SERVICE_KEY, 
    }).forEach(([key, value]) => {
      url.searchParams.append(key, value.toString());
    });

    const res = await fetch(url);
    const data = (await res.json()) as getEduVideoRecommendResponse;

    return data;
  
  }

}  

