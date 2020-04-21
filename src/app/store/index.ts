import { toolsReducer } from '../tools/store/reducers/tools.reducer';
import { ToolEffects } from '../tools/store/tool.effects';


export const reducers = {
    tools: toolsReducer
}

export const effects = [
    ToolEffects
]