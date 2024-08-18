export type getNorthKoreaInfoRequest = {
    params: getNorthKoreaInfoRequestParams;
    path?: getNorthKoreaInfoRequestPath;
    body?: getNorthKoreaInfoRequestBody;
}

export type getNorthKoreaInfoRequestPath = {

};

export type getNorthKoreaInfoRequestBody = {

};

export type getNorthKoreaInfoRequestParams = {
    pageNo:number;
    numOfRows:number;
    cl:string;
    bgng_ymd:string;
    end_ymd:string;
}

export type getNorthKoreaInfoResponse = {
    pageNo:number;
    resultCode:string;
    totalCount:number;
    numOfRows:number;
    items:Array<gerNorthKoreaInfoResponseData>;
    resultMsg:string;
}

export type gerNorthKoreaInfoResponseData = {
    dwld_url: string | null,
    first_reg_ymd: string,
    url: string,
    sj: string,
    cn: string,
    filenm: string|null,
    cl: string
}