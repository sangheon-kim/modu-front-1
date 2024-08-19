export type getDisasterMsgRequestParams = {
  /** 공공데이터포털에서 받은 인증키 */
  service_key?: string;
  /** 페이지 번호 */
  page_no?: number;
  /** 한 페이지 결과 수 */
  num_of_rows?: number;
  /** 호출문서 형식 */
  type?: string;
};

export type getDisasterMsgRequestPath = {};

export type getDisasterMsgRequestBody = {};

export type getDisasterMsgRequest = {
  params: getDisasterMsgRequestParams;
  path?: getDisasterMsgRequestPath;
  body?: getDisasterMsgRequestBody;
};

/** 재난문자 발령 현황 조회 응답 */
export type getDisasterMsgResponse = {
  /** 발령 시간 */
  create_date: number;
  /** 지역 아이디 */
  location_id: number;
  /** 지역 명  */
  location_name: string;
  /** 발령 순서 */
  md101_sn: number;
  /** 문자 내용 */
  msg: string;
  /** 발령 기관명 */
  send_platform: string;
};
