import {
  getBucheonSubwayPassengerRequest,
  getBucheonSubwayPassengerResponse,
  getBucheonSubwayPassengerResponseData,
} from "../../@types/PData/buchonSubwayPassenger.type";
import { getCoronaMediaContentChangeRequest } from "../../@types/PData/coronaMediaContentChange.type";
const API_KEY =
  "hS%2F%2FwEcUnmmYBJuPMtmew3qMA7V7egeudnrhcWcP8BU%2BvzP%2FFhGxwmDEy6l%2BZmcffnLORHXhdpo7hWLNZM108g%3D%3D";

export class PDataService {
  /** 미세먼지 경보 발령 현황 조회 */
  async getFineDustAlarm() {}
  /** 경기도 부천시 지하철7호선 부천구간 역별 이용객수 조회 */
  async getBucheonSubwayPassenger(req: getBucheonSubwayPassengerRequest) {
    const { params } = req;
    const url = new URL(
      `https://api.odcloud.kr/api/3038817/v1/uddi:77d5f727-417a-4f07-a1de-bb342426bb38`
    );

    Object.entries({
      ...params,
      serviceKey: decodeURIComponent(API_KEY),
    }).forEach(([key, value]) => {
      url.searchParams.append(key, value.toString());
    });
    const res = await fetch(url);
    const json = await res.json();
    const data = json.data.map((item: any) => {
      const result: getBucheonSubwayPassengerResponseData = {
        kachiwoolSum: item["까치울역 계"],
        kachiwoolRiding: item["까치울역 승차"],
        kachiwoolGetoff: item["까치울역 하차"],
        bucheonCityHallSum: item["부천시청역 계"],
        bucheonCityHallRiding: item["부천시청역 승차"],
        bucheonCityHallGetoff: item["부천시청역 하차"],
        bucheonStadiumSum: item["부천종합운동장역 계"],
        bucheonStadiumRiding: item["부천종합운동장역 승차"],
        bucheonStadiumGetoff: item["부천종합운동장역 하차"],
        sangdongSum: item["상동역 계"],
        sangdongRiding: item["상동역 승차"],
        sangdongGetoff: item["상동역 하차"],
        sinjungdongSum: item["신중동역 계"],
        sinjungdongRiding: item["신중동역 승차"],
        sinjungdongGetoff: item["신중동역 하차"],
        yearMonth: item["연월"],
        chunuiSum: item["춘의역 계"],
        chunuiRiding: item["춘의역 승차"],
        chunuiGetoff: item["춘의역 하차"],
      };
      return result;
    });

    const result: getBucheonSubwayPassengerResponse = {
      currentCount: json.currentCount,
      data: data,
      matchCount: json.matchCount,
      page: json.page,
      perPage: json.perPage,
      totalCount: json.totalCount,
    };
    return result;
  }
  /** 코로나19이후국민의일상변화조사 : 코로나19 이후 미디어콘텐츠 이용량 변화 */
  async getCoronaMediaContentChange(req: getCoronaMediaContentChangeRequest) {
    const { params } = req;
    const url = new URL(
      `https://api.odcloud.kr/api/15077855/v1/uddi:16e53163-2f5b-4a2b-92ae-df884512a310`
    );

    Object.entries({
      ...params,
      serviceKey: decodeURIComponent(API_KEY),
    }).forEach(([key, value]) => {
      url.searchParams.append(key, value.toString());
    });
    const res = await fetch(url);
    const json = await res.json();
    const data = json.data.map((item: any) => {
      const result = {
        count: item["사례수"],
        category: item["항목"],
        decrease: item["감소"],
        notChange: item["변화 없음"],
        increase: item["증가"],
      };
      return result;
    });

    const result = {
      currentCount: json.currentCount,
      data: data,
      matchCount: json.matchCount,
      page: json.page,
      perPage: json.perPage,
      totalCount: json.totalCount,
    };
    return result;
  }
}
