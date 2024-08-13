export type getBucheonSubwayPassengerRequestParams = {
  /**페이지 번호 */
  page: number;
  /**한 페이지 결과 수 */
  perPage: number;
  /**응답 데이터 타입 */
  returnType: string;
};

export type getBucheonSubwayPassengerRequestPath = {};

export type getBucheonSubwayPassengerRequestBody = {};

export type getBucheonSubwayPassengerRequest = {
  params: getBucheonSubwayPassengerRequestParams;
  path?: getBucheonSubwayPassengerRequestPath;
  body?: getBucheonSubwayPassengerRequestBody;
};

export type getBucheonSubwayPassengerResponseData = {
  /** 까치울역 계 */
  kachiwoolSum: number;
  /** 까치울역 승차 */
  kachiwoolRiding: number;
  /** 까치울역 하차 */
  kachiwoolGetoff: number;
  /** 부천시청역 계 */
  bucheonCityHallSum: number;
  /** 부천시청역 승차 */
  bucheonCityHallRiding: number;
  /** 부천시청역 하차 */
  bucheonCityHallGetoff: number;
  /** 부천종합운동장역 계 */
  bucheonStadiumSum: number;
  /** 부천종합운동장역 승차 */
  bucheonStadiumRiding: number;
  /** 부천종합운동장역 하차 */
  bucheonStadiumGetoff: number;
  /** 상동역 계 */
  sangdongSum: number;
  /** 상동역 승차 */
  sangdongRiding: number;
  /** 상동역 하차 */
  sangdongGetoff: number;
  /** 신중동역 계 */
  sinjungdongSum: number;
  /** 신중동역 승차 */
  sinjungdongRiding: number;
  /** 신중동역 하차 */
  sinjungdongGetoff: number;
  /** 연월 */
  yearMonth: string;
  /** 춘의역 계 */
  chunuiSum: number;
  /** 춘의역 승차 */
  chunuiRiding: number;
  /** 춘의역 하차 */
  chunuiGetoff: number;
};

export type getBucheonSubwayPassengerResponse = {
  /** 현재 페이지 데이터 수 */
  currentCount: number;
  /** 데이터 */
  data: Array<getBucheonSubwayPassengerResponseData>;
  /** 총 데이터 수 */
  matchCount: number;
  /** 페이지 번호 */
  page: number;
  /** 한 페이지 결과 수 */
  perPage: number;
  /** 전체 데이터 수 */
  totalCount: number;
};
