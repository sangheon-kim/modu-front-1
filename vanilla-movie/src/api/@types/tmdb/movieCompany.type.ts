export type getMovieCompanyDetailsRequest = {
    params?: getMovieCompanyDetailsRequestParams;
    path: getMovieCompanyDetailsRequestPath;
    body?: getMovieCompanyDetailsRequestBody;
}

export type getMovieCompanyDetailsRequestParams = {

}

export type getMovieCompanyDetailsRequestPath = {
    companyId:number;
}

export type getMovieCompanyDetailsRequestBody = {

}

export type getMovieCompanyDetailsResponse = {
    description:string;
    headquarters:string;
    homepage:string;
    id:number;
    logo_path:string;
    name:string;
    origin_country:string;
    parent_company:string|null;
}

