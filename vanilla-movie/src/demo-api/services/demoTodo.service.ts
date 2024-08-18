import { AjaxInstance } from "../@types/ajaxInstance.type";
import {
  createTodoRequest,
  createTodoResponse,
  deleteTodoRequest,
  getTodoDetailRequest,
  getTodoDetailResponse,
  getTodosRequest,
  getTodosResponse,
  patchTodoRequest,
  patchTodoResponse,
  updateTodoRequest,
  updateTodoResponse,
} from "../@types/demoTodo.api.type";
import fetchRequest from "../instances/fetchRequest";
import xmlHttpRequest from "../instances/xmlHttpRequest";

const DEMO_BASE_URL = "https://jsonplaceholder.typicode.com";

const TODO_ROUTES = {
  GET_TODOS: (path?: getTodosRequest["path"]) => (path ? `/todos` : `/todos`),
  GET_TODO_DETAIL: (path?: getTodoDetailRequest["path"]) =>
    path ? `/todos/${path.todoId}` : `/todos/:todoId`,
  CREATE_TODO: (path?: createTodoRequest["path"]) =>
    path ? `/todos` : `/todos`,
  UPDATE_TODO: (path?: updateTodoRequest["path"]) =>
    path ? `/todos/${path.todoId}` : `/todos/:todoId`,
  PATCH_TODO: (path?: patchTodoRequest["path"]) =>
    path ? `/todos/${path.todoId}` : `/todos/:todoId`,
  DELETE_TODO: (path?: deleteTodoRequest["path"]) =>
    path ? `/todos/${path.todoId}` : `/todos/:todoId`,
} as const;

export class DemoTodoService {
  baseUrl = DEMO_BASE_URL;
  constructor(private _ajax: AjaxInstance) {}

  async getTodos(req: getTodosRequest) {
    const { body, params, path } = req;
    const { data, status } = await this._ajax.get<getTodosResponse, unknown>(
      this.baseUrl + TODO_ROUTES.GET_TODOS(path),
      { params, data: body }
    );

    if (status !== 200) {
      throw new Error("Failed to fetch todos");
    }

    return data;
  }

  async getTodoById(req: getTodoDetailRequest) {
    const { body, params, path } = req;
    const { data } = await this._ajax.get<getTodoDetailResponse>(
      this.baseUrl + TODO_ROUTES.GET_TODO_DETAIL(path),
      { params, data: body }
    );

    return data;
  }

  async createTodo(req: createTodoRequest) {
    const { body, params, path } = req;

    const { data } = await this._ajax.post<createTodoResponse>(
      this.baseUrl + TODO_ROUTES.GET_TODOS(path),
      body,
      { params }
    );

    return data;
  }

  /** 할일 수정 */
  async updateTodo(req: updateTodoRequest) {
    const { body, path, params } = req;
    const { data } = await this._ajax.put<updateTodoResponse>(
      TODO_ROUTES.UPDATE_TODO(path),
      body,
      { params }
    );

    return data;
  }

  /** 할일 수정 */
  async patchTodo(req: patchTodoRequest) {
    const { body, path, params } = req;
    const { data } = await this._ajax.patch<patchTodoResponse>(
      TODO_ROUTES.PATCH_TODO(path),
      body,
      { params }
    );

    return data;
  }

  /** 할일 삭제 */
  async deleteTodo(req: deleteTodoRequest) {
    const { body, params, path } = req;
    await this._ajax.delete<void>(TODO_ROUTES.DELETE_TODO(path), {
      params: params,
      data: body,
    });
  }
}
