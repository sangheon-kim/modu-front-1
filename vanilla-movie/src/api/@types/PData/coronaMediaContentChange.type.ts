export type getCoronaMediaContentChangeRequestParams = {
  /** 페이지 번호 */
  page: number;
  /** 한 페이지 결과 수 */
  perPage: number;
};

export type getCoronaMediaContentChangeRequestPath = {};

export type getCoronaMediaContentChangeRequestBody = {};

export type getCoronaMediaContentChangeRequest = {
  params: getCoronaMediaContentChangeRequestParams;
  path?: getCoronaMediaContentChangeRequestPath;
  body?: getCoronaMediaContentChangeRequestBody;
};

export type getCoronaMediaContentChangeResponseData = {
  /** 사례 수 */
  count: number;
  /** 항목 */
  category: string;
  /** 감소 */
  decrease: string;
  /** 변화 없음 */
  notChange: string;
  /** 증가 */
  increase: string;
};

export type getCoronaMediaContentChangeResponse = {
  /** 현재 페이지 결과 수 */
  currentCount: number;
  /** 데이터 */
  data: Array<getCoronaMediaContentChangeResponseData>;
  /** 일치 데이터 수 */
  matchCount: number;
  /** 페이지 번호 */
  page: number;
  /** 한 페이지 결과 수 */
  perPage: number;
  /** 총 데이터 수 */
  totalCount: number;
};
