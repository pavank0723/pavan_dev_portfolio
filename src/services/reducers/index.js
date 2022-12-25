import { combineReducers } from "redux";
import { skillData } from "./skillReducer";


const rootReducer = combineReducers(
    {
        skillData
    }
)

export default rootReducer