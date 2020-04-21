import { AddToolActions, AddToolActionTypes } from '../actions/add.actions';
import { AddToolState } from '../models/add.model';


const initialState: AddToolState = {
  tool: undefined,
  loadingTool: false,
  error: undefined
};

export const toolsReducer = (
  state: AddToolState = initialState,
  action: AddToolActions
) => {
  switch (action.type) {
    // ADD TOOL //

    case AddToolActionTypes.ADD_TOOL:
        return {
            ...state,
            loadingTool: true
        }

    case AddToolActionTypes.ADD_TOOL_SUCCESS:
        return {
            ...state,
            tool: action.payload
        }
    
    case AddToolActionTypes.ADD_TOOL_FAILURE:
        return {
            ...state,
            error: action.error
        }
        
   
    default:
      return state;
  }
};
