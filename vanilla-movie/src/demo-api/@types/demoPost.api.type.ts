interface IPost {
  /** user ID */
  userId: number;
  /** 게시글 ID */
  id: number;
  /** 제목 */
  title: string;
  /** 내용 */
  body: string;
}

export type getPostsRequestParams = {
  /** 제한 개수 */
  _limit?: number;
  /** 시작 위치 */
  _start?: number;
};

export type getPostsRequestpath = {};

export type getPostsRequestBody = {};

/** 게시글 목록 조회 요청 */
export type getPostsRequest = {
  path?: getPostsRequestpath;
  params?: getPostsRequestParams;
  body?: getPostsRequestBody;
};

/** 게시글 목록 조회 응답 */
export type getPostsResponse = Array<IPost>;

export type getPostDetailRequestParams = {};

export type getPostDetailRequestpath = {
  postId: number;
};

export type getPostDetailRequestBody = {};

/** 게시글 상세 조회 요청 */
export type getPostDetailRequest = {
  path: getPostDetailRequestpath;
  params?: getPostDetailRequestParams;
  body?: getPostDetailRequestBody;
};

/** 게시글 상세 조회 응답 */
export type getPostDetailResponse = IPost;

export type createPostRequestParams = {};

export type createPostRequestpath = {};

export type createPostRequestBody = {
  /** 제목 */
  title: string;
  /** 내용 */
  body: string;
};

/** 게시글 생성 요청 */
export type createPostRequest = {
  path?: createPostRequestpath;
  params?: createPostRequestParams;
  body: createPostRequestBody;
};

/** 게시글 생성 응답 */
export type createPostResponse = IPost;

export type updatePostRequestParams = {};

export type updatePostRequestpath = {
  postId: number;
};

export type updatePostRequestBody = {
  /** 제목 */
  title: string;
  /** 내용 */
  body: string;
};

/** 게시글 수정 요청 */
export type updatePostRequest = {
  path: updatePostRequestpath;
  params?: updatePostRequestParams;
  body: updatePostRequestBody;
};

/** 게시글 수정 응답 */
export type updatePostResponse = IPost;

export type patchPostRequestParams = {};

export type patchPostRequestpath = {
  postId: number;
};

export type patchPostRequestBody = {
  /** 제목 */
  title?: string;
  /** 내용 */
  body?: string;
};

/** 게시글 수정 요청 */
export type patchPostRequest = {
  path: patchPostRequestpath;
  params?: patchPostRequestParams;
  body: patchPostRequestBody;
};

/** 게시글 수정 응답 */
export type patchPostResponse = IPost;

export type deletePostRequestParams = {};

export type deletePostRequestpath = {
  postId: number;
};

export type deletePostRequestBody = {};

export type deletePostRequest = {
  path: deletePostRequestpath;
  params?: deletePostRequestParams;
  body?: deletePostRequestBody;
};

export type deletePostResponse = void;
