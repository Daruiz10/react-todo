import { Todo } from "../../utils/types";
import { TodosActions } from "../action-types/TodosActionTypes";
import { Action } from "../actions/todosActions";

const todosReducer = (state: Todo[], action: Action) => {
    switch (action.type) {
        case TodosActions.COMPLETE:
        
        case TodosActions.UPDATE:

        case TodosActions.DELETE:

        default: 
            return state;
    }
};

export default todosReducer;