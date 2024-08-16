interface IAlbum {
  /** 사용자 ID */
  userId: number;
  /** 앨범 ID */
  id: number;
  /** 제목 */
  title: string;
}

export type getAlbumsRequestParams = {
  _limit?: number;
  _start?: number;
};

export type getAlbumsRequestpath = {};

export type getAlbumsRequestBody = {};

/** 앨범 목록 조회 요청 */
export type getAlbumsRequest = {
  path?: getAlbumsRequestpath;
  params?: getAlbumsRequestParams;
  body?: getAlbumsRequestBody;
};

export type getAlbumsResponse = Array<IAlbum>;

export type getAlbumDetailRequestParams = {};

export type getAlbumDetailRequestpath = {
  albumId: number;
};

export type getAlbumDetailRequestBody = {};

/** 앨범 상세 조회 요청 */
export type getAlbumDetailRequest = {
  path: getAlbumDetailRequestpath;
  params?: getAlbumDetailRequestParams;
  body?: getAlbumDetailRequestBody;
};

export type getAlbumDetailResponse = IAlbum;

export type createAlbumRequestParams = {};

export type createAlbumRequestpath = {};

export type createAlbumRequestBody = {
  title: string;
};

/** 앨범 생성 요청 */
export type createAlbumRequest = {
  path?: createAlbumRequestpath;
  params?: createAlbumRequestParams;
  body: createAlbumRequestBody;
};

/** 앨범 생성 응답 */
export type createAlbumResponse = IAlbum;

export type updateAlbumRequestParams = {};

export type updateAlbumRequestpath = {
  albumId: number;
};

export type updateAlbumRequestBody = {
  /** 제목 */
  title: string;
};

/** 앨범 수정 요청 */
export type updateAlbumRequest = {
  path: updateAlbumRequestpath;
  params?: updateAlbumRequestParams;
  body: updateAlbumRequestBody;
};

export type updateAlbumResponse = void;

export type patchAlbumRequestParams = {};

export type patchAlbumRequestpath = {
  albumId: number;
};

export type patchAlbumRequestBody = {
  /** 제목 */
  title?: string;
};

/** 앨범 수정 요청 */
export type patchAlbumRequest = {
  path: patchAlbumRequestpath;
  params?: patchAlbumRequestParams;
  body: patchAlbumRequestBody;
};

export type patchAlbumResponse = void;

export type deleteAlbumRequestParams = {};

export type deleteAlbumRequestpath = {
  albumId: number;
};

export type deleteAlbumRequestBody = {};

/** 앨범 삭제 요청 */
export type deleteAlbumRequest = {
  path: deleteAlbumRequestpath;
  params?: deleteAlbumRequestParams;
  body?: deleteAlbumRequestBody;
};

export type deleteAlbumResponse = void;
