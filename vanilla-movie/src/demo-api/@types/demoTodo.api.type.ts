interface ITodo {
  /** 사용자 ID */
  userId: number;
  /** 할일 ID */
  id: number;
  /** 제목 */
  title: string;
  /** 완료 여부 */
  completed: boolean;
}

export type getTodosRequestParams = {
  _limit?: number;
  _start?: number;
};

export type getTodosRequestPath = {};

export type getTodosRequestBody = {};

/** 할일 목록 조회 요청 */
export type getTodosRequest = {
  path?: getTodosRequestPath;
  params?: getTodosRequestParams;
  body?: getTodosRequestBody;
};

/** 할일 목록 조회 응답 */
export type getTodosResponse = Array<ITodo>;

export type getTodoDetailRequestParams = {};

export type getTodoDetailRequestpath = {
  /** TODO ID */
  todoId: number;
};

export type getTodoDetailRequestBody = {};

/** 할일 상세 조회 요청 */
export type getTodoDetailRequest = {
  path: getTodoDetailRequestpath;
  params?: getTodoDetailRequestParams;
  body?: getTodoDetailRequestBody;
};

/** 할일 상세 조회 응답 */
export type getTodoDetailResponse = ITodo;

export type createTodoRequestParams = {};

export type createTodoRequestpath = {};

export type createTodoRequestBody = Omit<ITodo, "id">;

/** 할일 생성 요청 */
export type createTodoRequest = {
  path?: createTodoRequestpath;
  params?: createTodoRequestParams;
  body: createTodoRequestBody;
};

/** 할일 생성 응답 */
export type createTodoResponse = Omit<ITodo, "id">;

export type updateTodoRequestParams = {};

export type updateTodoRequestpath = {
  todoId: number;
};

export type updateTodoRequestBody = Partial<Omit<ITodo, "id">>;

/** 할일 수정 요청 */
export type updateTodoRequest = {
  path: updateTodoRequestpath;
  params?: updateTodoRequestParams;
  body: updateTodoRequestBody;
};

/** 할일 수정 응답 */
export type updateTodoResponse = ITodo;

export type patchTodoRequestParams = {};

export type patchTodoRequestpath = {
  todoId: number;
};

export type patchTodoRequestBody = Partial<Omit<ITodo, "id">>;

/** 할일 수정 요청 */
export type patchTodoRequest = {
  path: patchTodoRequestpath;
  params?: patchTodoRequestParams;
  body: patchTodoRequestBody;
};

/** 할일 수정 응답 */
export type patchTodoResponse = ITodo;

export type deleteTodoRequestParams = {};

export type deleteTodoRequestpath = {
  todoId: number;
};

export type deleteTodoRequestBody = {};

/** 할일 삭제 요청 */
export type deleteTodoRequest = {
  path: deleteTodoRequestpath;
  params?: deleteTodoRequestParams;
  body: deleteTodoRequestBody;
};

export type deleteTodoResponse = {};
