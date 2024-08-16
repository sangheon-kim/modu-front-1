import { getCoronaMediaContentChangeRequest } from "../../@types/PData/coronaMediaContentChange.type";

const API_KEY =
  "hS%2F%2FwEcUnmmYBJuPMtmew3qMA7V7egeudnrhcWcP8BU%2BvzP%2FFhGxwmDEy6l%2BZmcffnLORHXhdpo7hWLNZM108g%3D%3D";

export class CoronaMediaContentChangeService {
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
