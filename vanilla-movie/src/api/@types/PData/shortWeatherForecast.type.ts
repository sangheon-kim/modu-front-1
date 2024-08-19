// 요청
export type getShortWeatherForeCastParam = {
   serviceKey?:string; 
   pageNo:number; 
   numOfRows:number; 
   dataType?:string; 
   base_date:number; 
   base_time:number; 
   nx:number; 
   ny:number; 
}
export type getShortWeatherForeCastPath = {}
export type getShortWeatherForeCastBody = {}


export type getShrotWeatherForCastRequest = {
   params :getShortWeatherForeCastParam, 
   path? :getShortWeatherForeCastPath,
   body? :getShortWeatherForeCastBody,
}

export type getShortWeatherForCastReponse = {
   "response": {
      "header": {
         "resultCode": string,
         "resultMsg": string
      },
      "body": {
         "dataType": string,
         "items": {
            "item": Array<{
                  "baseDate": string,
                  "baseTime": string,
                  "category": string,
                  "nx": number,
                  "ny": number,
                  "obsrValue": string
            }>
         },
         "pageNo": number,
         "numOfRows": number,
         "totalCount": number
      }
   }
}