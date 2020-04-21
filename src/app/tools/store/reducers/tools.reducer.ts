import { ToolState } from "../../../store/models/tool.model";
import { ToolsActions, ToolActionTypes } from "../actions/tools.actions";



const initialState: ToolState = {
  loadingTools: false,
  tools: [
    {
      name: "Test Hammer",
    },
    {
      name: "Test Drill",
    },
  ],
  error: undefined
};

export const toolsReducer = (
  state: ToolState = initialState,
  action: ToolsActions
) => {
  switch (action.type) {
    // GET TOOLS //
    case ToolActionTypes.GET_ALL_TOOLS:
      return {
          ...state,
          loadingTools: true
      }

    case ToolActionTypes.GET_ALL_TOOLS_SUCCESS:
        return {
            ...state,
            loadingTools: false,
            tools: [...state.tools, ...action.payload],
        }

      case ToolActionTypes.GET_ALL_TOOLS_FAILURE:
        return {
          ...state,
          error: action.error
        }
    default:
      return state;
  }
};
