import {
  getDisasterMsgRequest,
  getDisasterMsgResponse,
} from "../../@types/PData/DisasterMsg.type";

const HOST_URL = "https://apis.data.go.kr";

export class DisasterMsgservice {
  /** 재난문자 발령 현황 조회 */
  async getDisasterMsg(req: getDisasterMsgRequest) {
    const url = new URL(`${HOST_URL}/1741000/DisasterMsg5/getDisasterMsg5List`);

    // URL 뒤에 ?쿼리 뒤에 붙여줄 파라미터들을 추가
    for (let [key, value] of Object.entries(req.params)) {
      url.searchParams.append(key, value.toString());
    }

    const res = await fetch(url);

    const data = (await res.json()) as getDisasterMsgResponse;

    return data;
  }
}
