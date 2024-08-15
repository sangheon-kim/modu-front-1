import { getSeoulRestaurantRequest ,getSeoulRestaurantResponse} from "../../@types/PData/seoulRestaurant.type";

const API_KEY = "hMojIvvHF%2B09wM6EWKKRIKhgicN%2FZohDT9YErSSMrpz76XeTM0XzQZi7x6L2bE1qa%2Bw24QV232F0GrcA2aSiZQ%3D%3D"
export class PDataService {
  /** 미세먼지 경보 발령 현황 조회 */
  async getFineDustAlarm() {}
    /** 서울특별시 서초구 음식점 조회 */
  async getSeoulRestaurant(req:getSeoulRestaurantRequest){
    const{params} =req;
    const url=new URL(`https://api.odcloud.kr/api/3053840/v1/uddi:9cb85e53-3592-4a8d-9b07-eec77edbc8c2`)

    Object.entries({
      ...params,
      serviceKey: decodeURIComponent(API_KEY),
    }).forEach(([key, value]) => {
      url.searchParams.append(key, value.toString());
    });

    const res=await fetch(url);
    const json = await res.json();
    //console.log('json',json)
    const data = json.data.map((ele:any) => {
       return{
        //업소명
        upsoName:  ele["업소명"],
        //소재지도로명주소
        roadAddr :  ele["소재지도로명주소"],
        //소재지지번주소
        locationAddr:  ele["소재지지번주소"],
        //업태명 
        businessName:  ele["업태명"],
        //영업장면적 
         businessArea: ele["영업장면적 "],
       }
       
    });
    const response:getSeoulRestaurantResponse={
      page:json.page,
      perPage:json.perPage,
      totalCount:json.totalCount,
      matchCount:json.matchCount,
      currentCount:json.currentCount,
      data:data,

    };
    return response;
  }
}
