import http from "../constants/http-common"

export const getAllSkill = () =>{
    return http.get("/skill_category/views")
}

