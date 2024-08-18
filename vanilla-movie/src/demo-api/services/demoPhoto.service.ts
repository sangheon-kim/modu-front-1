import { AjaxInstance } from '../@types/ajaxInstance.type';
import {
  getPhotosRequest,
  getPhotosResponse,
  getPhotoDetailRequest,
  getPhotoDetailResponse,
  createPhotoRequest,
  createPhotoResponse,
  updatePhotoRequest,
  updatePhotoResponse,
  patchPhotoRequest,
  patchPhotoResponse,
  deletePhotoRequest,
  deletePhotoResponse
} from '../@types/demoPhoto.api.type';


const DEMO_BASE_URL = 'https://jsonplaceholder.typicode.com';

// REQUEST
const PHOTO_ROUTES = {
  /** 사진 목록 조회 */
  GET_PHOTOS: (path: getPhotosRequest['path']) => (path ? `/photos` : `/photos`),
  /** 사진 상세 조회 */
  GET_PHOTOS_DETAIL: (path: getPhotoDetailRequest['path']) => 
    path ? `/photos/${path.photoId}` : `/photos/:photoID`,
  /** 사진 생성 */
  CREATE_PHOTO: (path: createPhotoRequest['path']) =>
    path ? `/photos` : `/photos`,
  /** 사진 수정 */
  UPDATE_PHOTO: (path: updatePhotoRequest['path']) =>
    path ? `/photos/${path.photoId}` : `/photos/:photoID`,
  /** 사진 부분 수정 */
  PATCH_PHOTO: (path: patchPhotoRequest['path']) => 
    path ? `/photos/${path.photoId}` : `/photos/:photoID`,
  /** 사진 삭제 */
  DELETE_PHOTO: (path: deletePhotoRequest['path']) =>
    path? `/photos/${path.photoId}` : `/photos/photoID`
} as const;


export class DemoPhotoService {
  baseUrl = DEMO_BASE_URL;
  _ajax: AjaxInstance;
  constructor(_ajax: AjaxInstance) {
    this._ajax = _ajax;
  }

  /** 사진 목록 조회 */
  async getPhotos(req: getPhotosRequest) {
    const { path, params, body } = req;
    const { data } = await this._ajax.get<getPhotosResponse>(
      this.baseUrl + PHOTO_ROUTES.GET_PHOTOS(path),
      {  params, data: body }
    );

    return data;
  }

  /** 사진 상세 조회 */
  async getPhotoDetail(req: getPhotoDetailRequest) {
    const { path, params, body } = req;
    const { data } = await this._ajax.get<getPhotoDetailResponse>(
      this.baseUrl + PHOTO_ROUTES.GET_PHOTOS_DETAIL(path),
      { params, data: body }
    );

    return data;
  }

  /** 사진 생성 */
  async createPhoto(req: createPhotoRequest) {
    const { path, params, body } = req;
    const { data } = await this._ajax.post<createPhotoResponse>(
      this.baseUrl + PHOTO_ROUTES.CREATE_PHOTO(path),
      body,
      { params }
    );
    return data;
  }

  /** 사진 수정 */
  async updatePhoto(req: updatePhotoRequest) {
    const { path, params, body } = req;
    const { data } = await this._ajax.put<updatePhotoResponse>(
      this.baseUrl + PHOTO_ROUTES.UPDATE_PHOTO(path),
      body,
      { params }
    );
    return data;
  }

  /** 사진 부분 수정 */
  async patchPhoto(req: patchPhotoRequest) {
    const { path, params, body } = req;
    const { data } = await this._ajax.patch<patchPhotoResponse>(
      this.baseUrl + PHOTO_ROUTES.PATCH_PHOTO(path),
      body,
      { params }
    );
    return data;
  }
  
  /** 사진 삭제 */
  async deletePhoto(req: deletePhotoRequest) {
    const { path, params, body } = req;
    await this._ajax.delete<deletePhotoResponse>(
      this.baseUrl + PHOTO_ROUTES.DELETE_PHOTO(path),
      { params, data: body }
    );
  }
}