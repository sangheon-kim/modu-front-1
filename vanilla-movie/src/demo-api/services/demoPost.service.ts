import { AjaxInstance } from "../@types/ajaxInstance.type";
import {
  getPostsRequest,
  getPostDetailRequest,
  createPostRequest,
  updatePostRequest,
  deletePostRequest,
  patchPostRequest,
  getPostsResponse,
  getPostDetailResponse,
  createPostResponse,
  updatePostResponse,
  deletePostResponse,
  patchPostResponse,
} from "../@types/demoPost.api.type";

const DEMO_BASE_URL = "https://jsonplaceholder.typicode.com";

const POSTS_ROUTES = {
  /** 게시글 목록 조회 */
  GET_POSTS: (path: getPostsRequest["path"]) => `/posts/${path}`,
  /** 게시글 상세 조회 */
  GET_POST_DETAIL: (path: getPostDetailRequest["path"]) =>
    path ? `/posts/${path.postId}` : `/posts/:postId`,
  /** 게시글 생성 */
  CREATE_POST: (path: createPostRequest["path"]) =>
    path ? `/posts` : `/posts`,
  /** 게시글 수정 */
  UPDATE_POST: (path: updatePostRequest["path"]) =>
    path ? `/posts/${path.postId}` : `/posts/:postId`,
  /** 게시글 부분 수정 */
  PATCH_POST: (path: patchPostRequest["path"]) =>
    path ? `/posts/${path.postId}` : `/posts/:postId`,
  /** 게시글 삭제 */
  DELETE_POST: (path: deletePostRequest["path"]) =>
    path ? `/posts/${path.postId}` : `/posts/:postId`,
} as const;

export class DemoPostService {
  baseUrl = DEMO_BASE_URL;
  _ajax: AjaxInstance;
  constructor(_ajax: AjaxInstance) {
    this._ajax = _ajax;
  }

  /** 게시글 목록 조회 */
  async getPosts(req: getPostsRequest) {
    const { path, params, body } = req;

    const { data } = await this._ajax.get<getPostsResponse>(
      this.baseUrl + POSTS_ROUTES.GET_POSTS(path),
      { params, data: body }
    );

    return data;
  }

  /** 게시글 상세 조회 */
  async getPostDetail(req: getPostDetailRequest) {
    const { path, params, body } = req;

    const { data } = await this._ajax.get<getPostDetailResponse>(
      this.baseUrl + POSTS_ROUTES.GET_POST_DETAIL(path),
      { params, data: body }
    );

    return data;
  }

  /** 게시글 생성 */
  async createPost(req: createPostRequest) {
    const { path, params, body } = req;

    const { data } = await this._ajax.post<createPostResponse>(
      this.baseUrl + POSTS_ROUTES.CREATE_POST(path),
      body,
      { params }
    );

    return data;
  }

  /** 게시글 수정 */
  async updatePost(req: updatePostRequest) {
    const { path, params, body } = req;

    const { data } = await this._ajax.put<updatePostResponse>(
      this.baseUrl + POSTS_ROUTES.UPDATE_POST(path),
      body,
      { params }
    );

    return data;
  }

  /** 게시글 부분 수정 */
  async patchPost(req: patchPostRequest) {
    const { path, params, body } = req;

    const { data } = await this._ajax.patch<patchPostResponse>(
      this.baseUrl + POSTS_ROUTES.PATCH_POST(path),
      body,
      { params }
    );

    return data;
  }

  /** 게시글 삭제 */
  async deletePost(req: deletePostRequest) {
    const { path, params, body } = req;

    await this._ajax.delete<deletePostResponse>(
      this.baseUrl + POSTS_ROUTES.DELETE_POST(path),
      { params, data: body }
    );
  }
}
