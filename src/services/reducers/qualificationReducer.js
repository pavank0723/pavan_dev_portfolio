import { SET_QUALIFICATION_LIST } from "../constants/const";

export const qualificationData = (data = [],action) =>{
    switch(action.type){
        case SET_QUALIFICATION_LIST:
            console.log("Qualification set Reducer called ",action)
            return [...action.data]
        default:
            return data
    }
}