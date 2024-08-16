interface IUser {
  /** 사용자 ID */
  id: number;
  /** 이름 */
  name: string;
  /** 사용자명 */
  username: string;
  /** 이메일 */
  email: string;
  /** 주소 */
  address: {
    /** 거리 */
    street: string;
    /** 상세주소 */
    suite: string;
    /** 도시 */
    city: string;
    /** 우편번호 */
    zipcode: string;
    /** 지리정보 */
    geo: {
      /** 위도 */
      lat: string;
      /** 경도 */
      lng: string;
    };
  };
  /** 전화번호 */
  phone: string;
  /** 웹사이트 */
  website: string;
  /** 회사 정보 */
  company: {
    /** 회사명 */
    name: string;
    /** 업종 */
    catchPhrase: string;
    /** 업무 */
    bs: string;
  };
}

export type getUsersRequestParams = {
  _limit?: number;
  _start?: number;
};

export type getUsersRequestpath = {};

export type getUsersRequestBody = {};

/** 사용자 목록 조회 요청 */
export type getUsersRequest = {
  path?: getUsersRequestpath;
  params?: getUsersRequestParams;
  body?: getUsersRequestBody;
};

/** 사용자 목록 조회 응답 */
export type getUsersResponse = Array<IUser>;

export type getUserDetailRequestParams = {};

export type getUserDetailRequestpath = {
  userId: number;
};

export type getUserDetailRequestBody = {};

/** 사용자 상세 조회 요청 */
export type getUserDetailRequest = {
  path: getUserDetailRequestpath;
  params?: getUserDetailRequestParams;
  body?: getUserDetailRequestBody;
};

/** 사용자 상세 조회 응답 */
export type getUserDetailResponse = IUser;

export type createUserRequestParams = {};

export type createUserRequestpath = {};

export type createUserRequestBody = Omit<IUser, "id">;

/** 사용자 생성 요청 */
export type createUserRequest = {
  path?: createUserRequestpath;
  params?: createUserRequestParams;
  body: createUserRequestBody;
};

/** 사용자 생성 응답 */
export type createUserResponse = IUser;

export type updateUserRequestParams = {};

export type updateUserRequestpath = {
  userId: number;
};

export type updateUserRequestBody = Omit<IUser, "id">;

/** 사용자 수정 요청 */
export type updateUserRequest = {
  path: updateUserRequestpath;
  params?: updateUserRequestParams;
  body: updateUserRequestBody;
};

/** 사용자 수정 응답 */
export type updateUserResponse = IUser;

export type patchUserRequestParams = {};

export type patchUserRequestpath = {
  userId: number;
};

export type patchUserRequestBody = Partial<Omit<IUser, "id">>;

/** 사용자 수정 요청 */
export type patchUserRequest = {
  path: patchUserRequestpath;
  params?: patchUserRequestParams;
  body: patchUserRequestBody;
};

/** 사용자 수정 응답 */
export type patchUserResponse = IUser;

export type deleteUserRequestParams = {};

export type deleteUserRequestpath = {
  userId: number;
};

export type deleteUserRequestBody = {};

/** 사용자 삭제 요청 */
export type deleteUserRequest = {
  path: deleteUserRequestpath;
  params?: deleteUserRequestParams;
  body?: deleteUserRequestBody;
};

/** 사용자 삭제 응답 */
export type deleteUserResponse = void;
