import { AjaxInstance } from "../@types/ajaxInstance.type";
import {
  /** 댓글 목록 조회 요청 */
  getCommentsRequest,
  getCommentsResponse,
  getCommentDetailRequest,
  getCommentDetailResponse,
  createCommentRequest,
  createCommentResponse,
  updateCommentRequest,
  updateCommentResponse,
  patchCommentRequest,
  patchCommentResponse,
  deleteCommentRequest,
  deleteCommentResponse
} from '../@types/demoComment.api.type';

const DEMO_BASE_URL = 'https://jsonplaceholder.typicode.com';

const COMMENT_ROUTES = {
  /** 댓글 목록 조회 */
  GET_COMMENTS: (path: getCommentsRequest['path']) => (path ? `/comments` : `/comments`),
  /** 댓글 상세 조회 */
  GET_COMMENT_DETAIL: (path: getCommentDetailRequest['path']) =>
    path ? `/comments/${path}` : `/comments/:commentID`,
  /** 댓글 생성 */
  CREATE_COMMENT: (path: createCommentRequest['path']) =>
    path ? `/comments` : `comments`,
  /** 댓글 수정 */
  UPDATE_COMMENT: (path: updateCommentRequest['path']) =>
    path ? `/comments/${path.commentId}` : `/comments/commentID`,
  /** 댓글 부분 수정 */
  PATCH_COMMENT: (path: patchCommentRequest['path']) =>
    path ? `/comments/${path.commentId}` : `/comments/commentID`,
  /** 댓글 삭제 */
  DELETE_COMMENT: (path:deleteCommentRequest['path']) =>
    path ? `/comments/${path.commentId}` : `/comments/commentID`,

} as const;


export class DemoCommentService {
  baseUrl = DEMO_BASE_URL;
  _ajax: AjaxInstance;
  constructor(_ajax: AjaxInstance) {
    this._ajax = _ajax;
  }

  /** 댓글 목록 조회 */
  async getComments(req: getCommentsRequest) {
    const { path, params, body } = req;
    const { data } = await this._ajax.get<getCommentsResponse>(
      this.baseUrl + COMMENT_ROUTES.GET_COMMENTS(path),
      {  params, data: body }
    );

    return data;
  }

  /** 댓글 상세 조회 */
  async getCommentDetail(req: getCommentDetailRequest) {
    const { path, params, body } = req;
    const { data } = await this._ajax.get<getCommentDetailResponse>(
      this.baseUrl + COMMENT_ROUTES.GET_COMMENT_DETAIL(path),
      { params, data: body }
    );

    return data;
  }

  /** 댓글 생성 */
  async createComment(req: createCommentRequest) {
    const { path, params, body } = req;
    const { data } = await this._ajax.post<createCommentResponse>(
      this.baseUrl + COMMENT_ROUTES.CREATE_COMMENT(path),
      body,
      { params }
    );
    return data;
  }

  /** 댓글 수정 */
  async updateComment(req: updateCommentRequest) {
    const { path, params, body } = req;
    const { data } = await this._ajax.put<updateCommentResponse>(
      this.baseUrl + COMMENT_ROUTES.UPDATE_COMMENT(path),
      body,
      { params }
    );
    return data;
  }

  /** 댓글 부분 수정 */
  async patchComment(req: patchCommentRequest) {
    const { path, params, body } = req;
    const { data } = await this._ajax.patch<patchCommentResponse>(
      this.baseUrl + COMMENT_ROUTES.PATCH_COMMENT(path),
      body,
      { params }
    );
    return data;
  }
  
  /** 댓글 삭제 */
  async deleteComment(req: deleteCommentRequest) {
    const { path, params, body } = req;
    await this._ajax.delete<deleteCommentResponse>(
      this.baseUrl + COMMENT_ROUTES.DELETE_COMMENT(path),
      { params, data: body }
    );
  }
}