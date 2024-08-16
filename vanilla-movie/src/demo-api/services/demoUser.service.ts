import { AjaxInstance } from "../@types/ajaxInstance.type";
import {
  getUsersRequest,
  getUsersResponse,
  getUserDetailRequest,
  getUserDetailResponse,
  createUserRequest,
  createUserResponse,
  updateUserRequest,
  updateUserResponse,
  patchUserRequest,
  patchUserResponse,
  deleteUserRequest,
  deleteUserResponse,

} from "../@types/demoUser.api.type";

const DEMO_BASE_URL = "https://jsonplaceholder.typicode.com";

const USERS_ROUTES = {
  /** 사용자 목록 조회 */
  GET_USERS: (path: getUsersRequest["path"]) => (path ? `/users` : `/users`),
  /** 사용자 상세 조회 */
  GET_USER_DETAIL: (path: getUserDetailRequest["path"]) =>
    path ? `/users/${path.userId}` : `/users/:userId`,
  /** 사용자 생성 */
  CREATE_USER: (path: createUserRequest["path"]) =>
    path ? `/users` : `/users`,
  /** 사용자 수정 */
  UPDATE_USER: (path: updateUserRequest["path"]) =>
    path ? `/users/${path.userId}` : `/users/:userId`,
  /** 사용자 부분 수정 */
  PATCH_USER: (path: patchUserRequest["path"]) =>
    path ? `/users/${path.userId}` : `/users/:userId`,
  /** 사용자 삭제 */
  DELETE_USER: (path: deleteUserRequest["path"]) =>
    path ? `/users/${path.userId}` : `/users/:userId`,
} as const;

export class DemoUserService {
  baseUrl = DEMO_BASE_URL;
  _ajax: AjaxInstance;
  constructor(_ajax: AjaxInstance) {
    this._ajax = _ajax;
  }

  /** 사용자 목록 조회 */
  async getUsers(req: getUsersRequest) {
    const { path, params, body } = req;

    const { data } = await this._ajax.get<getUsersResponse>(
      this.baseUrl + USERS_ROUTES.GET_USERS(path),
      { params, data: body }
    );

    return data;
  }

  /** 사용자 상세 조회 */
  async getUserDetail(req: getUserDetailRequest) {
    const { path, params, body } = req;

    const { data } = await this._ajax.get<getUserDetailResponse>(
      this.baseUrl + USERS_ROUTES.GET_USER_DETAIL(path),
      { params, data: body }
    );

    return data;
  }

  /** 사용자 생성 */
  async createUser(req: createUserRequest) {
    const { path, params, body } = req;

    const { data } = await this._ajax.post<createUserResponse>(
      this.baseUrl + USERS_ROUTES.CREATE_USER(path),
      body,
      { params }
    );

    return data;
  }

  /** 사용자 수정 */
  async updateUser(req: updateUserRequest) {
    const { path, params, body } = req;

    const { data } = await this._ajax.put<updateUserResponse>(
      this.baseUrl + USERS_ROUTES.UPDATE_USER(path),
      body,
      { params }
    );

    return data;
  }

  /** 사용자 부분 수정 */
  async patchUser(req: patchUserRequest) {
    const { path, params, body } = req;

    const { data } = await this._ajax.patch<patchUserResponse>(
      this.baseUrl + USERS_ROUTES.PATCH_USER(path),
      body,
      { params }
    );

    return data;
  }

  /** 사용자 삭제 */
  async deleteUser(req: deleteUserRequest) {
    const { path, params, body } = req;

    const { data } = await this._ajax.delete<deleteUserResponse>(
      this.baseUrl + USERS_ROUTES.DELETE_USER(path),
      { params, data: body }
    );

    return data;
  }
}
