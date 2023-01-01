import { combineReducers } from "redux";
import { qualificationData } from "./qualificationReducer";
import { skillData } from "./skillReducer";


const rootReducer = combineReducers(
    {
        skillData,
        qualificationData
    }
)

export default rootReducer