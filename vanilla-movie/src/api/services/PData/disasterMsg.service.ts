import {
  getDisasterMsgRequest,
  getDisasterMsgResponse,
} from "../../@types/PData/DisasterMsg.type";

const HOST_URL = "https://apis.data.go.kr";

const SERVICE_KEY =
  "7iOD88NPaECXSUzHx5OXvznXtISYyYyk7OL9ZsdXTzL8FIvMXxIPjrxuJXVSDcDO4EqnhLIBVd7paXt9doQ63w%3D%3D";

export class DisasterMsgservice {
  /** 재난문자 발령 현황 조회 */
  async getDisasterMsg(req: getDisasterMsgRequest) {
    const { params } = req;
    const url = new URL(`${HOST_URL}/1741000/DisasterMsg5/getDisasterMsg5List`);

    // for (let [key, value] of Object.entries(req.params)) {
    //   url.searchParams.append(key, value.toString());
    // }

    Object.entries({
      service_key: SERVICE_KEY,
      ...params,
    }).forEach(([key, value]) => {
      url.searchParams.append(key, value.toString());
    });

    const res = await fetch(url);

    const data = (await res.json()) as getDisasterMsgResponse;

    return data;
  }
}
