import { Dispatch } from "redux";
import { Todo } from "../../utils/types";
import { TodosActions } from "../action-types";
import { Action } from "../actions";

const completeTodo = (id: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: TodosActions.COMPLETE,
            id
        });
    };
};

const updateTodo = (todo: Todo) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: TodosActions.UPDATE,
            payload: todo
        });
    };
};

const createTodo = (todo: Todo) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: TodosActions.CREATE,
            payload: todo
        });
    };
};

const deleteTodo = (id: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: TodosActions.DELETE,
            id
        });
    };
};

const TodosActionCreators = { createTodo, deleteTodo, completeTodo, updateTodo };

export { TodosActionCreators };