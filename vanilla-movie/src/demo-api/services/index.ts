import fetchRequest from "../instances/fetchRequest";
import xmlHttpRequest from "../instances/xmlHttpRequest";
import { DemoTodoService } from "./demoTodo.service";
import { DemoUserService } from "./demoUser.service";

export const demoTodoService = new DemoTodoService(xmlHttpRequest);
export const demoUserService = new DemoUserService(fetchRequest);
