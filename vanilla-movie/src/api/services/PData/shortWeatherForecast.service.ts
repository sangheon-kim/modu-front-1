import { getShrotWeatherForCastRequest, getShortWeatherForCastReponse} from '../../@types/PData/shortWeatherForecast.type';

const HOST_URL = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst`;
const SERVICE_KEY = 'aDol79Cy8w0AGdNQ2AThRpj6o%2F%2Bhp4V7O8xyNMLuY2HkKxjC9kevmVgSGY%2FmQeb1gjx3CWwF%2FLtD0glxVr57XA%3D%3D';

export class ShortWeatherForecast{
   async getShortWeatherForecast(req:getShrotWeatherForCastRequest){
      const { params } = req;
      const url = new URL(`${HOST_URL}`);
      Object.entries({ serviceKey:SERVICE_KEY , ...params  }).forEach(([key,val]) => {
         url.searchParams.append(key,val.toString());
      });
      const response = await fetch(url);
      const data = await response.json() as getShortWeatherForCastReponse;
      return data;
   }
}