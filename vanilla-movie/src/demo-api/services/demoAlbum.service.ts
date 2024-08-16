import { AjaxInstance } from "../@types/ajaxInstance.type";
import {
  createAlbumRequest,
  createAlbumResponse,
  deleteAlbumRequest,
  getAlbumDetailRequest,
  getAlbumDetailResponse,
  getAlbumsRequest,
  getAlbumsResponse,
  patchAlbumRequest,
  patchAlbumResponse,
  updateAlbumRequest,
  updateAlbumResponse,
} from "../@types/demoAlbum.api.type";

const DEMO_BASE_URL = "https://jsonplaceholder.typicode.com";

const ALBUM_ROUTES = {
  /** 앨범 목록 조회 */
  GET_ALBUMS: (path?: getAlbumsRequest["path"]) =>
    path ? `/albums` : `/albums`,
  /** 앨범 상세 조회 */
  GET_ALBUM_DETAIL: (path?: getAlbumDetailRequest["path"]) =>
    path ? `/albums/${path.albumId}` : `/albums/:albumId`,
  /** 앨범 생성 */
  CREATE_ALBUM: (path?: createAlbumRequest["path"]) =>
    path ? `/albums` : `/albums`,
  /** 앨범 수정 */
  UPDATE_ALBUM: (path?: updateAlbumRequest["path"]) =>
    path ? `/albums/${path.albumId}` : `/albums/:albumId`,
  /** 앨범 부분 수정 */
  PATCH_ALBUM: (path?: patchAlbumRequest["path"]) =>
    path ? `/albums/${path.albumId}` : `/albums/:albumId`,
  /** 앨범 삭제 */
  DELETE_ALBUM: (path?: patchAlbumRequest["path"]) =>
    path ? `/albums/:${path.albumId}` : `/albums/:albumId`,
} as const;

export class DemoAlbumService {
  baseUrl = DEMO_BASE_URL;
  _ajax: AjaxInstance;
  constructor(_ajax: AjaxInstance) {
    this._ajax = _ajax;        //this._ajax 객체를 사용하여 HTTP GET 요청
  }

  /** 앨범 목록 조회 */
  async getAlbums(req: getAlbumsRequest) {  //getAlbumsRequest 타입의 req 객체를 매개변수로 받음.
    const { path, params, body } = req;  //비구조화 할당,  꺼내서 쓴다. req.path 이런식으로 쓰면 좀 귀찮음.
    //req의 path, params, body를 변수로 선언한거라 보면 된다.

    const { data } = await this._ajax.get<getAlbumsResponse>( //get 요청을 보냄.
      this.baseUrl + ALBUM_ROUTES.GET_ALBUMS(path), //기본 API URL에 우리가 정의한 경로를 같이 넣어줌.
      { params, data: body }  //옵션에 body와 쿼리파라미터를 넣음.
    );

    return data;    //그럼 해당 data를 추출하여 반환.
  }

  /** 앨범 상세 조회 */
  async getAlbumDetail(req: getAlbumDetailRequest) {
    const { path, params, body } = req;

    const { data } = await this._ajax.get<getAlbumDetailResponse>(
      this.baseUrl + ALBUM_ROUTES.GET_ALBUM_DETAIL(path),
      { params, data: body }
    );

    return data;
  }

  /** 앨범 생성 */
  async createAlbum(req: createAlbumRequest) {
    const { path, params, body } = req;

    const { data } = await this._ajax.post<createAlbumResponse>(
      this.baseUrl + ALBUM_ROUTES.CREATE_ALBUM(path),
      body,
      { params }
    );

    return data;
  }

  /** 앨범 수정 */
  async updateAlbum(req: updateAlbumRequest) {
    const { path, params, body } = req;

    const { data } = await this._ajax.put<updateAlbumResponse>(
      ALBUM_ROUTES.UPDATE_ALBUM(path),
      body,
      { params }
    );

    return data;
  }

  /** 앨범 부분 수정 */
  async patchAlbum(req: patchAlbumRequest) {
    const { path, params, body } = req;

    const { data } = await this._ajax.patch<patchAlbumResponse>(
      ALBUM_ROUTES.PATCH_ALBUM(path),
      body,
      { params }
    );

    return data;
  }

  /** 앨범 삭제 */
  async deleteAlbum(req: deleteAlbumRequest) {
    const { path, params, body } = req;

    await this._ajax.delete<void>(ALBUM_ROUTES.DELETE_ALBUM(path), {
      params: params,
      data: body,
    });
  }
}
