interface IComment {
  /** 게시글 ID */
  postId: number;
  /** 댓글 ID */
  id: number;
  /** 이름 */
  name: string;
  /** 이메일 */
  email: string;
  /** 내용 */
  body: string;
}

export type getCommentsRequestParams = {};

export type getCommentsRequestpath = {
  postId: number;
};

export type getCommentsRequestBody = {};

/** 댓글 목록 조회 요청 */
export type getCommentsRequest = {
  path?: getCommentsRequestpath;
  params?: getCommentsRequestParams;
  body?: getCommentsRequestBody;
};

/** 댓글 목록 조회 응답 */
export type getCommentsResponse = Array<IComment>;

export type getCommentDetailRequestParams = {};

export type getCommentDetailRequestpath = {
  commentId: number;
};

export type getCommentDetailRequestBody = {};

/** 댓글 상세 조회 요청 */
export type getCommentDetailRequest = {
  path: getCommentDetailRequestpath;
  params?: getCommentDetailRequestParams;
  body?: getCommentDetailRequestBody;
};

/** 댓글 상세 조회 응답 */
export type getCommentDetailResponse = IComment;

export type createCommentRequestParams = {};

export type createCommentRequestpath = {};

export type createCommentRequestBody = Omit<IComment, "id">;

/** 댓글 생성 요청 */
export type createCommentRequest = {
  path?: createCommentRequestpath;
  params?: createCommentRequestParams;
  body: createCommentRequestBody;
};

/** 댓글 생성 응답 */
export type createCommentResponse = IComment;

export type updateCommentRequestParams = {};

export type updateCommentRequestpath = {
  commentId: number;
};

export type updateCommentRequestBody = Omit<IComment, "postId" | "id">;

/** 댓글 수정 요청 */
export type updateCommentRequest = {
  path: updateCommentRequestpath;
  params?: updateCommentRequestParams;
  body: updateCommentRequestBody;
};

/** 댓글 수정 응답 */
export type updateCommentResponse = IComment;

export type patchCommentRequestParams = {};

export type patchCommentRequestpath = {
  commentId: number;
};

export type patchCommentRequestBody = Partial<Omit<IComment, "postId" | "id">>;

/** 댓글 부분 수정 요청 */
export type patchCommentRequest = {
  path: patchCommentRequestpath;
  params?: patchCommentRequestParams;
  body: patchCommentRequestBody;
};

/** 댓글 부분 수정 응답 */
export type patchCommentResponse = IComment;

export type deleteCommentRequestParams = {};

export type deleteCommentRequestpath = {
  commentId: number;
};

export type deleteCommentRequestBody = {};

/** 댓글 삭제 요청 */
export type deleteCommentRequest = {
  path: deleteCommentRequestpath;
  params?: deleteCommentRequestParams;
  body?: deleteCommentRequestBody;
};

/** 댓글 삭제 응답 */
export type deleteCommentResponse = {};
