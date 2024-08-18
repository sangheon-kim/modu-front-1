
interface IPhoto {
  /** 앨범 ID */
  albumId: number;
  /** 사진 ID */
  id: number;
  /** 제목 */
  title: string;
  /** URL */
  url: string;
  /** 썸네일 URL */
  thumbnailUrl: string;
}

export type getPhotosRequestParams = {
  _limit?: number;
  _start?: number;
};

export type getPhotosRequestpath = {};

export type getPhotosRequestBody = {};

/** 사진 목록 조회 요청 */
export type getPhotosRequest = {
  path?: getPhotosRequestpath;
  params?: getPhotosRequestParams;
  body?: getPhotosRequestBody;
};

/** 사진 목록 조회 응답 */
export type getPhotosResponse = Array<IPhoto>;

export type getPhotoDetailRequestParams = {};

export type getPhotoDetailRequestpath = {
  photoId: number;
};

export type getPhotoDetailRequestBody = {};

/** 사진 상세 조회 요청 */
export type getPhotoDetailRequest = {
  path: getPhotoDetailRequestpath;
  params?: getPhotoDetailRequestParams;
  body?: getPhotoDetailRequestBody;
};

/** 사진 상세 조회 응답 */
export type getPhotoDetailResponse = IPhoto;

export type createPhotoRequestParams = {};

export type createPhotoRequestpath = {};

export type createPhotoRequestBody = Omit<IPhoto, "id">;

/** 사진 생성 요청 */
export type createPhotoRequest = {
  path?: createPhotoRequestpath;
  params?: createPhotoRequestParams;
  body: createPhotoRequestBody;
};

/** 사진 생성 응답 */
export type createPhotoResponse = IPhoto;

export type updatePhotoRequestParams = {};

export type updatePhotoRequestpath = {
  photoId: number;
};

export type updatePhotoRequestBody = Omit<IPhoto, "id">;

/** 사진 수정 요청 */
export type updatePhotoRequest = {
  path: updatePhotoRequestpath;
  params?: updatePhotoRequestParams;
  body: updatePhotoRequestBody;
};

/** 사진 수정 응답 */
export type updatePhotoResponse = IPhoto;

export type patchPhotoRequestParams = {};

export type patchPhotoRequestpath = {
  photoId: number;
};

export type patchPhotoRequestBody = Partial<Omit<IPhoto, "id">>;

/** 사진 부분 수정 요청 */
export type patchPhotoRequest = {
  path: patchPhotoRequestpath;
  params?: patchPhotoRequestParams;
  body: patchPhotoRequestBody;
};

/** 사진 부분 수정 응답 */
export type patchPhotoResponse = IPhoto;

export type deletePhotoRequestParams = {};

export type deletePhotoRequestpath = {
  photoId: number;
};

export type deletePhotoRequestBody = {};

/** 사진 삭제 요청 */
export type deletePhotoRequest = {
  path: deletePhotoRequestpath;
  params?: deletePhotoRequestParams;
  body?: deletePhotoRequestBody;
};

/** 사진 삭제 응답 */
export type deletePhotoResponse = {};
