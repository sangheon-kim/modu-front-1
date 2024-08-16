import {
    getEmergencySheltersRequest,
    getEmergencySheltersResponse,
} from "../../@types/PData/shelters.type";

const API_KEY = "c1GRI32PSEbwtPCAAw/PwmQdn60DjcAFH9OwiC4xKtMubflQatfS8O6tdDai6jPOwQBsinM6IEmRDy42r4XKiQ==";

export class SheltersService {
  /** 대피소 조회 */
  async getEmergencyShelters(req: getEmergencySheltersRequest) {
    const { params } = req;
    const url = new URL(`https://apis.data.go.kr/1741000/TsunamiShelter4/getTsunamiShelter4List`);

    Object.entries({
      ...params,
      ServiceKey: decodeURIComponent(API_KEY),
    }).forEach(([key, value]) => {
      url.searchParams.append(key, value.toString());
    });

    const res = await fetch(url);

    const shelterData = (await res.json()) as getEmergencySheltersResponse;

    return shelterData;
  }
}
