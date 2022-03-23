import { Todo } from "../../utils/types";
import { TodosActions } from "../action-types";

interface CompleteTodoAction {
    type: TodosActions;
    id: number;
}

interface EditTodoAction {
    type: TodosActions;
    payload: Todo;
}

interface DeleteTodoAction {
    type: TodosActions;
    id: number;
}

interface CreateTodoAction {
    type: TodosActions;
    payload: Todo;
}

export type Action = CompleteTodoAction | DeleteTodoAction | EditTodoAction | CreateTodoAction;