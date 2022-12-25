import { SET_SKILL_LIST } from "../constants/const";

export const skillData = (data = [],action) =>{
    switch(action.type){
        case SET_SKILL_LIST:
            console.log("Skill set Reducer called ",action)
            return [...action.data]
        default:
            return data
    }
}