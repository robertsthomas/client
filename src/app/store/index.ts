import { toolsReducer } from '../tools/store/tool.reducer';
import { ToolEffects } from '../tools/store/tool.effects';


export const reducers = {
    tools: toolsReducer
}

export const effects = [
    ToolEffects
]