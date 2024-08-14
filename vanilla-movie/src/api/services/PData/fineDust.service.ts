import {
  getFineDustRequest,
  getFineDustResponse,
} from "../../@types/PData/fineDust.type";

const serviceKey = "dF9O57IdEh2CptfVSKijKH8TvxgT%2FFSMnPqdoz259FC0uwxqlqjG89PLvYd%2BdJx3ba5pXAwraFzhN3xFg8erfg%3D%3D";

export class FineDustService {
  /** 미세먼지 경보 발령 현황 조회 */
  async getFineDustAlarm(req: getFineDustRequest) {
    const url = new URL(`http://apis.data.go.kr/B552584/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo`);

    for(let [key, value] of Object.entries(req.params)) {
      url.searchParams.append(key, decodeURIComponent(value.toString()) );
  }

  const res = await fetch(url);

    const data = (await res.json()) as getFineDustResponse;

    return data;
  }
}
